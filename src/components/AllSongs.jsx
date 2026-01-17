import React from 'react'
import Navbar from './Navbar'
import { allSongs } from '../data/topArtist'
import SongCard from './SongCard'
import { useNavigate } from 'react-router-dom'

const AllSongs = () => {
  const navigate = useNavigate();
  const handleSongClick = (song) => {
    console.log("Clicked song:", song.title);
    
    navigate('/player', { 
      state: {
        song: {
          trackName: song.track_name,
          artistName: song.artist,
          image: song.image_url,  // Just send ONE image called 'image'
          duration: song.duration ,
        }
      } 
    });
  };
  return (
    <>
    <Navbar />
    <div className="min-w-[90vw] min-h-[37vh] m-20">
            <h1 className="p-1 text-3xl text-white font-poppins w-fit mb-4">
              All Songs
            </h1>
            <div className="w-full h-fit grid grid-cols-5 gap-2 justify-center text-center">
              {allSongs.map((song) => (
                  <div 
                  key={song.id}
                  onClick={() => handleSongClick(song)}
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                  <SongCard
                    title={song.track_name}
                    artist={song.artist}
                    cover={song.image_url}
                    duration={song.duration}
                    />
                </div>
                
              ))}
            </div>
          </div>
              </>
  )
}

export default AllSongs