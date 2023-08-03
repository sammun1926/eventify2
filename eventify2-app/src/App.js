import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Events } from './components/Events/Events';
import Bookings from './components/Bookings/Bookings'; 
import EventDetails from './components/EventDetails/EventDetails';
import UserProfile from './components/UserProfile/UserProfile';


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
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    // Other user properties
  };

  return (
    <Router>
      <Routes>
        <Route path="/Events" element={<Events />} />
        <Route path="/event/:eventId" element={<EventDetails filteredCards={filteredCards} />} />
        <Route path="/booking/:userId/:eventId/:ticketCount" component={Bookings} />
        <Route path="/UserProfile" element={<UserProfile user={user} />} />

      </Routes>
    </Router>
  );
}

export default App;
