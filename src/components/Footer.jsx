import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className="bg-[#0B1628] text-white px-6 md:px-16 py-16">
            
            {/* Top Section */}
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                {/* Brand */}
                <div className="space-y-4 max-w-[320px]">
                    <h1 className="text-3xl font-bold">DigiTools</h1>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                {/* Product */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-lg">Product</h2>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">Features</li>
                        <li className="hover:text-white cursor-pointer">Pricing</li>
                        <li className="hover:text-white cursor-pointer">Templates</li>
                        <li className="hover:text-white cursor-pointer">Integrations</li>
                    </ul>
                </div>

                {/* Company */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-lg">Company</h2>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Press</li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-lg">Resources</h2>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">Documentation</li>
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Community</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Social */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-lg">Social Links</h2>
                    <div className="flex gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer text-lg">
                            <FaInstagram />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer text-lg">
                            <FaFacebookF />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer text-lg">
                            <FaTwitter />
                        </div>
                    </div>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-10 max-w-[1400px] mx-auto"></div>

            {/* Bottom Section */}
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
                <p>© 2026 DigiTools. All rights reserved by Tonmoy</p>

                <div className="flex gap-6">
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer">Terms of Service</span>
                    <span className="hover:text-white cursor-pointer">Cookies</span>
                </div>
            </div>

        </footer>
    )
}