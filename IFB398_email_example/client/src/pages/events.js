import React from 'react'
import Volunteer from './volunteer'
import Donate from './donate'
import Footer from '../components/footer'
import GetInvolved from './getInvolved'


export default function Events() {
  return (
    <div>
        <GetInvolved/>
        <div id='volunteer'> <Volunteer/> </div>
        <div id="donate"> <Donate/> </div>
        <Footer/>
    </div>
    
  )
}
