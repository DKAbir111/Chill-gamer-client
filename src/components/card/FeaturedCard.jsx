

export default function FeaturedCard({ datum }) {
    return (
        <div className="flex items-center hover:border-pink-400 py-3 rounded-lg gap-3 border border-transparent mt-5 px-4 hover:backdrop-blur-lg duration-700 hover:translate-x-5 hover:bg-gray-400 hover:bg-opacity-10">
            <div className="bg-pink-400 p-4 rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4h16v16H4z"
                    />
                </svg>
            </div>
            <div className="ml-4">
                <h4 className="text-lg font-semibold text-pink-400">{datum.title}</h4>
                <p className="text-gray-400">
                    {datum.review}
                </p>
            </div>
        </div>
    )
}
