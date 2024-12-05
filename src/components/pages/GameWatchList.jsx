import { useLoaderData } from "react-router-dom"
import WatchListCard from "../card/WatchListCard"


export default function GameWatchList() {
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
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Row */}
                        {
                            data.map(watchList => <WatchListCard key={watchList._id} watchList={watchList} />)
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr className="text-white">

                            <th>Title</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Details</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
