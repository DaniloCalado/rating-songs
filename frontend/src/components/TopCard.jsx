import React from "react";

const TopCard = ({ artist, song, photo, totalVotes, position }) => {
  return (
    <>
    <div>{position}.</div>
    <div className="bg-white shadow-md rounded-lg p-2 mb-8 md:mb-4 mr-2">
      <img
        src={photo}
        alt={`Photo of ${artist}`}
        className="w-full h-36 object-cover mb-2 mx-auto"
      />
      <h3 className="text-lg font-semibold text-center mb-2">{song}</h3>
      <p className="text-gray-600 text-center mb-2">{artist}</p>
      <p className="text-center font-bold">Total de votos: {totalVotes}</p>
    </div>
    </>
  );
};

export default TopCard;
