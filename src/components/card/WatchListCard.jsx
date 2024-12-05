import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function WatchListCard({ watchList }) {
    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={watchList.cover}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{watchList.title}</div>
                        <div className="text-sm opacity-50">{watchList.year}</div>
                    </div>
                </div>
            </td>
            <td>
                {watchList.review.split(" ").slice(0, 7).join(" ")}...
                <br />
                <span className="badge badge-ghost badge-sm">{watchList.genre}</span>
            </td>
            <td>{watchList.rating}</td>
            <td className="hover:underline hover:text-pink-400 cursor-pointer"><Link to={`/review/${watchList._id}`}>Show Details</Link> </td>
        </tr>
    )
}

WatchListCard.propTypes = {
    watchList: PropTypes.object.isRequired,
}