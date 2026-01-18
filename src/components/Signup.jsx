import React from "react";
import Navbar from "./Navbar";

const Signup = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className=" w-[30vw] h-[85vh] bg-cyan-600 ">
          <div className="flex flex-col items-center">
            <div className="w-96 h-14 bg-white p-5 mt-5 flex  justify-center items-center gap-2 border-2 border-black rounded-full hover:bg-gray-900 hover:text-white">
                <i className="text-cyan-600 fa-brands fa-google"></i>
                <h3>Google</h3>
            </div>
            <div className="w-96 h-14 bg-white p-5 mt-5 flex  justify-center items-center gap-2 border-2 border-black rounded-full hover:bg-gray-900 hover:text-white">
            <i className="text-cyan-600 fa-brands fa-facebook-f"></i>
            <h3>Facebook</h3>
            </div>
            <div className="w-96 h-14 bg-white p-5 mt-5 flex  justify-center items-center gap-2 border-2 border-black rounded-full hover:bg-gray-900 hover:text-white">
            <i className="text-cyan-600 fa-solid fa-phone"></i>
            <h3>Phone Number</h3>

            </div>
            <div className="border-t border-black m-5 border-2 w-96"></div>
          </div>

          <div className="text-left m-5">
            <h4 className="font-poppins text-xl mb-1">Email</h4>
            <input
              className="w-80 h-10 focus:outline-none   bg-transparent border-b-2 border-black font-mono mb-5"
              type="email"
            />
            <h4 className="font-poppins text-xl mb-1">Password</h4>
            <input
              className="w-80 h-10 focus:outline-none bg-transparent border-b-2 border-black font-mono"
              type="text"
            />
          </div>
          <div className="w-full flex justify-center">

          <button className="bg-white w-96 h-16 hover:bg-gray-900 hover:text-white">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
