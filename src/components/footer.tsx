import React from "react";

const Footer = () => {
  return (
    <div className="bg-custombg h-auto w-full flex justify-around px-20 py-20">
      <div>
        <div className="font-bold">About</div>
        <p className="text-custompur text-sm w-72 mt-7">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.{" "}
        </p>
      </div>
      <div className="text-custompur text-sm">
        <div className="font-bold text-black text-base mb-7">Quick Links</div>
        Symptoms
        <br /> Prevention
        <br /> FAQs
        <br /> About
        <br /> Coronavirus
        <br /> Contact Us
      </div>
      <div className="text-custompur text-sm">
        <div className="font-bold text-black text-base mb-7"> Helpful Links</div>
        Healthcare Professional
        <br />
        LGU Facilities
        <br />
        Protect Your Family
        <br />
        World Health
        <br />
      </div>
      <div className="text-custompur text-sm">
        <div className="font-bold text-black text-base mb-7">Resources</div>
        WHO Website <br />
        CDC Website
        <br />
        Gov Website
        <br />
        DOH Website
      </div>
    </div>
  );
};

export default Footer;
