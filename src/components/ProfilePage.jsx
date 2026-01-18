import React from 'react'

const ProfilePage = () => {
  return (
    <>
    <div className='w-full h-[80vh] flex flex-col'>

        <h1 className='text-white text-3xl font-bold p-5 text-center '>Profile Page</h1>
        <div className='flex justify-around items-center'>
            <img className='w-96 rounded-full bg-white p-5 m-10' src="https://img.icons8.com/stickers/512/harry-potter-.png" alt="profile image" />

            <div className='text-center border-2 border-white h-80 p-10 rounded-xl'>
                <h2 className='text-white text-5xl font-bold p-10' >You-Know-Who</h2>
                <h5 className='text-white text-xl'>
                    Playlists - 5 | Followers - 1200 | Following - 300
                </h5>
                <br />
                <h5 className='text-white text-xl'>
                    Favorite Artists - Harry Styles, Taylor Swift, Ed Sheeran
                </h5>

            </div>
        </div>

    </div>
    </>
  )
}

export default ProfilePage