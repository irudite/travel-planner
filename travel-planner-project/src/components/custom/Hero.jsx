import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col items-center text-center px-8 py-15">
      <h1 className="font-extrabold text-[55px] leading-tight text-gray-900 mt-3">
        <span className="text-[#f2b786]">Your Ultimate Travel Planning Companion</span>
      </h1>
      <p className="text-[20px] mt-4 text-gray-700 max-w-2xl">
        Plan every detail of your journey with ease. Create personalized itineraries, 
        discover user-recommended travel guides, and organize all your bookings seamlessly — all in one app.
      </p>

      <Link to={'/create-itenary'}>
        <Button>Plan Your Trip Now</Button>
      </Link>
      
    </div>
  );
}


export default Hero