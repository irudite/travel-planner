import React, { useEffect } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { selectTravelCost, selectTravelSize } from '@/constants/options';


function CreateItenary() {
  const [destination, setDestination] = useState();
  const [tripData, setTripData] = useState([]);

  const handleInputChange = (name, value)=> {
    setTripData({
      ...tripData,
      [name]: value,
    })
  }

  useEffect(() => {
    console.log(tripData)
  }, [tripData])

  return (
    <>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
        <span>
          <h2 className="font-extrabold text-[40px]">Build your dream travel plan!</h2>
        </span>

        <div className='mt-20'>
          <div>
            <h2 className="text-xl font-medium"> Where would you like to go? </h2>
            <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                destination, onChange: (d) => {
                  setDestination(d);
                  handleInputChange('location', d);
                }
              }} />
          </div>
        </div>

        <div classname='mt-20'>
          <h2 className="text-xl my-3 font-medium"> How many days are going for? </h2>
          <Input placeholder={"e.g. 1 day, 2 days"} type="number" 
            onChange={(e)=> handleInputChange('noOfDays', e.target.value)}/>
        </div>

        <div>
          <h2 className ="text-xl my-3 font-medium"> What is your budget for your trip? </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
              {selectTravelCost.map((item, index)=> (
                <div key={index} className={`p-4 border rounded-lg hover:shadow-lg
                  ${tripData?.budget==item.title&&'shadow-lg border-black'}`}
                  onClick={()=>handleInputChange('budget', item.title)}>
                  <h2 className="text-3xl">{item.icon}</h2>
                  <h2 className="font-bold">{item.title}</h2>
                  <h2 className="text-sm">{item.desc}</h2>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className ="text-xl my-3 font-medium"> How many people will be attending? </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
              {selectTravelSize.map((item, index)=> (
                <div key={index} className={`p-4 border rounded-lg hover:shadow-lg
                  ${tripData?.size==item.people&&'shadow-lg border-black'}`}
                  onClick={()=>handleInputChange('size', item.people)}>
                  <h2 className="text-3xl">{item.icon}</h2>
                  <h2 className="font-bold">{item.title} | ({item.people})</h2>
                  <h2 className="text-sm">{item.desc}</h2>
                </div>
              ))} 
          </div>
        </div>
        
        <div className="flex justify-end mt-5">
          <Button> Generate Trip </Button>
        </div>

        <div className="flex ">
          <Link to={'/'}>
            <Button> Go Back </Button>
          </Link>
        </div>

      </div>
    </>
  )
}

export default CreateItenary    