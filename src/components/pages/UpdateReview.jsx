import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateReview() {
    const { user, darkMode } = useContext(AuthContext);
    const data = useLoaderData();
    const navigate = useNavigate();

    const [review, setReview] = useState(data.review || "");
    const [reviewError, setReviewError] = useState("");

    const handleReviewChange = (e) => {
        const value = e.target.value;
        if (value.length > 200) {
            setReviewError("Review cannot exceed 200 characters.");
        } else {
            setReviewError("");
            setReview(value);
        }
    };

    const handleReviewUpdate = (e) => {
        e.preventDefault();
        if (review.length > 200) {
            toast.error("Review is too long. Please limit it to 200 characters.");
            return;
        }

        const form = e.target;
        const cover = form.cover.value;
        const title = form.title.value;
        const year = form.year.value;
        const genre = form.genre.value;
        const rating = form.rating.value;

        const updatedReview = {
            cover,
            title,
            year,
            genre,
            rating,
            review,
        };

        fetch(`http://localhost:5001/update/${data._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedReview),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    toast.success("Review updated successfully");
                    navigate(-1);
                } else {
                    toast.error("Failed to update review");
                }
            });
    };

    return (
        <section className={darkMode ? "dark" : ""}>
            <div className="bg-gray-900 py-20 p-2 dark:bg-black">
                <div className="card w-3/5 bg-gray-800 shrink-0 shadow-lg text-white mx-auto dark:bg-gray-900" data-aos="fade-left">
                    <form className="card-body grid grid-cols-2 gap-4" onSubmit={handleReviewUpdate}>
                        <h2 className="text-xl font-semibold text-center col-span-2 dark:text-gray-400">Update Game Review</h2>

                        {/* Game Cover Image */}
                        <div className="form-control col-span-2">
                            <input
                                type="text"
                                placeholder="Game Cover Image URL"
                                className="input input-bordered bg-gray-700 text-white dark:bg-gray-800"
                                name="cover"
                                defaultValue={data.cover}
                                required
                            />
                        </div>

                        {/* Game Title */}
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Game Title"
                                name="title"
                                defaultValue={data.title}
                                className="input input-bordered bg-gray-700 text-white dark:bg-gray-800"
                                required
                            />
                        </div>

                        {/* Publishing Year */}
                        <div className="form-control">
                            <input
                                type="number"
                                placeholder="Publishing Year (e.g., 2024)"
                                name="year"
                                defaultValue={data.year}
                                className="input input-bordered bg-gray-700 text-white dark:bg-gray-800"
                                min="1900"
                                max={new Date().getFullYear()}
                                required
                            />
                        </div>

                        {/* Genre Dropdown */}
                        <div className="form-control">
                            <select
                                className="select input-bordered bg-gray-700 text-white dark:bg-gray-800"
                                name="genre"
                                defaultValue={data.genre}
                                required
                            >
                                <option value="">Select Genre</option>
                                <option value="Action">Action</option>
                                <option value="RPG">RPG</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Strategy">Strategy</option>
                                <option value="Sports">Sports</option>
                            </select>
                        </div>

                        {/* Rating */}
                        <div className="form-control">
                            <input
                                type="number"
                                placeholder="Rating (1-10)"
                                className="input input-bordered bg-gray-700 text-white dark:bg-gray-800"
                                min="1"
                                max="10"
                                name="rating"
                                defaultValue={data.rating}
                                required
                            />
                        </div>

                        {/* Review Description */}
                        <div className="form-control col-span-2">
                            <textarea
                                placeholder="Write your detailed review here..."
                                className="textarea input-bordered bg-gray-700 text-white dark:bg-gray-800"
                                rows="4"
                                name="review"
                                value={review}
                                onChange={handleReviewChange}
                                required
                            ></textarea>
                            {reviewError && <small className="text-red-500">{reviewError}</small>}
                        </div>

                        {/* User Email */}
                        <div className="form-control">
                            <input
                                type="email"
                                value={user?.email}
                                placeholder="User Email"
                                name="email"
                                className="input input-bordered bg-gray-700 text-white dark:bg-gray-800"
                                readOnly
                            />
                        </div>

                        {/* User Name */}
                        <div className="form-control">
                            <input
                                type="text"
                                value={user?.displayName}
                                placeholder="User Name"
                                name="name"
                                className="input input-bordered bg-gray-700 text-white dark:bg-gray-800"
                                readOnly
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-4 col-span-2">
                            <button className="btn text-white bg-gradient-to-r to-indigo-500 via-purple-500 from-pink-500 border-none w-full">
                                Update Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
