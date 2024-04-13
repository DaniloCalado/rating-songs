import React from 'react';
import Header from './components/Header';
import Columns from './components/Columns';

function App() {
  return (
    <div className="bg-blue-500 min-h-screen">
      <Header />
      <div className="flex justify-center">
        <Columns />
      </div>
    </div>
  );
}

export default App;
