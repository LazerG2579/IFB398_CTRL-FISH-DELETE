import React from 'react'
import Volunteer from './pages_components/volunteer'
import Donate from './pages_components/donate'
import Footer from '../components/footer'
import GetInvolved from './pages_components/getInvolved'


export default function Events() {
  return (
    <div>
        <GetInvolved/>
        <Volunteer/>
        <Donate/>
        <Footer/>
    </div>
    
  )
}
