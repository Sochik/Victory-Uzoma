import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="bg-light bg-opacity-20 text-secondary py-10  md:px-24">
        <div className="container pb-4 mx-auto grid grid-cols-2 px-5 md:flex my-auto items-start justify-between gap-8 text-center md:text-left">
          {/* Snippett */}
          <div className="flex flex-col gap-2 md:w-2/6 col-span-2">
            <h4 className="font-bold text-xl mb-4">Snippet</h4>
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className=" font-base pb-5 transition-colors flex-1">
                What ever is worth doing is worth doing well, I am here to
                provide all your financial solutions.
              </p>
              {/* Social Media Links */}
              <div className="flex flex-wrap gap-4 flex-1">
                {[
                  {
                    icon: FaFacebookF,
                    link: "https://www.facebook.com/praise4567",
                  },
                  {
                    icon: FaTwitter,
                    link: "#",
                  },
                  {
                    icon: FaLinkedinIn,
                    link: "https://www.linkedin.com/in/victory-uzoma-204a45240",
                  },
                  {
                    icon: FaInstagram,
                    link: "https://www.instagram.com/praisefyne23",
                  },
                ].map(({ icon: Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all transform hover:scale-110"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col gap-3 items-center col-span-1">
            <h4 className="font-bold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 items-start w-full">
              {[
                { name: "Home", href: "#Home" },
                { name: "About", href: "#About" },
                { name: "Résumé", href: "#Resume" },
                { name: "Services", href: "#Services" },
                { name: "Contact", href: "#Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-purple-700 font-semibold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 md:w-2/6 col-span-1 md:items-end items-start">
            <h4 className="font-bold text-xl mb-4">Have a Question?</h4>
            <div className="flex flex-col items-center md:items-start gap-2">
              <p>📍 Tian Plaza Utako FCT Abuja, Nigeria</p>
              <p>📧 praisevictor23@gmail.com</p>
              <p>📞 +2348117545438 </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" items-center justify-center py-2 text-center bg-dark">
        <p className="text-white">
          {" "}
          Victory Uzoma © {new Date().getFullYear()} - All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
}
