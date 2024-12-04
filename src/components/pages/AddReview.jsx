export default function AddReview() {
    return (
        <div className="bg-gray-900 py-20 p-2">
            <div className="card w-3/5 bg-gray-800 shrink-0 shadow-lg text-white mx-auto" data-aos="fade-left">
                <form className="card-body grid grid-cols-2 gap-4">
                    <h2 className="text-xl font-semibold text-center col-span-2">Add New Game Review</h2>

                    {/* Game Cover Image */}
                    <div className="form-control col-span-2">
                        <input
                            type="url"
                            placeholder="Game Cover Image URL"
                            className="input input-bordered bg-gray-700 text-white"
                            required
                        />
                    </div>

                    {/* Game Title */}
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Game Title"
                            className="input input-bordered bg-gray-700 text-white"
                            required
                        />
                    </div>

                    {/* Publishing Year */}
                    <div className="form-control">
                        <input
                            type="number"
                            placeholder="Publishing Year (e.g., 2024)"
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
                            required
                        >
                            <option value="" disabled selected>Select Genre</option>
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
                            required
                        />
                    </div>

                    {/* Review Description */}
                    <div className="form-control col-span-2">
                        <textarea
                            placeholder="Write your detailed review here..."
                            className="textarea input-bordered bg-gray-700 text-white"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* User Email */}
                    <div className="form-control">
                        <input
                            type="email"
                            value="user@example.com"
                            placeholder="User Email"
                            className="input input-bordered bg-gray-700 text-white"
                            readOnly
                        />
                    </div>

                    {/* User Name */}
                    <div className="form-control">
                        <input
                            type="text"
                            value="John Doe"
                            placeholder="User Name"
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