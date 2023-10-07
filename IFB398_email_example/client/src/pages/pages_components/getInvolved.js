import React from 'react'
import '../pages_css/GetInvolved.css'
import { Link } from "react-router-dom"
import eventsData from '../../mockData.json'

export default function GetInvolved() {
  
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  


  function handleShowDetails(event) {
    setSelectedEvent(event);
  }


  function PageNumbers({ totalPages, currentPage, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div className="page-numbers">
        {pages.map(page => (
          <button 
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    );
  }


  function EventItem({ event, onShowDetails }) {
    return (
      <div className="carousel-item" onClick={() => onShowDetails(event)}>
        <img src={event.image} alt={event.title} />
        <h2>
          <a 
            href={event.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="title-link"
          >
            {event.title}
          </a>
        </h2>
        <p>{event.date} {event.time}</p>
        <p>{event.location}</p>
      </div>
    );
}


  
  function Carousel({ events, onShowDetails}) {
    const itemsPerPage = 9;
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedEvents = events.slice(startIndex, startIndex + itemsPerPage);
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  
    return (
      <div className="carousel-container">
         <div className="carousel-grid">
           {displayedEvents.map(event => (
             <EventItem key={event.id} event={event} onShowDetails={onShowDetails} />
           ))}
         </div>

         <PageNumbers 
           totalPages={totalPages} 
           currentPage={currentPage} 
           onPageChange={handlePageChange} 
         />
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
                <a className="box-item" href="#donate"> Donate </a>
                <a className="box-item" href='#events'>Browse Events</a>
                <a className="box-item" href='#volunteer'>Volunteer</a>
                <Link className="box-item" to={"/learn-more"}> Learn More </Link>
                <Link className="box-item" to={"/contact"}> Contact Us </Link>
              </div>
         
          </div>
            <h1 className='browse' id='events'>Browse Our Upcoming Events</h1>
            <div className='margin'>‎</div>
            <Carousel events={eventsData} onShowDetails={handleShowDetails}  />
            <div className='margin2'>‎</div>
      </div>
  )
}