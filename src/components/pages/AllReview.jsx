import { useLoaderData } from "react-router-dom"
import AllReviewCard from "../card/AllReviewCard"
import ReviewSlider from "../card/ReviewSlider"
import { useState } from "react"

export default function AllReview() {
    const data = useLoaderData() || []
    const [sortedData, setSortedData] = useState(data)
    const sortByRating = () => {
        const sortedData = [...data].sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
        setSortedData(sortedData);
    };
    const sortByYear = () => {
        const sortedData = [...data].sort((a, b) => parseInt(b.year) - parseInt(a.year));
        setSortedData(sortedData);
    };

    return (
        <div className="bg-black pb-20">
            <label className="input input-bordered flex items-center gap-2 w-1/2 mx-auto mb-10 bg-gray-700 text-white">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>
            <div className="grid grid-cols-3 gap-5 container mx-auto">
                <div className="col-span-2 flex justify-between items-center">
                    <h3 className="text-white text-xl font-semibold">Total Review: {sortedData.length}</h3>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 bg-gray-800 border-none text-white hover:bg-gray-700">Sort</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-gray-800 rounded-box z-[1] w-52 p-2 shadow text-white">
                            <li onClick={sortByRating}><a className="font-semibold">Sort By Rating</a></li>
                            <li onClick={sortByYear}><a className="font-semibold">Sort By Year</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-4 col-span-2 overflow-auto h-screen">

                    {sortedData?.length > 0 ?
                        (sortedData?.map(datum => <AllReviewCard key={datum._id} datum={datum} />)) :
                        (<div className="text-center py-10">
                            <p className="text-gray-400">No reviews found.</p>
                        </div>)
                    }
                </div>
                <div className="overflow-hidden">

                    <ReviewSlider />

                </div>
            </div>
        </div>
    )
}
