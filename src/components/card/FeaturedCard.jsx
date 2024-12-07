
import PropTypes from 'prop-types'
import { IoGameControllerOutline } from "react-icons/io5";
export default function FeaturedCard({ datum }) {
    return (
        <div className="flex items-center hover:border-pink-400 py-3 rounded-lg gap-3 border border-transparent mt-5 px-4 hover:backdrop-blur-lg duration-700 hover:translate-x-5 hover:bg-gray-400 hover:bg-opacity-10">
            <div className="bg-pink-400 p-4 rounded-full">
                <IoGameControllerOutline className='text-2xl' />
            </div>
            <div className="ml-4">
                <h4 className="text-lg font-semibold text-pink-400">{datum.title}</h4>
                <p className="text-gray-400">
                    {datum.review}
                </p>
            </div>
        </div>
    )
}
// ptop-type
FeaturedCard.propTypes = {
    datum: PropTypes.object.isRequired,
}