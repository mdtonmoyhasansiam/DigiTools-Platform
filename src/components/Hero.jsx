import React from 'react'
import dot from "../images/dot.png"
import { RxResume } from 'react-icons/rx'
import banner from "../images/banner.png"

export default function Banner() {
  return (
    <section className="max-w-[1600px] mx-auto my-10 px-3 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

      {/* Left Content */}
      <div className="max-w-[600px] w-full text-center lg:text-left space-y-4">

        {/* Badge */}
        <div className="flex justify-center lg:justify-start">
          <div className="flex items-center gap-2 bg-[#E1E7FF] px-3 py-2 rounded-full">
            <img src={dot} alt="dot" />
            <p className="font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Supercharge Your <br className="hidden lg:block" />
          Digital Workflow
        </h1>

        {/* Description */}
        <p className="text-gray-500">
          Access premium AI tools, design assets, templates, and productivity
          software — all in one place. Start creating faster today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
          <button className="btn btn-primary">
            Explore Products
          </button>

          <button className="btn btn-outline btn-primary flex items-center gap-2">
            <RxResume />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="max-w-[600px] w-full flex justify-center">
        <img src={banner} alt="banner" className="w-full" />
      </div>

    </section>
  );
}
