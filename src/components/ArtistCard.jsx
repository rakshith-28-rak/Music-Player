import React from 'react'
import { Link } from 'react-router-dom'

const ArtistCard = ({name , image}) => {
  return (
    <>
  
    <div className="w-fit h-fit mb-10 relative text-center flex flex-col items-center hover:scale-110 transition-transform duration-300 
    hover:cursor-[url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2248%22%20height=%2248%22%3E%3Cdefs%3E%3Cfilter%20id=%22glow%22%20x=%22-20%25%22%20y=%22-20%25%22%20width=%22140%22%20height=%22140%22%3E%3CfeGaussianBlur%20stdDeviation=%221.5%22%20result=%22blur%22%20/%3E%3CfeComposite%20in=%22SourceGraphic%22%20in2=%22blur%22%20operator=%22over%22%20/%3E%3C/filter%3E%3C/defs%3E%3Ctext%20y=%2238%22%20x=%225%22%20font-size=%2238%22%20fill=%22cyan%22%20filter=%22url(%23glow)%22%20stroke=%22white%22%20stroke-width=%220.3%22%3E%E2%99%AB%3C/text%3E%3C/svg%3E'),_pointer]
    ">
        <img
          className="w-32 h-32 border-white border-2 rounded-full"
          src={image}
          alt=""
          />
          
        <h3 className="text-white mt-1 font-montserrat text-2xl w-32">{name}</h3>
      
      </div>
    </>
  )
}

export default ArtistCard