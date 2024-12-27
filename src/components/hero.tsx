import React from "react";

const Hero = () => {
  return (
    <div className="rounded-tl-md rounded-tr-lg rounded-bl-lg rounded-br-300 bg-custombg h-auto w-full">
      <nav className="mx-32 flex justify-between pt-5">
        <div className="font-bold text-xl ">Covid.</div>
        <ul className="flex ">
          <li className="mr-10 text-gray-600">Home</li>
          <li className="mr-10 text-gray-600">Reports</li>
          <li className="mr-10 text-gray-600">Center</li>
          <li className="mr-10 text-gray-600">About</li>
          <li className="mr-10 text-gray-600">Symptoms</li>
          <li className="mr-10 text-gray-600">Contact</li>
        </ul>
      </nav>
      <div className="flex justify-between ">
        <div className="mx-32 my-20">
          <div className="text-custompur ">COVID-19 AWARENESS</div>
          <h1 className="text-custompur text-4xl mt-1 font-bold">Stay Safe. Stay Home.</h1>
          <p className="text-custompur mt-7">Amet minim mollit non deserunt ullamco est sit do amet sint officia. 
          Velit officia consequat duis enim velit mollit. </p>
          <button className="rounded-full text-white mt-16 bg-custompur py-2 px-5">How To Prevent</button>
        </div>
        <img src="/image/hero-image.png" alt="" className="rounded-tl-md rounded-tr-lg rounded-bl-lg rounded-br-300 mt-28 mr-20"/>
      </div>
    </div>
  );
};

export default Hero;
