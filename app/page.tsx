import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        {/* Div del video */}
        <div className="video-background relative w-full h-96">
          <video autoPlay loop muted className="absolute w-full h-full object-cover">
            <source src="/home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content z-10 text-white text-center">
            <h1 className="text-5xl font-bold">Softforge Solutions</h1>
            <h3 className="text-3xl mt-2">
              <em>Design, Development and Maintenance of customized software solutions.</em>
            </h3>
          </div>
        </div>

        {/* Div de About */}
        <div className="about bg-gray-200 w-full py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-blue-600 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold">Service 1</h3>
              <p className="mt-4 text-gray-800">Description of the first service offered.</p>
            </div>

            <div className="bg-blue-600 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold">Service 2</h3>
              <p className="mt-4 text-gray-800">Description of the second service offered.</p>
            </div>

            <div className="bg-blue-600 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-white">Service 3</h3>
              <p className="mt-4 text-gray-100">Description of the third service offered.</p>
            </div>

          </div>
        </div>
      </div>
  );
}
