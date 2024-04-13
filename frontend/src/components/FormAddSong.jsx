import React, { useState } from 'react';
import axios from 'axios';

const FormAddSong = ({ onAddSong }) => {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [photo, setPhoto] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!artist || !song || !photo) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }
    try {
      await axios.post('http://localhost:3000/api/songs', {
        artist,
        song,
        photo
      });
      onAddSong(); 
      setArtist(''); 
      setSong('');
      setPhoto('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  return (
    <div className="bg-gray-200  rounded-lg">
      <h2 className="text-lg font-bold text-center mb-4">Adicione uma Música</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artist">
            Nome do Artista
          </label>
          <input
            type="text"
            id="artist"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Digite o nome do artista"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="song">
            Música
          </label>
          <input
            type="text"
            id="song"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Digite o nome da música"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
            URL da foto
          </label>
          <input
            type="text"
            id="photo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Insira a URL da foto ou envie um arquivo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
        >
          Adicionar Música
        </button>
      </form>
    </div>
  );
};

export default FormAddSong;
