import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import SongCard from "./SongCard";
import { artistsData, songsData } from "../data/topArtist";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const Demo = () => {
    const navigate = useNavigate();
  
    const handleSongClick = (song) => {
      console.log("Clicked song:", song.title);
      
      navigate('/player', { 
        state: { 
          song: {
            // Map to expected format for Player page
            trackName: song.title,
            artistName: song.artist,
            artworkUrl600: song.cover,
            artworkUrl100: song.cover,
            trackTimeMillis: song.duration * 1000,
            // Keep original data too
            ...song
          }
        } 
      });
    };
  
    return (
      <>
        <Navbar />
        <div className="min-w-full min-h-[75vh] mt-[8vh] flex flex-col justify-center items-center">
          
          {/* Artists Section - Hardcoded */}
          <div className="min-w-[90vw] min-h-[37vh] ">
            <h1 className="p-1 text-3xl text-white font-poppins w-fit mb-4">
              Top Artists
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
  
          {/* Songs Section - Hardcoded */}
          <div className="min-w-[90vw] min-h-[37vh] mt-10">
            <h1 className="p-1 text-3xl text-white font-poppins w-fit mb-4">
              Top Songs
            </h1>
            <div className="w-full h-fit grid grid-cols-5 gap-8 justify-center">
              {songsData.map((song) => (
                <div 
                  key={song.id}
                  onClick={() => handleSongClick(song)}
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <SongCard
                    title={song.title}
                    artist={song.artist}
                    cover={song.cover}
                    duration={song.duration}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Demo;