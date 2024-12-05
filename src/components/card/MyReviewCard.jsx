import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MyReviewCard({ myreview, handleDelete }) {


    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={myreview.cover}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{myreview.title}</div>
                        <div className="text-sm opacity-50">{myreview.year}</div>
                    </div>
                </div>
            </td>
            <td>
                {myreview.review.split(" ").slice(0, 7).join(" ")}...
                <br />
                <span className="badge badge-ghost badge-sm">{myreview.genre}</span>
            </td>
            <td>{myreview.rating}</td>
            <td className="flex gap-3">
                <Link to={`/update/${myreview._id}`} className="btn btn-sm btn-primary bg-indigo-500 border-none">Update</Link>
                <button onClick={() => handleDelete(myreview._id)} className="btn btn-sm btn-error border-none bg-pink-500">Delete</button>
            </td>

        </tr>
    )
}
MyReviewCard.propTypes = {
    myreview: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
}