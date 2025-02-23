import React from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-900 mb-12 text-center">
          Contact
        </h2>
        <div className="max-w-md mx-auto space-y-6 text-center">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-2xl text-orange-600">
              <IoMdMail />
            </span>
            <Link
              href="mailto:ayronsanfra9@gmail.com"
              className="text-orange-800 hover:text-orange-600 transition duration-300"
            >
              ayronsanfra9@gmail.com
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <span className="text-2xl text-orange-600">
              <FaLinkedin />
            </span>
            <Link
              href="https://www.linkedin.com/in/ayron-sanfra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-800 hover:text-orange-600 transition duration-300"
            >
              LinkedIn Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
