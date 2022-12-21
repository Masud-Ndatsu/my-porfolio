import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <div className="flex flex-col justify-between py-12 text-center">
      <Navbar />
      <main className="m-auto text-center py-4 border-y-2 border-gray-700 max-w-[640px] w-full">
        <div className="container py-6 px-2 flex flex-col gap-4">
          <div className="w-full border-2 border-gray-500 rounded">
            <h1 className="border-b border-gray-600 py-2">
              My Portfolio Website
            </h1>
            <div className="sm:flex gap-2 p-2">
              <div className="content h-48 flex-[1.5] bg-green-500"></div>
              <div className="content h-full flex-1">
                <p className="sm:text-left ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt?
                </p>
              </div>
            </div>
            <div className="border-t border-gray-600 px-4 py-2 flex items-center justify-between">
              <p className="p-2 bg-gray-700 text-white text-2xl rounded">
                <FaLaptopCode />
              </p>
              <p className="p-2 bg-gray-700 text-white text-2xl rounded">
                <FiExternalLink />
              </p>
            </div>
          </div>
          <div className="w-full border-2 border-gray-500 rounded">
            <h1 className="border-b border-gray-600 py-2">
              My Portfolio Website
            </h1>
            <div className="sm:flex gap-2 p-2">
              <div className="content h-48 flex-[1.5] bg-green-500"></div>
              <div className="content h-full flex-1">
                <p className="sm:text-left ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt?
                </p>
              </div>
            </div>
            <div className="border-t border-gray-600 px-4 py-2 flex items-center justify-between">
              <p className="p-2 bg-gray-700 text-white text-2xl rounded">
                <FaLaptopCode />
              </p>
              <p className="p-2 bg-gray-700 text-white text-2xl rounded">
                <FiExternalLink />
              </p>
            </div>
          </div>
          <div className="w-full border-2 border-gray-500 rounded">
            <h1 className="border-b border-gray-600 py-2">
              My Portfolio Website
            </h1>
            <div className="sm:flex gap-2 p-2">
              <div className="content h-48 flex-[1.5] bg-green-500"></div>
              <div className="content h-full flex-1">
                <p className="sm:text-left ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt?
                </p>
              </div>
            </div>
            <div className="border-t border-gray-600 px-4 py-2 flex items-center justify-between">
              <p className="p-2 bg-gray-700 text-white text-2xl rounded">
                <FaLaptopCode />
              </p>
              <p className="p-2 bg-gray-700 text-white text-2xl rounded">
                <FiExternalLink />
              </p>
            </div>
          </div>
          <div className="w-full border-2 border-gray-500 rounded">
            <h1 className="border-b border-gray-600 py-2">
              My Portfolio Website
            </h1>
            <div className="sm:flex gap-2 p-2">
              <div className="content h-48 flex-[1.5] bg-green-500"></div>
              <div className="content h-full flex-1">
                <p className="sm:text-left ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt?
                </p>
              </div>
            </div>
            <div className="border-t border-gray-600 px-4 py-2 flex items-center justify-between">
              <p className="p-2 bg-gray-700 text-white text-2xl rounded">
                <FaLaptopCode />
              </p>
              <p className="p-2 bg-gray-700 text-white text-2xl rounded">
                <FiExternalLink />
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
