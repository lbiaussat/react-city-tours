import React from 'react';
import Navbar from "./components/navbar/Navbar"
import './App.scss';
import TourList from "./components/TourList/TourList"

function App() {
  return (
    <main className="App">
      <Navbar />
      <TourList />
      
    </main>
  );
}

export default App;
