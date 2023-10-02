import React from 'react'
import { useEffect } from 'react';
export default function Donate() {
  useEffect(() => {
    // Check if there is a hash in the URL
    if (window.location.hash) {
      // Find the element with the id equal to the hash (without the # symbol)
      const id = window.location.hash.slice(1);
      const element = document.getElementById(id);

      // If the element is found, scroll to it
      if (element) element.scrollIntoView();
    }
  }, []);
  return (
    <div className='donate'style={{ backgroundColor: '#0f5257' }}>Donate</div>
  )
}
