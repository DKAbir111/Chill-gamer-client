import { useLoaderData } from "react-router-dom"
import AllReviewCard from "../card/AllReviewCard"
import ReviewSlider from "../card/ReviewSlider"

export default function AllReview() {
    const data = useLoaderData()
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

                <div className="flex flex-col gap-4 col-span-2 overflow-auto h-screen">

                    {
                        data.map(datum => <AllReviewCard key={datum._id} datum={datum} />)
                    }
                </div>
                <div className="overflow-hidden">

                    <ReviewSlider />

                </div>
            </div>
        </div>
    )
}
