import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function News() {

    const [articles, setArticle] = useState([]); // Initialize as an empty array

    useEffect(() => {
        fetch('articles.json')
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error("Error fetching articles:", error)); // Optional: handle errors
    }, []);


    return (
        <div className="bg-gray-900 py-12 px-5">
            <div className="container mx-auto text-center">
                <h2 className="text-white text-3xl font-bold mb-8">Latest news & article</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <Link to={'/blog'}
                            key={article.id}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
                                <p className="text-pink-500 text-sm font-semibold">{article.date}</p>
                                <h3 className="text-white text-lg font-bold mt-2">{article.title}</h3>
                                <p className="text-gray-400 text-sm mt-3">{article.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}
