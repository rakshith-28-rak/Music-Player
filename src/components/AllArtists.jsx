import React from "react";
import { artistsData } from "../data/topArtist";
import ArtistCard from "./ArtistCard";

const AllArtists = ({ searchQuery = "" }) => {
  const filteredArtists = artistsData.filter((artist) =>
    artist.artist_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>

      <div className="min-w-full min-h-[75vh] mt-[8vh] flex flex-col justify-center items-center">
        <div className="min-w-[90vw] min-h-[37vh] ">
          
          <h1 className="p-1 text-3xl text-white font-poppins w-fit mb-4">
            All Artists 
          </h1>
          <div className="w-full h-fit grid grid-cols-5 ml-10  gap-2   items-top ">
            {!searchQuery &&
              artistsData.map((artist) => (
                <ArtistCard
                  key={artist.id}
                  name={artist.artist_name}
                  image={artist.image_url}
                />
              ))}

            {searchQuery &&
              filteredArtists.length > 0 &&
              filteredArtists.map((artist) => (
                <ArtistCard
                  key={artist.id}
                  name={artist.artist_name}
                  image={artist.image_url}
                />
              ))}

            {searchQuery && filteredArtists.length === 0 && (
              <div className="col-span-5 text-white text-center py-10">
                No artists found
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllArtists;
