import React from 'react'
import user from "../images/user.png"
import packages  from "../images/package.png"
import rocket from "../images/rocket.png"


export default function GetStarted() {
  return (
    <section className="bg-[#F9FAFC] py-14 px-4 space-y-6">

      {/* Header */}
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-bold">
          Get Started In 3 Steps
        </h2>
        <p className="text-[#627382] mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-between min-h-[360px]">
          <div className="flex justify-end">
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-3 py-2 rounded-full text-sm">
              01
            </span>
          </div>

          <div className="text-center space-y-4">
            <img src={user} alt="user" className="mx-auto" />
            <h3 className="text-xl font-semibold">Create Account</h3>
            <p className="text-[#627382] text-sm">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-between min-h-[360px]">
          <div className="flex justify-end">
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-3 py-2 rounded-full text-sm">
              02
            </span>
          </div>

          <div className="text-center space-y-4">
            <img src={packages} alt="packages" className="mx-auto" />
            <h3 className="text-xl font-semibold">Choose Products</h3>
            <p className="text-[#627382] text-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-between min-h-[360px]">
          <div className="flex justify-end">
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-3 py-2 rounded-full text-sm">
              03
            </span>
          </div>

          <div className="text-center space-y-4">
            <img src={rocket} alt="rocket" className="mx-auto" />
            <h3 className="text-xl font-semibold">Start Creating</h3>
            <p className="text-[#627382] text-sm">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
