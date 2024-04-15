import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import TopCard from "./TopCard";
import FormAddSong from "./FormAddSong";

const Columns = () => {
  const [cards, setCards] = useState([]);
  const [topCards, setTopCards] = useState([]);
  const [middleCards, setMiddleCards] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchTopCards = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/songs");
        const sortedCards = response.data.sort(
          (a, b) => b.total_votes - a.total_votes
        );
        const topThreeCards = sortedCards.slice(0, 3);
        setTopCards(topThreeCards);
      } catch (error) {
        console.error("Error fetching top cards:", error);
      }
    };

    const fetchMiddleCards = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/songs");
        setMiddleCards(response.data);
      } catch (error) {
        console.error("Error fetching middle cards:", error);
      }
    };

    fetchTopCards();
    fetchMiddleCards();
  }, []);

  const handleAddSong = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/songs");
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards after adding song:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/songs/${id}`);
      const updatedCards = cards.filter((card) => card.id !== id);
      setCards(updatedCards);
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };

  const handleVote = async (id) => {
    try {
      await axios.post(`http://localhost:3000/api/songs/${id}/vote`);
      const response = await axios.get("http://localhost:3000/api/songs");
      setMiddleCards(response.data);
      const sortedCards = response.data.sort(
        (a, b) => b.total_votes - a.total_votes
      );
      const topThreeCards = sortedCards.slice(0, 3);
      setTopCards(topThreeCards);
    } catch (error) {
      console.error("Error voting for song:", error);
    }
  };

  const filteredCards = middleCards.filter((card) => {
    const lowerCaseFilter = filter.toLowerCase();
    return (
      card.artist.toLowerCase().includes(lowerCaseFilter) ||
      card.song.toLowerCase().includes(lowerCaseFilter)
    );
  });

  return (
    <div className="flex h-screen w-full p-4">
      <div className="w-2/4 bg-gray-200 p-4 rounded-lg border-r border-black overflow-y-auto">
        <h2 className="text-lg font-bold text-center mb-4">RANKING</h2>
        {topCards.map((card, index) => (
          <TopCard
            key={card.id}
            artist={card.artist}
            song={card.song}
            photo={card.photo}
            totalVotes={card.total_votes}
            position={index + 1}
          />
        ))}
      </div>
      <div className="w-full bg-gray-200 p-4 rounded-lg overflow-auto">
        <h2 className="text-lg font-bold text-center mb-4">
          Lista de Músicas Registradas. Vote na sua favorita
        </h2>
        <input
          type="text"
          placeholder="Procure pela música ou banda preferida para ver se já está listada"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="block w-full bg-white border border-gray-300 rounded-md p-2 mb-4"
        />
        <div className="flex flex-wrap justify-start gap-2">
          {filteredCards.map((card) => (
            <div key={card.id}>
              <Card
                id={card.id}
                artist={card.artist}
                song={card.song}
                photo={card.photo}
                onDelete={() => handleDelete(card.id)}
                onVote={() => handleVote(card.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/4 bg-gray-200 p-4 rounded-lg border-l border-black">
        <FormAddSong onAddSong={handleAddSong} />
      </div>
    </div>
  );
};

export default Columns;
