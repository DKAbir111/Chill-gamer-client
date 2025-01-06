import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function News() {
    const [articles, setArticles] = useState([]); // Initialize as an empty array

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with default duration
    }, []);

    useEffect(() => {
        fetch("articles.json")
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) => console.error("Error fetching articles:", error)); // Optional: handle errors
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 px-5">
            <div className="container mx-auto text-center">
                <h2
                    className="text-white text-3xl font-bold mb-8"
                    data-aos="fade-up"
                >
                    Latest News & Articles
                </h2>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {articles.map((article) => (
                        <Link
                            to={`/blog/${article.id}`} // Use dynamic routing for unique blog pages
                            key={article.id}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer dark:bg-gray-900 dark:border dark:border-gray-700 border border-transparent"
                            data-aos="zoom-in"
                            data-aos-delay={article.id * 100} // Staggered animation based on article ID
                        >
                            <div className="relative">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="object-cover w-full h-52"
                                />
                                <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded">
                                    {article.tag}
                                </div>
                            </div>
                            <div className="p-5">
                                <p className="text-pink-500 text-sm font-semibold">
                                    {article.date}
                                </p>
                                <h3 className="text-white text-lg font-bold mt-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-3">
                                    {article.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
