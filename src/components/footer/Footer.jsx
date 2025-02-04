import { FaGooglePlay, FaFacebook, FaGamepad, FaInstagram, FaPlaystation, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiGameloft } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import logo from "/game.png";

export default function Footer() {
    const { darkMode } = useContext(AuthContext);

    return (
        <div className={darkMode ? "dark" : ""}>
            <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-gray-900">
                {/* Top Section */}
                <div className="container mx-auto flex-col md:flex-row flex justify-between items-center py-7 px-2">
                    <h2 className="md:w-1/2 text-3xl text-white font-semibold dark:text-gray-200">
                        Get ready to play your heart out! Download now and unlock a world of gaming wonders.
                    </h2>
                    <div className="flex gap-4">
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            className="btn btn-ghost btn-circle btn-lg text-2xl text-white hover:bg-white hover:text-pink-400 dark:hover:bg-gray-700 dark:hover:text-indigo-400"
                        >
                            <FaGooglePlay />
                        </a>
                        <a
                            href="https://www.playstation.com/en-us/"
                            target="_blank"
                            className="btn btn-ghost btn-circle btn-lg text-2xl text-white hover:bg-white hover:text-pink-400 dark:hover:bg-gray-700 dark:hover:text-indigo-400"
                        >
                            <FaPlaystation />
                        </a>
                        <a
                            href="https://www.gamepad.com"
                            target="_blank"
                            className="btn btn-ghost btn-circle btn-lg text-2xl text-white hover:bg-white hover:text-pink-400 dark:hover:bg-gray-700 dark:hover:text-indigo-400"
                        >
                            <FaGamepad />
                        </a>
                        <a
                            href="https://www.gameloft.com"
                            target="_blank"
                            className="btn btn-ghost btn-circle btn-lg text-2xl text-white hover:bg-white hover:text-pink-400 dark:hover:bg-gray-700 dark:hover:text-indigo-400"
                        >
                            <SiGameloft />
                        </a>
                    </div>
                </div>

                {/* Main Section */}
                <section className="bg-black text-white py-10 dark:bg-gray-900">
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Description */}
                        <div className="flex flex-col gap-4">
                            <span className="flex gap-2 items-center">
                                <img src={logo} alt="Game Logo" className="w-1/5" />
                                <p className="text-3xl font-bold">ChilGam</p>
                            </span>
                            <p className="text-gray-400 dark:text-gray-500">
                                Explore the vibrant world of game development with ChilGam – your ultimate destination for innovative games and industry insights.
                            </p>
                            <div className="text-2xl flex gap-3 text-gray-400 dark:text-gray-500">
                                <a
                                    href="https://www.facebook.com/darulkararabir/"
                                    target="_blank"
                                    className="hover:text-white dark:hover:text-indigo-400"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="https://twitter.com/ChilGam"
                                    target="_blank"
                                    className="hover:text-white dark:hover:text-indigo-400"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="https://www.instagram.com/ChilGam"
                                    target="_blank"
                                    className="hover:text-white dark:hover:text-indigo-400"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://www.youtube.com/ChilGam"
                                    target="_blank"
                                    className="hover:text-white dark:hover:text-indigo-400"
                                >
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>

                        {/* Game List */}
                        <div>
                            <h2 className="font-semibold mb-4">Game List</h2>
                            <ul className="text-gray-400 space-y-2 dark:text-gray-500">
                                <li className="hover:text-white dark:hover:text-indigo-400">Master Billiard</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">Maximum Speed</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">Rush and Rush</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">Let&apos;s Play Poker</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">Farm Tycoon 2024</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">Monster Box</li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h2 className="font-semibold mb-4">Support</h2>
                            <ul className="text-gray-400 space-y-2 dark:text-gray-500">
                                <li className="hover:text-white dark:hover:text-indigo-400">My Account</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">Community</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">FAQ</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">Contact Us</li>
                            </ul>
                        </div>

                        {/* Other Links */}
                        <div>
                            <h2 className="font-semibold mb-4">Company</h2>
                            <ul className="text-gray-400 space-y-2 dark:text-gray-500">
                                <li className="hover:text-white dark:hover:text-indigo-400">About Us</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">Leadership</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">Careers</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">Article & News</li>
                                <li className="hover:text-white dark:hover:text-indigo-400">Legal Notices</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Footer Bottom */}
                <div className="bg-gray-900 py-7 dark:bg-gray-800">
                    <div className="container mx-auto text-sm flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 dark:text-gray-400">
                            &copy; 2025 ChilGam, All rights reserved. Powered by Darun Karas Abir.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-indigo-400">Terms of Use</a>
                            <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
                            <a href="#" className="hover:text-indigo-400">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
