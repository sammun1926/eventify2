import React, { useState } from 'react';
import {  useNavigate,  } from 'react-router-dom';

import './Events.css';

export const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cards, setCards] = useState([
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
    
  ]);

  const [searchInput, setSearchInput] = useState('');


  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSortByDate = () => {
    const sortedCards = [...filteredCards].sort((a, b) => new Date(a.date) - new Date(b.date));
    setCards(sortedCards);
  };

  const navigate = useNavigate();

  const user ={}

  const handleNavigation = (id) => {

    if (user) {
      navigate(`/event/${id}`);
    } else {
      navigate(`/login?returnUrl=event/${id}`)
    }
 
  };

  const handleSortByTitle = () => {
    const sortedCards = [...filteredCards].sort((a, b) => a.title.localeCompare(b.title));
    setCards(sortedCards);
    setSelectedEvent(null); 
  };

  const handleSeeDetails = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <section>
        <div className='container'>
          <h1>Upcoming Events</h1>
          <hr />
          <div className='search-container'>
            <input
              type='text'
              value={searchInput}
              onChange={handleSearchChange}
              placeholder='Search by title...'
            />
            <button onClick={handleSortByDate}>Sort by Date</button>
            <button onClick={handleSortByTitle}>Sort by Title</button>
          </div>
          <div className='cards'>
            {filteredCards.map((card, i) => (
              <div key={i} className='card'>
                <img src={card.imageSrc} alt={card.title} />
                <h3>{card.title}</h3>
                <p>Date: {card.date}</p>
                <p>Location: {card.location}</p>
                <p>{card.text}</p>
                {/* <button className='btn' onClick={handleNavigation(card.id) }>
                  See Details
                </button> */}
                <button className='btn' onClick={() => handleNavigation(i)}>
                 
                  View Details
               
                 </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};
