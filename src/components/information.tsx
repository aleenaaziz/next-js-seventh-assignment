import React from "react";

const Information = () => {
  return (
    <div>
      <div className="flex mx-32 my-20">
        <img src="/image/women.png" alt="" />
        <div className="h-auto w-auto ml-20">
          <h1 className="text-custompur text-2xl font-bold ">
            What Is Coronavirus?
          </h1>
          <p className="text-custompur mt-7">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation{" "}
          </p>
          <div className="flex mt-10">
            <img src="/image/check_circle.png" alt="" className="w-15 h-5" />
            <p className="text-custompur ">Amet minim mollit non deserunt </p>
          </div>
          <div className="flex mt-5">
            <img src="/image/check_circle.png" alt="" className="w-15 h-5" />
            <p className="text-custompur ">Deserunt ullamco est sit </p>
          </div>
          <div className="flex mt-5">
            <img src="/image/check_circle.png" alt="" className="w-15 h-5" />
            <p className="text-custompur ">
              Velit officia consequat duis enim{" "}
            </p>
          </div>
          <button className="rounded-full text-white mt-8 bg-custompur py-2 px-10">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex mx-32 my-20">
        
        <div className="h-auto w-auto mr-28">
          <h1 className="text-custompur text-2xl font-bold ">
          Why is it Dangerous?
          </h1>
          <p className="text-custompur mt-7">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation{" "}
          </p>
          <div className="flex mt-10">
            <img src="/image/check_circle.png" alt="" className="w-15 h-5" />
            <p className="text-custompur ">Amet minim mollit non deserunt </p>
          </div>
          <div className="flex mt-5">
            <img src="/image/check_circle.png" alt="" className="w-15 h-5" />
            <p className="text-custompur ">Deserunt ullamco est sit </p>
          </div>
          <div className="flex mt-5">
            <img src="/image/check_circle.png" alt="" className="w-15 h-5" />
            <p className="text-custompur ">
              Velit officia consequat duis enim{" "}
            </p>
          </div>
          <button className="rounded-full text-white mt-8 bg-custompur py-2 px-10">
            Learn More
          </button>
        </div>
        <img src="/image/man.png" alt="" />
      </div>
    </div>
  );
};

export default Information;
