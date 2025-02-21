import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="Contact"
      className="container relative w-full flex py-10 flex-col bg-white"

    >
      <div className="flex gap-3 flex-col">
        {/* Title */}
        <div className="flex flex-col text-center mx-auto" data-aos="fade-down">
          <p className="text-primary text-base">Want to reach me?</p>
          <h5 className="text-secondary font-bold text-4xl">Contact me</h5>
        </div>

        {/* Form & Image Container */}
        <div
          className="flex flex-col md:flex-row gap-6 my-auto bg-purple-200 w-11/12 py-5 mx-auto items-center justify-center rounded-lg"
          data-aos="zoom-in"
        >
          {/* Contact Image */}
          <div
            className="flex flex-1 w-full md:w-1/2 p-5"
            data-aos="fade-right"
          >
            <img
              src="/your-image-path.jpg"
              alt="Contact Illustration"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Contact Form */}
          <div
            className="flex flex-col w-full md:w-1/2 px-5"
            data-aos="fade-left"
          >
            <form className="flex flex-col gap-5 md:w-4/6 w-full px-3">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="p-3 rounded resize-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-600 text-white py-3 rounded-lg w-full hover:bg-purple-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        
      </div>
    </section>
  );
}
