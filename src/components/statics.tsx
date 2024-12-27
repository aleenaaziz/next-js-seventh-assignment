import React from "react";

const Statics = () => {
  return (
    <div className=" mt-16">
      <h1 className="text-custompur text-2xl font-bold text-center">
        Coronavirus Statistics
      </h1>
      <p className="text-custompur mt-4 text-center">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.{" "}
      </p>
      <div className="flex justify-around mx-20 my-20">
        <div className="h-auto w-auto ">
          <img src="/image/bug_report.png" alt=""className="m-auto" />
          <h1 className="text-2xl font-black m-auto text-center">95,856,25</h1>
          <p className="text-gray-700 font-light text-sm mt-4 text-center">ACTIVE CASE</p>
        </div>
        <div className="h-auto w-auto ">
          <img src="/image/bug_report.png" alt=""className="m-auto" />
          <h1 className="text-2xl font-black m-auto text-center">5,856,25</h1>
          <p className="text-gray-700 font-light text-sm mt-4 text-center">DEATH CASE</p>
        </div>
        <div className=" h-auto w-auto ">
          <img src="/image/bug_report.png" alt=""className="m-auto" />
          <h1 className="text-2xl font-black m-auto text-center">595,856,25</h1>
          <p className="text-gray-700 font-light text-sm mt-4 text-center">RECOVERED CASE</p>
        </div>
      </div>
    </div>
  );
};

export default Statics;
