import { FaGamepad, FaGooglePlay, FaPlaystation } from 'react-icons/fa6'
import { SiGameloft } from 'react-icons/si'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function TopRatedCard({ datum }) {
    return (
        <div>
            {
                datum ?
                    <div className="h-[490px] card bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl backdrop-blur-lg bg-opacity-50 border border-gray-600 hover:border-pink-400 dark:from-gray-800 dark:to-black dark:bg-opacity-70 dark:border-gray-500 dark:hover:border-blue-400" data-aos="zoom-in">

                        <figure className="px-4 pt-4">
                            <img
                                src={datum.cover}
                                alt={datum.title}
                                className="rounded-xl h-60 object-cover overflow-hidden" />
                        </figure>
                        <div className="flex flex-col  gap-3 items-center text-center text-white p-5">
                            <h2 className="text-2xl text-pink-400">{datum.title}</h2>
                            <p className='font-extralight'>{datum?.review?.split(" ")?.slice(0, 7)?.join(" ")}</p>
                            <div className="card-actions">
                                <Link to={`/review/${datum._id}`} className="text-white btn bg-gradient-to-r border-none from-indigo-500 via-purple-500 to-pink-500 font-medium btn-sm rounded-full">Explore Details</Link>
                            </div>
                            <div className='flex gap-2  text-white'>
                                <a href='https://play.google.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='btn btn-ghost btn-circle text-xl hover:bg-white hover:text-pink-400'>
                                    <FaGooglePlay />
                                </a>

                                <a href='https://www.playstation.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='btn btn-ghost btn-circle text-xl hover:bg-white hover:text-pink-400'>
                                    <FaPlaystation />
                                </a>

                                <a href='https://www.xbox.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='btn btn-ghost btn-circle text-xl hover:bg-white hover:text-pink-400'>
                                    <FaGamepad />
                                </a>

                                <a href='https://www.gameloft.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='btn btn-ghost btn-circle text-xl hover:bg-white hover:text-pink-400'>
                                    <SiGameloft />
                                </a>

                            </div>
                        </div>


                    </div> :
                    <div className="text-center">No Data Found</div>
            }
        </div>
    )
}
// ptop-type
TopRatedCard.propTypes = {
    datum: PropTypes.object.isRequired,
}