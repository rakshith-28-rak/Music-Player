import React from "react";
import ArtistCard from "./ArtistCard";
import SongCard from "./SongCard";
import { topartists, songsData } from "../data/topArtist";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const TopArtists = () => {
  const navigate = useNavigate();

  const handleSongClick = (song) => {
    console.log("Clicked song:", song.title);
    
    navigate('/player', { 
      state: {
        song: {
          trackName: song.title,
          artistName: song.artist,
          image: song.image,  
          duration: song.duration ,
        }
      } 
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-w-full min-h-[75vh] mt-[8vh] flex flex-col justify-center items-center">
        <div className="min-w-[90vw] min-h-[37vh]">
          <h1 className="p-1 text-3xl text-white font-poppins w-fit">
            Top Artists
          </h1>
          <div className="w-full h-fit mt-3 grid grid-cols-5 p-5 justify-center">
            {topartists.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                image={artist.image}
              />
            ))}
          </div>
        </div>
        <div className="min-w-[90vw] min-h-[37vh]">
          <h1 className="p-1 text-3xl text-white font-poppins w-fit">
            Top Songs
          </h1>
          <div className="w-full h-fit mt-3 grid grid-cols-5 p-5 justify-center">
            {songsData.map((song) => (
              <div 
                key={song.id}
                onClick={() => handleSongClick(song)}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <SongCard
                  key={song.id}
                  title={song.title}
                  artist={song.artist}
                  cover={song.image}  // Fixed: was song.image
                  duration={song.duration}  // Fixed: was song.trackTimeMillis
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopArtists;