import React from 'react'
import Navbar from './Navbar'
import { artistsData } from '../data/topArtist'
import ArtistCard from './ArtistCard'

const AllArtists = () => {
  return (
<>
<Navbar />

        <div className="min-w-full min-h-[75vh] mt-[8vh] flex flex-col justify-center items-center">
          
          {/* Artists Section - Hardcoded */}
          <div className="min-w-[90vw] min-h-[37vh] ">
            <h1 className="p-1 text-3xl text-white font-poppins w-fit mb-4">
              All Artists
            </h1>
            <div className="w-full h-fit grid grid-cols-5 ml-10  gap-2   items-top ">
              {artistsData.map((artist) => (
                <ArtistCard 
                  key={artist.id}
                  name={artist.artist_name}
                  image={artist.image_url}
                />
              ))}
            </div>
          </div>
          </div>
          
</>  )
}

export default AllArtists