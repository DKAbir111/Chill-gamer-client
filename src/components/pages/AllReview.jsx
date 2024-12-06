import { useLoaderData } from "react-router-dom"
import AllReviewCard from "../card/AllReviewCard"
import ReviewSlider from "../card/ReviewSlider"
import { useContext, useState } from "react"
import { FaSortAmountDown } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../Context/AuthContext";

export default function AllReview() {
    const data = useLoaderData() || [];
    const { darkMode } = useContext(AuthContext)
    const [sortedData, setSortedData] = useState(data);
    const [filteredBy, setFilteredBy] = useState("");

    const sortByRating = () => {
        const result = [...sortedData].sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
        setSortedData(result);
    };

    const sortByYear = () => {
        const result = [...sortedData].sort((a, b) => parseInt(b.year) - parseInt(a.year));
        setSortedData(result);
    };

    const handleFilter = (value) => {
        const result = data.filter(datum => datum.genre.toLowerCase() === value.toLowerCase());
        setSortedData(result);
        setFilteredBy(value);
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="bg-black pb-20 dark:bg-gray-900">
                {/* <label className="input input-bordered flex items-center gap-2 w-1/2 mx-auto mb-10 bg-gray-700 text-white">
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
            </label> */}
                <div className="grid grid-cols-3 gap-5 container mx-auto pt-10">
                    <div className="col-span-2 flex justify-between items-center">
                        <div className="dropdown dropdown-bottom">
                            <div className="flex gap-2 items-center">
                                <div tabIndex={0} role="button" className="btn m-1 bg-gray-800 border-none text-white hover:bg-gray-700"><IoFilterSharp /> Filter by Genres</div>
                                <span className="text-gray-400">
                                    {filteredBy && <div className="flex items-center gap-2 bg-gray-800 px-2 rounded-md">
                                        <span>{filteredBy}</span>
                                        <span className="hover:text-red-500 cursor-pointer" onClick={() => {
                                            setSortedData(data);
                                            setFilteredBy('');
                                        }}><RxCross2 /></span>

                                    </div>}

                                </span>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-gray-800 text-white rounded-box z-[1] w-52 p-2 shadow">
                                <li onClick={() => handleFilter('action')}><a className="font-semibold">Action</a></li>
                                <li onClick={() => handleFilter('rpg')}><a className="font-semibold">RPG</a></li>
                                <li onClick={() => handleFilter('adventure')}><a className="font-semibold">Adventure</a></li>
                                <li onClick={() => handleFilter('strategy')}><a className="font-semibold">Strategy</a></li>
                                <li onClick={() => handleFilter('sports')}><a className="font-semibold">Sports</a></li>
                            </ul>
                        </div>
                        <h3 className="text-white text-xl font-semibold">Total Review: {sortedData.length}</h3>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1 bg-gray-800 border-none text-white hover:bg-gray-700"><FaSortAmountDown /> Sort</div>
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
        </div>
    )
}
