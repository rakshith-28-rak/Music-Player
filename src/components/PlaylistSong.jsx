import React from 'react'

const PlaylistSong = ({ song, isCurrent }) => {
  return (
    <div className={`w-full h-16 p-5 flex items-center justify-between 
      ${isCurrent ? 'bg-gray-800' : 'hover:bg-gray-800/50'} 
      cursor-pointer transition-colors`}
    >
      <div className="flex items-center">
        <img 
          className='w-10 h-10 rounded' 
          src={song.image_url || "https://via.placeholder.com/40"} 
          alt={song.title} 
        />
        <div className='ml-5'>
          <h2 className={`font-poppins text-lg ${isCurrent ? 'text-green-400' : 'text-white'}`}>
            {song.track_name || song.title}
          </h2>
          <h3 className='font-poppins text-sm text-gray-300'>
            {song.artist}
          </h3>
        </div>
      </div>
      <h5 className='text-white'>
        {song.duration}
      </h5>
    </div>
  )
}

export default PlaylistSong