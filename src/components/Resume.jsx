import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";
import { education, experience, skills } from "../assets/personalInfo";

export default function Resume() {
  const [activeLink, setActiveLink] = useState("#Education");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLinkClick = (aboutLinks) => {
    setActiveLink(aboutLinks);
  };

  const mdStyles =
    "block w-2/6 sticky top-16 py-16 h-screen flex flex-1 z-10 flex-col ";

  return (
    <div id="Resume" className="flex mt-8 relative h-full">
      {/* Navigation */}
      <div id="nav" className={`${mdStyles} hidden md:block`}>
        <nav className="ps-24">
          <ul>
            {[
              { name: "Education", href: "#Education" },
              { name: "Experience", href: "#Experience" },
              { name: "Skills", href: "#Skills" },
            ].map((aboutLinks) => (
              <li
                key={aboutLinks.href}
                className={`cursor-pointer text-xl px-5 w-fit items-center font-semibold justify-start py-2 md:px-0 ${
                  activeLink === aboutLinks.href
                    ? "text-highlight font-bold"
                    : "text-dark hover:text-highlight"
                }`}
              >
                <a
                  href={aboutLinks.href}
                  onClick={() => handleLinkClick(aboutLinks.href)}
                  className="items-center justify-end gap-2 flex flex-row-reverse"
                >
                  {aboutLinks.name}
                  <FaArrowRight
                    className={`${
                      activeLink === aboutLinks.href ? "" : "hidden"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="w-full md:w-4/6 flex pt-20 flex-col h-full overflow-y-auto">
        {/* Education Section */}
        <div id="Education" data-aos="fade-up">
          <h4 className="font-bold text-highlight px-5 text-3xl">Education</h4>
          <div className="px-4 py-10">
            <div className="flex flex-col gap-3">
              {education.map((details) => (
                <div
                  key={details.id}
                  className="border-b-2 p-5 border-gray-300"
                >
                  <h4 className="text-highlight font-bold text-xl">
                    {details.year}
                  </h4>
                  <h4 className="text-dark font-bold text-2xl">
                    {details.degree}
                  </h4>
                  <h4 className="text-dark font-bold text-md">
                    {details.grade}
                  </h4>
                  <h4 className="text-dark font-bold text-xl">
                    {details.institution}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div id="Experience" data-aos="fade-up">
          <h4 className="font-bold text-highlight px-5 text-3xl">Experience</h4>
          <div className="px-4 py-10">
            <div className="flex flex-col gap-3">
              {experience.map((details) => (
                <div
                  key={details.id}
                  className="border-b-2 p-5 border-gray-300"
                >
                  <h4 className="text-highlight font-bold text-xl">
                    {details.duration}
                  </h4>
                  <h4 className="text-dark font-bold text-2xl">
                    {details.company}
                  </h4>
                  <h4 className="text-dark font-bold text-md">
                    {details.location}
                  </h4>
                  <div className="flex text-dark text-lg items-start font-semibold md:items-end gap-2">
                    Position:
                    <h4 className="font-bold text-xl">{details.position}</h4>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-dark font-bold text-xl">
                      Responsibilities
                    </h4>
                    {details.responsibility}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="Skills" data-aos="fade-up">
          <h4 className="font-bold text-highlight px-5 text-3xl">Skills</h4>
          <div className="py-10">
            <div className="grid grid-cols-2 px-5 gap-2 md:flex md:flex-row md:gap-8 md:px-5 md:max-w-48 md:h-64">
              {skills.slice(0, 4).map((details) => (
                <div
                  key={details.id}
                  className="bg-white py-8 px-3.5 items-center justify-center flex flex-col gap-3 rounded shad"
                  data-aos="fade-up"
                >
                  <h4 className="text-dark items-center justify-center my-auto text-center font-semibold text-md md:font-bold md:text-xl">
                    {details.skill}
                  </h4>
                  <div className="relative h-14 w-14 md:min-w-40 md:min-h-40">
                    {/* Background ring */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(#d342c3 ${details.percentage}%, lightgray ${details.percentage}% 100%)`,
                      }}
                    ></div>
                    {/* Inner circle */}
                    <div className="absolute md:translate-y-1 md:-translate-x-1 md:top-1 md:right-1 right-1 bottom-1 bg-white rounded-full md:w-36 md:h-36 h-12 w-12 flex items-center justify-center">
                      <h4 className="text-dark font-semibold text-center text-md md:font-bold md:text-2xl">
                        {details.percentage}%
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex flex-col px-5 md:grid-cols-2 md:grid gap-6 md:mr-10"
            data-aos="fade-up"
          >
            {skills.slice(5, skills.length).map((details) => (
              <div
                key={details.id}
                className="flex flex-col gap-5 pr-5 rounded"
              >
                <div className="flex w-5/6 gap-5 items-center justify-between">
                  <h4 className="text-dark my-auto text-start text-md font-semibold text-md md:font-bold md:text-xl">
                    {details.skill}
                  </h4>
                  <h4 className="text-dark my-auto text-start text-md font-semibold text-md md:font-bold md:text-xl">
                    {details.percentage}%
                  </h4>
                </div>
                <div className="w-5/6 h-2 rounded-lg bg-gray-300">
                  <div
                    className="h-full bg-highlight rounded-l-lg"
                    style={{
                      width: `${details.percentage}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
