import { ContactSection } from "@/components/contact";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-fuchsia-900 w-full text-lg text-white font-bold p-4">
        Story Downloader
      </div>
      <div
        className="w-full h-screen pt-14"
        style={{
          backgroundImage: "url('/download1.jpeg')", // Correct path to image
          backgroundSize: "cover", // Ensure the image covers the whole screen
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Avoid repeating the image
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl text-yellow-700 font-bold">
            Instagram Story Downloader
          </h1>
          <p className="text-xl text-indigo-950 text-center font-semibold">
            Download your Instagram story and highlights easily!
          </p>
        </div>
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
