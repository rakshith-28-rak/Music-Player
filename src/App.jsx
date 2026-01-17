import React from 'react'
import TopArtists from './components/TopArtists'
import Player from './components/Player'
import { Route, Routes } from 'react-router-dom'
import Demo from './components/Demo'
import AboutArtist from './components/AboutArtist'
import AllArtists from './components/AllArtists'
import AllSongs from './components/AllSongs'
import Signup from './components/Signup'

const App = () => {
  return (
    < >
    {/* <AboutArtist /> */}
    {/* <Demo /> */}
    <Routes>
        <Route path="/" element={<TopArtists />} />
        <Route path="/player" element={<Player />} />
        <Route path="/allartist" element={<AllArtists />} />
        <Route path="/allsongs" element={<AllSongs />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>   
      {/* <AllArtists /> */}
      {/* <AllSongs /> */}
    {/* <Signup /> */}
    </>

  )
}

export default App
