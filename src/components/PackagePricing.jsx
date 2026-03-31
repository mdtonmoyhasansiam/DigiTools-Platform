import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

export default function PackagePricing() {
  return (
    <section className="py-14 px-4 space-y-6">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-[#627382] mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">

        {/* Starter */}
        <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8 flex flex-col justify-between min-h-[360px] space-y-5">

          <div>
            <h3 className="text-2xl font-bold">Starter</h3>
            <p className="text-[#627382] text-sm">Perfect for getting started</p>
          </div>

          <p>
            <span className="text-3xl font-bold">$0</span> / Month
          </p>

          <div className="space-y-2 text-[#627382] text-sm min-h-[180px]">
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-400" /> Access to 10 free tools</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-400" /> Basic templates</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-400" /> Community support</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-400" /> 1 project per month</p>
          </div>

          <button className="btn w-full text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-400">
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="relative rounded-2xl p-8 flex flex-col justify-between min-h-[360px] space-y-5 text-white bg-gradient-to-r from-blue-600 to-purple-500 border">

          <span className="absolute -top-4 right-35 bg-amber-100 text-amber-600 text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>

          <div>
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-sm">Best for professionals</p>
          </div>

          <p>
            <span className="text-3xl font-bold">$29</span> / Month
          </p>

          <div className="space-y-2 text-sm min-h-[180px]">
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-300" /> Access to all premium tools</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-300" /> Unlimited templates</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-300" /> Priority support</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-300" /> Unlimited projects</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-300" /> Cloud sync</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-300" /> Advanced analytics</p>
          </div>

          <button className="btn w-full bg-white rounded-xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              Start Pro Trial
            </span>
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8 flex flex-col justify-between min-h-[360px] space-y-5">

          <div>
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-[#627382] text-sm">For teams and businesses</p>
          </div>

          <p>
            <span className="text-3xl font-bold">$99</span> / Month
          </p>

          <div className="space-y-2 text-[#627382] text-sm min-h-[180px]">
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-400" /> Everything in Pro</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-400" /> Team collaboration</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-400" /> Custom integrations</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-400" /> Dedicated support</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-400" /> SLA guarantee</p>
            <p className="flex items-center gap-2"><RiVerifiedBadgeFill className="text-green-400" /> Custom branding</p>
          </div>

          <button className="btn w-full text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-400">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
}
