import React from 'react'
import { useLocation } from 'react-router-dom';

const MusicControls = () => {
  const location = useLocation();
  const clickedSong = location.state?.song;
  return (
    <>
    <div className='w-full h-[9vh] flex items-center fixed bottom-1 bg-gray-900'>
        <div className=' h-[9vh] w-[20vw] flex justify-evenly items-center '>
            <div className='flex align-middle items-center gap-5'>
            <i className="fa-solid fa-backward-step text-2xl text-white hover:bg-gray-700 transition-colors duration-300 rounded-full cursor-pointer "></i>
            <i className="fa-solid fa-play text-4xl text-white hover:bg-gray-700 transition-colors duration-300 rounded-full cursor-pointer"></i>
            <i className="fa-solid fa-forward-step text-2xl text-white hover:bg-gray-700 transition-colors duration-300 rounded-full cursor-pointer"></i>
            </div>
            <h3 className='text-white text-sm'>{clickedSong.duration}</h3>
        </div>
        <div className='  h-9vh w-[60vw]  text-center flex justify-center gap-20'>
            <div>

            <h2 className='text-white text-xl'>                {clickedSong?.trackName}
</h2>
            <h5 className='text-white text-sm'>{clickedSong?.artistName} </h5>
            </div>
            <div className='flex items-center gap-5'>
            <i class="fa-solid fa-thumbs-up text-white text-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
            <i class="fa-solid fa-thumbs-down text-white text-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
            <i class="fa-solid fa-ellipsis-vertical text-white text-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
            </div>
        </div>
        <div className=' h-9vh w-[20vw] flex justify-center gap-10 p-1'>
        <i class="fa-solid fa-volume-high text-white text-3xl hover:bg-gray-700 transition-colors duration-300 rounded-full cursor-pointer"></i>
        <i class="fa-solid fa-repeat  text-white text-3xl hover:rotate-12 transition-transform duration-500 cursor-pointer"></i>
        <i class="fa-solid fa-shuffle  text-white text-3xl hover:rotate-12 transition-transform duration-500 cursor-pointer"></i>
        </div>

    </div>
    </>
  )
}

export default MusicControls