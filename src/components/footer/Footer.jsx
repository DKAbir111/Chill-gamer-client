
import { FaGooglePlay } from 'react-icons/fa6';
import logo from '/game.png'
import { FaFacebook, FaGamepad, FaInstagram, FaPlaystation, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiGameloft } from "react-icons/si";
export default function Footer() {
    return (
        <footer className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
            <div className='container mx-auto flex justify-between items-center py-7'>
                <h2 className='w-1/2 text-3xl text-white font-semibold'>Get ready to play your heart out! Download now and unlock a world of gaming wonders.</h2>
                <div className='flex gap-2  text-white'>
                    <span className='btn btn-ghost btn-circle btn-lg text-2xl hover:bg-white hover:text-pink-400'> <FaGooglePlay /></span>
                    <span className='btn btn-ghost btn-circle btn-lg text-2xl hover:bg-white hover:text-pink-400'> <FaPlaystation /></span>
                    <span className='btn btn-ghost btn-circle btn-lg text-2xl hover:bg-white hover:text-pink-400'> <FaGamepad /></span>
                    <span className='btn btn-ghost btn-circle btn-lg text-2xl hover:bg-white hover:text-pink-400'> <SiGameloft /></span>



                </div>
            </div>
            <section className="bg-black text-white py-10">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className='flex flex-col gap-4'>
                        <span className='flex gap-2 items-center'>
                            <img src={logo} alt="" className='w-1/5' />
                            <p className='text-3xl font-bold'>ChilGam</p>
                        </span>
                        <p className="text-gray-400">
                            Explore the vibrant world of game development with Gamequ – your
                            ultimate destination for innovative games and industry insights.
                        </p>
                        <div className='text-2xl text-gray-400 flex gap-3'>
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                            <FaYoutube />

                        </div>
                    </div>

                    {/* Game List */}
                    <div>
                        <h2 className="font-semibold mb-4">Game List</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>Master Billiard</li>
                            <li>Maximum Speed</li>
                            <li>Rush and Rush</li>
                            <li>Let&apos;s Play Poker</li>
                            <li>Farm Tycoon 2024</li>
                            <li>Monster Box</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h2 className="font-semibold mb-4">Support</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>My Account</li>
                            <li>Community</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* Other Links */}
                    <div>
                        <h2 className="font-semibold mb-4">Company</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>About Us</li>
                            <li>Leadership</li>
                            <li>Careers</li>
                            <li>Article & News</li>
                            <li>Legal Notices</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Footer Bottom */}
            <div className="bg-gray-900 ">
                <div className="container mx-auto py-7 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2024 Gamequ, All rights reserved. Powered by MoxCreative.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-indigo-400">Terms of Use</a>
                        <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
                        <a href="#" className="hover:text-indigo-400">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
