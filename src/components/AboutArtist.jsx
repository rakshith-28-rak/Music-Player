import React from 'react'
import Navbar from './Navbar'

const AboutArtist = () => {
  return (
<>
<Navbar />

<div className='bg-blue-950 w-full h-full mt-10 flex justify-center items-center flex-col'>
    <div>
        <h2 className='text-white p-5 font-poppins text-3xl text-center'>Artist Name</h2>
        <img className='w-80  rounded-lg items-center' src="https://f4.bcbits.com/img/a0923440747_16.jpg" alt="image" />
    </div>
    <div className='w-full bg-black h-[80vh] p-10 m-10'>
        <div>
            <h2 className='text-white text-2xl'>Song 1</h2>
        </div>
        <div>
            <h2 className='text-white text-2xl'>Song 1</h2>
        </div>
        <div>
            <h2 className='text-white text-2xl'>Song 1</h2>
        </div>

    </div>

</div>
</>
    )
}

export default AboutArtist