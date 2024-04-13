import React from "react";

const Card = ({ id, artist, song, photo, onDelete, onVote }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-8 md:mb-4 mr-2">
      <img
        src={photo}
        alt={`Photo of ${artist}`}
        className="w-36 h-36 mb-2 mx-auto"
      />
      <h3 className="text-lg font-semibold text-center mb-2">{song}</h3>
      <p className="text-gray-600 text-center mb-2">{artist}</p>
      <div className="flex justify-between items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => onDelete(id)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={() => onVote(id)}
        >
          Votar
        </button>
      </div>
    </div>
  );
};

export default Card;
