import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Columns = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/songs");
        console.log(response);
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="flex h-screen w-full p-4">
      <div className="w-2/4 bg-gray-200 p-4 rounded-lg border-r border-black">
        <h2 className="text-lg font-bold text-center mb-4">RANKING</h2>
      </div>

      <div className="w-full bg-gray-200 p-4 rounded-lg overflow-auto">
        <h2 className="text-lg font-bold text-center mb-4">
          Lista de Músicas Registradas. Vote na sua favorita
        </h2>
        <div className="flex flex-wrap justify-start pl-4">
          {cards.map((card) => (
            <div key={card.id}>
              <Card artist={card.artist} song={card.song} photo={card.photo} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-2/4 bg-gray-200 p-4 rounded-lg border-l border-black">
        <h2 className="text-lg font-bold text-center mb-4">
          Adicione uma Música
        </h2>
      </div>
    </div>
  );
};

export default Columns;
