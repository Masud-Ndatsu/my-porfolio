import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Certificates = () => {
  return (
    <div className="flex flex-col justify-between py-12 text-center">
      <Navbar />
      <main className="m-auto text-center py-4 border-y-2 border-gray-700 max-w-[640px] w-full">
        <h1>About</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Certificates;
