import React from "react";
import Navbar from "./Navbar";
import PlaylistSong from "./PlaylistSong";
import MusicControls from "./MusicControls";
import { useLocation } from "react-router-dom";
import { allSongs } from "../data/topArtist";

const Player = () => {
  const location = useLocation();
  const clickedSong = location.state?.song;

  console.log("Received song:", clickedSong);
  return (
    <>
      <div className="w-full h-[87.6vh]  ">
        <div className="w-full  p-10 flex justify-around ">
          <div>
            <img
              className="w-[25vw]"
              src={clickedSong?.image}
              alt={clickedSong?.trackName}
            />
            <div className="mt-4">
              <h2 className="text-white text-2xl font-bold">
                {clickedSong?.trackName}
              </h2>
              <p className="text-gray-300 text-xl">
                {clickedSong?.artistName}</p>
              {clickedSong?.duration && (
                <p className="text-gray-400">
                  {clickedSong.duration}
                </p>
              )}
            </div>
          </div>
          <div className="w-[40vw] h-[65vh] overflow-y-auto flex border-2 border-white rounded-xl flex-col items-center p-5">
            <h1 className="text-white font-poppins text-4xl mb-5">
              Your Playlist
            </h1>
            
            {/* Map through ALL songs from your dataset */}
            {allSongs.map((song) => (
              <div 
                key={song.id} 
                className="w-full border-t border-white/30 first:border-t-0"
              >
                <PlaylistSong 
                  song={song} // Pass each song to PlaylistSong
                  isCurrent={song.id === clickedSong?.id} // Highlight if current
                />
              </div>
            ))}
          </div>
        </div>
        <MusicControls />
      </div>
    </>
  );
};

export default Player;
