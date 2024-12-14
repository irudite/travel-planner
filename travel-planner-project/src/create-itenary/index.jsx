import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function CreateItenary() {
  const [destination, setDestination] = useState();
  return (
    <>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
        <span>
          <h2 className="font-extrabold text-[40px]">Build your dream travel plan!</h2>
        </span>

        <div className='mt-20'>
          <div>
            <h2 className="text-[20px]"> Where would you like to go? </h2>
            <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                destination, onChange: (d) => {
                  setDestination(d)
                }
              }} />
          </div>
        </div>

        <div classname='mt-20'>
          <h2 className="text-xl"> How many days are going for? </h2>
          <Input placeholder={"e.g. 1 day, 2 days"} type="number" />
        </div>
        <Link to={'/'}>
          <Button> Go Back </Button>
        </Link>

      </div>
    </>
  )
}

export default CreateItenary    