import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export default function AllReviewCard({ datum }) {
    return (
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-5 w-full bg-gray-800 md:p-3 px-3 pb-3  mx-auto border rounded-lg border-gray-500 backdrop-blur-lg bg-opacity-70 hover:border-pink-400 dark:bg-gray-800 dark:hover:border-violet-400 mt-10 md:mt-0">
            <div>
                <img src={datum.cover} alt="" className="h-48 w-72 md:rounded-lg md:h-32 md:w-48 rounded-b-xl" />
            </div>

            <div className="flex-1">
                <h2 className="text-pink-400 text-xl mb-2 font-thin">{datum.title} || {datum.year}</h2>
                <p className="text-white text-sm font-thin mb-2">{datum.review}</p>
                <Link to={`/review/${datum._id}`} className="btn btn-sm text-sm  rounded-full bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 border-none text-white">Explore Details</Link>
            </div>

            <div className="flex flex-col justify-center items-center absolute md:relative -top-10 md:top-0">
                <div
                    className="radial-progress bg-pink-400 text-primary-content border-pink-500 border-4 shadow-md"
                    style={{ "--value": datum.rating * 10 }}
                    role="progressbar">
                    {datum.rating}
                </div>
                <p className="text-white hidden md:blobk">Rating</p>
            </div>
        </div>
    )
}

// ptop-type
AllReviewCard.propTypes = {
    datum: PropTypes.object.isRequired,
}