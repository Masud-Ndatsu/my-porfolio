import React from "react";
import { FaFileDownload } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="flex flex-col justify-between py-12 text-center">
      <Navbar />
      <main className="m-auto text-center py-4 border-y-2 border-gray-700 max-w-[580px] w-full">
        <div className="p-6 text-center">
          I’m an Information & Technology alumni from Eastern Mediterranean
          University, Cyprus. I am passionate about Web development and
          currently, I work with NextJS and React. I also enjoy scripting and
          other fields that help me automate my tasks. I am currently learning
          how to work better with algorithms and data structures. I like to
          practice my skills on sites like Frontend Mentor, Code wars, CSS
          battle, Hackerrank and Try Hack Me. I am currently working as a
          Frontend Web Developer at Rapid River / Internet Brands.
        </div>
        <button className="inline-block p-2 bg-gray-500 text-gray-200 text-center flex items-center justify-center gap-2 rounded m-auto">
          <FaFileDownload />
          Download My CV
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default About;
