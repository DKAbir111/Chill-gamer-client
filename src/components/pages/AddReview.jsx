import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

export default function AddReview() {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState("");
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

    const handleReviewSubmit = (e) => {
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
        const email = form.email.value;
        const name = form.name.value;

        const newReview = {
            cover,
            title,
            year,
            genre,
            rating,
            review,
            email,
            name,
        };

        fetch("http://localhost:5001/games", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newReview),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Review added successfully");
                    form.reset();
                    setReview("");
                }
            });
    };

    return (
        <div className="bg-gray-900 py-20 p-2">
            <div className="card w-3/5 bg-gray-800 shrink-0 shadow-lg text-white mx-auto" data-aos="fade-left">
                <form className="card-body grid grid-cols-2 gap-4" onSubmit={handleReviewSubmit}>
                    <h2 className="text-xl font-semibold text-center col-span-2">Add New Game Review</h2>

                    {/* Game Cover Image */}
                    <div className="form-control col-span-2">
                        <input
                            type="text"
                            placeholder="Game Cover Image URL"
                            className="input input-bordered bg-gray-700 text-white"
                            name="cover"
                            required
                        />
                    </div>

                    {/* Game Title */}
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Game Title"
                            name="title"
                            className="input input-bordered bg-gray-700 text-white"
                            required
                        />
                    </div>

                    {/* Publishing Year */}
                    <div className="form-control">
                        <input
                            type="number"
                            placeholder="Publishing Year (e.g., 2024)"
                            name="year"
                            className="input input-bordered bg-gray-700 text-white"
                            min="1900"
                            max={new Date().getFullYear()}
                            required
                        />
                    </div>

                    {/* Genre Dropdown */}
                    <div className="form-control">
                        <select
                            className="select input-bordered bg-gray-700 text-white"
                            name="genre"
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
                            className="input input-bordered bg-gray-700 text-white"
                            min="1"
                            max="10"
                            name="rating"
                            required
                        />
                    </div>

                    {/* Review Description */}
                    <div className="form-control col-span-2">
                        <textarea
                            placeholder="Write your detailed review here..."
                            className="textarea input-bordered bg-gray-700 text-white"
                            rows="4"
                            name="review"
                            value={review}
                            onChange={handleReviewChange}
                            required
                        ></textarea>
                        {reviewError && <small className="text-red-400">{reviewError}</small>}
                    </div>

                    {/* User Email */}
                    <div className="form-control">
                        <input
                            type="email"
                            value={user?.email}
                            placeholder="User Email"
                            name="email"
                            className="input input-bordered bg-gray-700 text-white"
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
                            className="input input-bordered bg-gray-700 text-white"
                            readOnly
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-4 col-span-2">
                        <button className="btn text-white bg-gradient-to-r to-indigo-500 via-purple-500 from-pink-500 border-none w-full">
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
