import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import FormAddSong from "./FormAddSong";

const Columns = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/songs");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
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
      console.error('Error deleting song:', error);
    }
  };

  const handleVote = async (id) => {
    try {
      await axios.post(`http://localhost:3000/api/songs/${id}/vote`);
      onVote(id);
    } catch (error) {
      console.error("Error voting for song:", error);
    }
  };

  return (
    <div className="flex h-screen w-full p-4">
      <div className="w-2/4 bg-gray-200 p-4 rounded-lg border-r border-black">
        <h2 className="text-lg font-bold text-center mb-4">RANKING</h2>
      </div>
      <div className="w-full bg-gray-200 p-4 rounded-lg overflow-auto">
        <h2 className="text-lg font-bold text-center mb-4">
          Lista de Músicas Registradas. Vote na sua favorita
        </h2>
        <div className="flex flex-wrap justify-start gap-2">
          {cards.map((card) => (
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
