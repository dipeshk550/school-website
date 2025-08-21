import React from 'react';
import './Events.css';

const events = [
  { title: 'Science Fair', date: '12 Sep 2025' },
  { title: 'Sports Day', date: '5 Oct 2025' },
  { title: 'Art Exhibition', date: '20 Nov 2025' },
  { title: 'Annual Day', date: '15 Dec 2025' },
];

const Events = () => {
  return (
    <section className="events" id="events">
      <h2>Upcoming Events</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
