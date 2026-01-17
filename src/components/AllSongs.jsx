import React from "react";
import { allSongs } from "../data/topArtist";
import SongCard from "./SongCard";
import { useNavigate } from "react-router-dom";

const AllSongs = ({ searchQuery = "" }) => {
  const navigate = useNavigate();
  const handleSongClick = (song) => {
    const filteredSongs = allSongs.filter(
      (song) =>
        song.track_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );

    navigate("/player", {
      state: {
        song: {
          trackName: song.track_name,
          artistName: song.artist,
          image: song.image_url, // Just send ONE image called 'image'
          duration: song.duration,
        },
      },
    });
  };
  return (
    <>
      {" "}
      <div className="min-w-[90vw] min-h-[37vh] m-20">
        <h1 className="p-1 text-3xl text-white font-poppins w-fit mb-4">
          All Songs
        </h1>
        <div className="w-full h-fit grid grid-cols-5 gap-2 justify-center text-center">
          {!searchQuery &&
            allSongs.map((song) => (
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

          {searchQuery &&
            filteredSongs.length > 0 &&
            filteredSongs.map((song) => (
              <div
                key={song.id}
                onClick={() => handleSongClick(song)}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <SongCard
                  title={song.track_name}
                  artist={song.artist}
                  cover={song.image_url}
                  duration={song.duration}
                />
              </div>
            ))}

          {searchQuery && filteredSongs.length === 0 && (
            <div className="col-span-5 text-white text-center py-10">
              No songs found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllSongs;
