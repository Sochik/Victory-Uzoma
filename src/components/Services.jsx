import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../assets/personalInfo";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="Services"
      className="container w-full py-10 bg-purple-300"
      data-aos="fade-up"
    >
      <div className="text-center" data-aos="fade-up">
        <p className="text-primary text-base">What can I do?</p>
        <h5 className="text-secondary font-bold text-4xl">My Services</h5>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
          {services.map((details, index) => (
            <div
              key={details.id}
              className="bg-gradient-to-tl from-white to-highlight hover:from-highlight hover:to-white cursor-pointer px-5 py-9 flex flex-col items-center gap-6 rounded-lg shadow-lg transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 200} // Staggered animation
            >
              <div className="h-14 w-14 flex items-center justify-center rounded-full">
                {details.icon}
              </div>
              <h4 className="text-dark border-b-2 py-2 text-center font-semibold text-lg md:text-xl">
                {details.service}
              </h4>
              <p className="text-dark text-center text-sm md:text-lg">
                {details.dscp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
