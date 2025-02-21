import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { heroimg, vicCV } from "../assets/images";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      id="Home"
      className="container h-full w-full flex flex-col-reverse md:flex-row gap-6 px-4 md:px-10 lg:px-24 py-10"
      data-aos="fade-up"
    >
      {/* Left Content Section */}
      <div className="flex flex-col flex-1 gap-6 my-auto" data-aos="fade-right">
        <p className="font-light text-lg md:text-xl text-center md:text-start text-white font-bubblegum">
          Hey there, I am
        </p>
        <h3 className="text-4xl md:text-5xl lg:text-7xl text-center md:text-start font-bold text-light">
          Uzoma, Victory Chimechefulam<span className="text-base"> ACA</span>
        </h3>
        <p className="font-light text-sm md:text-md lg:text-lg text-center md:text-start text-white font-bubblegum">
          For me, accounting is not just my profession; it's my talent and my
          passion.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="rounded-full bg-highlight p-3 border-2 border-highlight text-dark font-semibold hover:shadow-lg hover:bg-dark hover:text-light hover:border-highlight">
            Book Appointment
          </button>
          <a
            href={vicCV}
            download="Uzoma_Victory_CV.docx"
            className="rounded-full border-highlight border-2 text-light font-semibold px-4 py-3 flex items-center justify-center gap-2 hover:shadow-lg hover:bg-highlight hover:text-dark"
          >
            Download CV <FaArrowDown />
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 mx-auto" data-aos="zoom-in" data-aos-delay="300">
        <img
          src={heroimg}
          alt="Hero"
          className="object-cover w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
        />
      </div>
    </div>
  );
}
