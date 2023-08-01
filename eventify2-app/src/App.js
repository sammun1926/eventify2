import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Events } from './components/Events/Events';
import EventDetails from './components/EventDetails/EventDetails';

function App() {
  
  const filteredCards = [
    {
      title: 'ReactComm',
      text: 'Nairobi, Kileleshwa',
      date: 'August 20, 2023',
      location: 'Event Center',
      imageSrc: '../images/image1.jpg',
    },
    {
      title: 'KenyaTech',
      text: 'Nairobi, Kileleshwa',
      date: 'August 22, 2023',
      location: 'Tech Hub',
      imageSrc: '../images/image2.jpg',
    },
    {
      title: 'Innovations',
      text: 'Nairobi, Kileleshwa',
      date: 'August 25, 2023',
      location: 'Innovation Lab',
      imageSrc: '../images/image3.jpg',
    },
   
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Events />} />
        
        <Route path="/event/:eventId" element={<EventDetails filteredCards={filteredCards} />} />
      </Routes>
    </Router>
  );
}

export default App;
