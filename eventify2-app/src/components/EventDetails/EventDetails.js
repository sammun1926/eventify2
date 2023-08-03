
import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';

const EventDetails = ({ filteredCards }) => {
  const { eventId } = useParams();
  const event = filteredCards[Number(eventId)];

  if (!event) {
    return <div>No event found</div>;
  }

  return (
    <section className='event-details'>
      <div className='container'>
        <h1>EVENT DETAILS</h1>
      </div>
      <div className='event-details-content grid'>
        <div className='event-details-img'>
        <img src={event.imageSrc} alt={event.title}  />
        </div>
        <div className='event-details-info'>
          <div className='event-details-item title'>
            {event.title}<br/>
            {event.date}<br/>
            {event.location}<br/>
            {event.text}
          </div>
         </div>
      </div>
    </section>
    
    // <div className='event-details-container'>
    //   <div className='event-details'>
    //     <img src={event.imageSrc} alt={event.title} />
    //     <h2>{event.title}</h2>
    //     <p>Date: {event.date}</p>
    //     <p>Location: {event.location}</p>
    //     <p>{event.text}</p>
    //     <button className='btn'>Buy Now</button>
    //   </div>
    // </div>
  );
};

export default EventDetails;
