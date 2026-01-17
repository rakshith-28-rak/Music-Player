import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ searchQuery = "", setSearchQuery = () => {} }) => {

  const [IsOpen, setisOpen] = useState(false);


  return (
    <>
      <nav className="h-20 p-4 bg-cyan-600 text-black flex justify-between items-center">
        <i
          className="fa-solid fa-bars text-3xl cursor-pointer"
          onClick={() => {
            setisOpen(true);
          }}
        ></i>
        <div className="bg-white w-fit h-fit p-1 font-semibold font-sans">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="focus-visible:outline-none p-2 w-[50vw]"
            type="text"
          placeholder="Search songs, artists..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
          <button 
            onClick={() => setSearchQuery("")}
            className="text-gray-500 hover:text-black px-2"
          >
            ✕
          </button>
        )}
        </div>
        <div>
          <Link to={"/signup"}>
            <button className="bg-white p-2 rounded-xl font-bold hover:bg-cyan-900 hover:text-white mr-5">
              Log in
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-white p-2 rounded-xl font-bold hover:bg-cyan-900 hover:text-white">
              Sign up
            </button>
          </Link>
        </div>
      </nav>

      {IsOpen && (
        <>
          {/* Overlay with fade-in */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setisOpen(false)}
          ></div>
          {/* Side panel with slide-in animation */}
          <div className="fixed top-0 left-0 bg-white w-[25vw] h-[100vh] z-50 slide-in">
            <div className="p-10 flex flex-col gap-8">
              <Link to="/">
                <h3
                  className="text-3xl cursor-pointer hover:text-cyan-600 transition-colors duration-200"
                  onClick={() => setisOpen(false)}
                >
                  Home
                </h3>
              </Link>
              <Link to={"/allartist"}>
                <h3 className="text-3xl cursor-pointer hover:text-cyan-600 transition-colors duration-200">
                  All Artists
                </h3>
              </Link>
              <Link to={"/allsongs"}>
                <h3 className="text-3xl cursor-pointer hover:text-cyan-600 transition-colors duration-200">
                  All Songs
                </h3>
              </Link>
              <h3 className="text-3xl cursor-pointer hover:text-cyan-600 transition-colors duration-200">
                Profile
              </h3>
              <h3 className="text-3xl cursor-pointer hover:text-cyan-600 transition-colors duration-200">
                Settings
              </h3>
            </div>
          </div>
          {/* Add this style tag for the animation */}
          <style>
            {`
      @keyframes slideIn {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }
      .slide-in {
        animation: slideIn 0.3s forwards;
      }
    `}
          </style>
        </>
      )}
    </>
  );
};

export default Navbar;
