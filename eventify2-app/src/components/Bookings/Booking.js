import React, { useState, useEffect } from 'react';


const BookingComponent = ({ userId, eventId, ticketCount }) => {
  const [bookingStatus, setBookingStatus] = useState('Booking...');
  useEffect(() => {
    fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        eventId,
        ticketCount,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        setBookingStatus('Successfully booked!');
       
      })
      .catch((error) => {
        setBookingStatus('Failed to book. Please try again later.');
       
      });
  }, [userId, eventId, ticketCount]);
  return (
    <div>
      {bookingStatus}
    </div>
  );
};
export default BookingComponent;