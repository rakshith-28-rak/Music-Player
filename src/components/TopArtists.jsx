import React from "react";
import ArtistCard from "./ArtistCard";
import SongCard from "./SongCard";
import {
  topartists,
  songsData,
  artistsData,
  allSongs,
} from "../data/topArtist";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const TopArtists = ({ searchQuery = "" }) => {
  const navigate = useNavigate();

  // SIMPLE FILTERING - 2 lines!
  const filteredSongs = allSongs.filter(
    (song) =>
      song.track_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArtists = artistsData.filter((artist) =>
    artist.artist_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSongClick = (song) => {
    console.log("Clicked song:", song.title);

    navigate("/player", {
      state: {
        song: {
          trackName: song.title || song.track_name,
          artistName: song.artist ,
          image: song.image || song.image_url,
          duration: song.duration,
        },
      },
    });
  };

  return (
    <div className="min-w-full min-h-[75vh] mt-[8vh] flex flex-col justify-center items-center">
      {/* Show search results count */}
      {searchQuery && (
        <div className="text-white text-xl mb-6">
          Found {filteredSongs.length} songs and {filteredArtists.length}{" "}
          artists for "<span className="font-bold">{searchQuery}</span>"
        </div>
      )}

      {/* Artists Section */}
      <div className="min-w-[90vw] min-h-[37vh]">
        <h1 className="p-1 text-3xl text-white font-poppins w-fit">
          {searchQuery ? "Artists" : "Top Artists"}
        </h1>
        <div className="w-full h-fit mt-3 grid grid-cols-5 p-5 justify-center">
          {!searchQuery &&
            topartists.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                image={artist.image}
              />
            ))}

          {/* AFTER SEARCHING → show searched artists */}
          {searchQuery &&
            filteredArtists.length > 0 &&
            filteredArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.artist_name}
                image={artist.image_url}
              />
            ))}

          {/* AFTER SEARCHING but NO RESULTS */}
          {searchQuery && filteredArtists.length === 0 && (
            <div className="col-span-5 text-white text-center py-10">
              No artists found
            </div>
          )}
        </div>
      </div>

      {/* Songs Section */}
      <div className="min-w-[90vw] min-h-[37vh] mt-8">
        <h1 className="p-1 text-3xl text-white font-poppins w-fit">
          {searchQuery ? "Songs" : "Top Songs"}
        </h1>
        <div className="w-full h-fit mt-3 grid grid-cols-5 p-5 justify-center">

  {/* BEFORE SEARCHING → show default songs */}
  {!searchQuery &&
    songsData.map((song) => (
      <div
        key={song.id}
        onClick={() => handleSongClick(song)}
        className="cursor-pointer hover:scale-105 transition-transform"
      >
        <SongCard
          title={song.title}
          artist={song.artist}
          cover={song.image}
          duration={song.duration}
        />
      </div>
    ))
  }

  {/* AFTER SEARCHING → show searched songs */}
  {searchQuery && filteredSongs.length > 0 &&
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
    ))
  }

  {/* AFTER SEARCHING but NO RESULTS */}
  {searchQuery && filteredSongs.length === 0 && (
    <div className="col-span-5 text-white text-center py-10">
      No songs found
    </div>
  )}

</div>

      </div>
    </div>
  );
};

export default TopArtists;
