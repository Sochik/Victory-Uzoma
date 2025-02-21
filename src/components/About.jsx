import React, { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import Resume from "./Resume.jsx";
import { vicCV } from "../assets/images";
import { personinfo } from "../assets/personalInfo.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="About"
      className="container h-full relative w-full flex py-10 flex-col bg-gradient-to-tl from-white to-purple-300"
      data-aos="fade-up"
    >
      <div className="flex gap-3 my-auto">
        <div className="flex mx-auto ps-24 flex-1" data-aos="fade-right">
          <img className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col px-5 mx-auto flex-1" data-aos="fade-left">
          <div className="flex flex-col text-center mx-auto" data-aos="zoom-in">
            <p className="text-primary text-base ">Who am I?</p>
            <h5 className="text-secondary font-bold text-4xl">About me</h5>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-xl py-7" data-aos="fade-up">
              A professional Accountant and a well-trained Tax and Financial
              auditor with multiple areas of experience.
            </p>
            <div className="flex gap-5" data-aos="fade-up">
              <div className="flex gap-5">
                <div className="flex flex-col gap-5">
                  <h5 className="font-bold text-xl">Name:</h5>
                  <h5 className="font-bold text-xl">Date of Birth:</h5>
                  <h5 className="font-bold text-xl">Address:</h5>
                  <h5 className="font-bold text-xl">Zip Code:</h5>
                  <h5 className="font-bold text-xl">Email:</h5>
                  <h5 className="font-bold text-xl">Phone Number:</h5>
                </div>
                <div>
                  {personinfo.map((details, index) => (
                    <div key={index} className="flex flex-col gap-6">
                      <span className="font-light">{details.name}</span>
                      <span className="font-light">{details.doB}</span>
                      <span className="font-light">{details.address}</span>
                      <span className="font-light">{details.zip_Code}</span>
                      <span className="font-light">{details.email}</span>
                      <span className="font-light">{details.phone_Number}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={vicCV}
              download="Uzoma_Victory_CV.docx"
              className="rounded-full bg-highlight p-3 border-2 w-fit border-highlight text-dark font-semibold px-4 py-3 flex items-center justify-start gap-2 hover:shadow-lg hover:bg-dark hover:text-light hover:border-highlight"
              data-aos="flip-up"
            >
              Download CV <FaArrowDown />
            </a>
          </div>
        </div>
      </div>
      <Resume />
    </section>
  );
}
