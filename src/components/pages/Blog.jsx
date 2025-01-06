import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { AuthContext } from "../../Context/AuthContext"; // Assuming AuthContext is used for darkMode

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const { darkMode } = useContext(AuthContext); // Using context to check if dark mode is enabled

    useEffect(() => {
        // Simulating fetching data from the provided JSON
        fetch('articles.json')
            .then(res => res.json())
            .then(data => {
                setArticles(data);
            });
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className={`bg-gray-900 py-16 px-3 md:px-8 ${darkMode ? "dark" : ""}`}>
            <div className="container mx-auto">
                <h2 className="text-white text-4xl font-semibold text-center mb-12">
                    Latest News & Insights
                </h2>

                {/* Articles Layout */}
                <div className="space-y-16">
                    {articles.map((article, index) => (
                        <div key={article.id} data-aos="fade-up">
                            <div
                                className={`flex flex-col lg:flex-row mb-12 rounded-lg bg-gray-800 dark:bg-gray-900 overflow-hidden shadow-lg transition-all duration-500 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Section */}
                                <div className="w-full lg:w-1/2 p-4 md:p-8 lg:pr-16 flex flex-col justify-between">
                                    <p className="text-pink-400 text-sm font-semibold">{article.date}</p>
                                    <h3 className="text-white text-3xl font-bold mt-4 mb-6">{article.title}</h3>
                                    <p className="text-gray-300 dark:text-gray-200 text-lg mb-6">{article.description}</p>

                                    {/* Game Info */}
                                    <div className="text-gray-400 dark:text-gray-300 text-sm space-y-4">
                                        <p><strong className="text-white">Game Title:</strong> {article.gameTitle}</p>
                                        <p><strong className="text-white">Developer:</strong> {article.developer}</p>
                                        <p><strong className="text-white">Platforms:</strong> {article.platforms.join(", ")}</p>
                                        <p><strong className="text-white">Genre:</strong> {article.genre.join(", ")}</p>
                                        <p><strong className="text-white">Rating:</strong> {Array(Math.round(article.rating)).fill("⭐").join("")}</p>
                                    </div>

                                    {/* Pros and Cons */}
                                    <div className="mt-8 space-y-4">
                                        <div>
                                            <h5 className="text-pink-400 text-xl font-semibold">What We Love:</h5>
                                            <p className="text-gray-300 dark:text-gray-200 text-lg">{article.pros.join(", ")}</p>
                                        </div>
                                        <div>
                                            <h5 className="text-pink-400 text-xl font-semibold">What Could Be Improved:</h5>
                                            <p className="text-gray-300 dark:text-gray-200 text-lg">{article.cons.join(", ")}</p>
                                        </div>
                                    </div>

                                    {/* Comments Section */}
                                    <div className="mt-8 space-y-4">
                                        <h6 className="text-white text-xl font-semibold">Reader Comments:</h6>
                                        {article.comments && article.comments.length > 0 ? (
                                            article.comments.map((comment, index) => (
                                                <div key={index} className="bg-gray-700 dark:bg-gray-800 p-4 rounded-md">
                                                    <p className="text-gray-400 dark:text-gray-300">{comment.comment}</p>
                                                    <p className="text-pink-400 text-sm font-semibold mt-2">- {comment.name}</p>
                                                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{comment.date}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-gray-400 dark:text-gray-300 text-sm">No comments yet.</p>
                                        )}
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="relative w-full lg:w-1/2">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="object-cover w-full h-72 lg:h-full rounded-lg transition-transform duration-300 transform hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Full Article Content */}
                            <p className="text-gray-300 dark:text-gray-200 text-lg mb-6">{article.content}</p>

                            {/* Writer Info */}
                            <div className="mt-12 text-gray-400 dark:text-gray-300 text-sm">
                                <p><strong className="text-white">Written by:</strong> {article.writer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
