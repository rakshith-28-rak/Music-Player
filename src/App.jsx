import React, { useState } from 'react'
import TopArtists from './components/TopArtists'
import Player from './components/Player'
import { Route, Routes } from 'react-router-dom'
import Demo from './components/Demo'
import AboutArtist from './components/AboutArtist'
import AllArtists from './components/AllArtists'
import AllSongs from './components/AllSongs'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import ProfilePage from './components/ProfilePage'

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    < >
    {/* <AboutArtist /> */}
    {/* <Demo /> */}
    <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <Routes>
        <Route path="/" element={<TopArtists searchQuery={searchQuery}/>} />
        <Route path="/player" element={<Player />} />
        <Route path="/allartist" element={<AllArtists searchQuery={searchQuery} />} />
        <Route path="/allsongs" element={<AllSongs searchQuery={searchQuery} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>   
     
      {/* <AllArtists /> */}
      {/* <AllSongs /> */}
    {/* <Signup /> */}
    </>

  )
}

export default App
