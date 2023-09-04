import React from 'react'
import './pages_css/GetInvolved.css'
import { Link } from "react-router-dom"
import eventsData from '../mockData.json'

export default function GetInvolved() {
  function EventItem({ event }) {
  
    return (
      <div className="carousel-item">
        <img src={event.image} alt={event.title} />
        <h2>{event.title}</h2>
        <p>{event.date} {event.time}</p>
        <p>{event.location}</p>
      </div>
    );
  }
  
  function Carousel({ events }) {
    const [startIndex, setStartIndex] = React.useState(0);
    const displayedEvents = events.slice(startIndex, startIndex + 9);
  
    return (
      <div className="carousel-container">
        <button 
          onClick={() => setStartIndex(prevIndex => Math.max(prevIndex - 9, 0))}
          disabled={startIndex === 0}
        >
          Previous
        </button>
        
        <div className="carousel-grid">
          {displayedEvents.map(event => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
        
        <button 
          onClick={() => setStartIndex(prevIndex => Math.min(prevIndex + 9, events.length - 9))}
          disabled={startIndex + 9 >= events.length}
        >
          Next
        </button>
      </div>
    );
  }
  return (
      <div className="get-involved-container">
          <div className="banner"></div>
          
          <div className="content-section">
              <h1 className="floating-text">
                  We always have many events and 
                  oppurtunities available to those 
                  who wish to lend a hand in 
                  improving the environment, 
                  regardless of ability, socio-economic 
                  status or background.
              </h1>

              <div className="box">
              <Link className="box-item" to={"/donate"}> Donate </Link>
              <a className="box-item" href='#events'>Browse Events</a>
              <a className="box-item" href='#volunteer'>Volunteer</a>
              <Link className="box-item" to={"/learn-more"}> Learn More </Link>
              <Link className="box-item" to={"/contact"}> Contact Us </Link>
              </div>
          </div>
          <h1 className='browse' id='events'>Browse Our Upcoming Events</h1>
          <div className='margin'>‎</div>
          <Carousel events={eventsData} />
      </div>
  )
}