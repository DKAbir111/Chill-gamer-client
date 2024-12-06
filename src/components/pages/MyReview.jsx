import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import MyReviewCard from "../card/MyReviewCard";

export default function MyReview() {
    const data = useLoaderData() || [];
    const [filterData, setFilterData] = useState(data);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/review/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success",
                            });
                            const newData = filterData.filter(
                                (datum) => datum._id !== id
                            );
                            setFilterData(newData);
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting review:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the review. Please try again later.",
                            icon: "error",
                        });
                    });
            }
        });
    };

    return (
        <div className="bg-gray-900 py-20">
            <div className="container mx-auto text-white">
                <p className="text-xl font-semibold mb-4">
                    Total Reviews: {filterData?.length || 0}
                </p>
                {filterData.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className="text-white">
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterData.map((myreview) => (
                                    <MyReviewCard
                                        key={myreview._id}
                                        myreview={myreview}
                                        handleDelete={handleDelete}
                                    />
                                ))}
                            </tbody>
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
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-400">No reviews found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
