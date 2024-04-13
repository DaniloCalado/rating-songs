import React from 'react';

const Columns = () => {
  return (
    <div className="flex h-screen w-full p-4">
      <div className="w-2/4 bg-gray-200 p-4 rounded-lg border-r border-black">
        <h2 className="text-lg font-bold text-center mb-4">RANKING</h2>
        {/* Aqui serão exibidos os cards das músicas mais votadas */}
      </div>
      <div className="w-full bg-gray-200 p-4 rounded-lg overflow-auto">
        <h2 className="text-lg font-bold text-center mb-4">Lista de Músicas Registradas. Vote na sua favorita</h2>
        {/* Aqui serão exibidos os cards de todas as músicas registradas */}
      </div>
      <div className="w-2/4 bg-gray-200 p-4 rounded-lg border-l border-black">
        <h2 className="text-lg font-bold text-center mb-4">Adicione uma Música</h2>
        {/* Aqui será exibido o formulário para adicionar uma nova música */}
      </div>
    </div>
  );
};

export default Columns;
