import { useLoaderData } from "react-router-dom"
import MyReviewCard from "../card/MyReviewCard"


export default function MyReview() {
    const data = useLoaderData()
    return (
        <div className="bg-gray-900 py-20">
            <div className="overflow-x-auto container mx-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Row */}
                        {
                            data.map(myreview => <MyReviewCard key={myreview._id} myreview={myreview} />)
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr className="text-white">

                            <th>Title</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
