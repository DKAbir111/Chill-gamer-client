import { useLoaderData } from "react-router-dom"
import TopRatedCard from "../card/TopRatedCard";


export default function HighestRated() {
    const data = useLoaderData()
    //taking 8 top rater data
    const topRatedData = [...data]
        .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
        .slice(0, 8);
    return (
        <div className="bg-gray-900 py-20 dark:bg-black">
            <h3 className="text-white text-center text-4xl mb-10 font-semibold">Highest Rated Game </h3>
            <section className="container mx-auto grid grid-cols-4 gap-5 ">
                {
                    topRatedData.map(datum => <TopRatedCard key={datum._id} datum={datum} />)
                }
            </section>
        </div>
    )
}
