import { useLoaderData } from "react-router-dom";
import WatchListCard from "../card/WatchListCard";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function GameWatchList() {
    const data = useLoaderData() || []; // Fallback to an empty array if data is undefined
    const { darkMode } = useContext(AuthContext)
    return (
        <section className={darkMode ? "dark" : ""}>
            <div className="bg-gray-900 py-20 dark:bg-black p-3">
                <div className="container mx-auto text-white">
                    {data.length > 0 ? (
                        <div className="overflow-x-auto">
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
                                    {data.map((watchList) => (
                                        <WatchListCard
                                            key={watchList._id}
                                            watchList={watchList}
                                        />
                                    ))}
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
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-gray-400">No games in your watchlist yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
