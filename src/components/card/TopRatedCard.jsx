import React from 'react'
import { FaGamepad, FaGooglePlay, FaPlaystation } from 'react-icons/fa6'
import { SiGameloft } from 'react-icons/si'

export default function TopRatedCard({ datum }) {
    return (
        <div>
            {
                datum ?
                    <div className="card bg-gradient-to-b from-gray-900 to-gray-800  shadow-xl backdrop-blur-lg bg-opacity-50 border border-gray-600 hover:border-pink-400">
                        <figure className="px-4 pt-4">
                            <img
                                src={datum.cover}
                                alt={datum.title}
                                className="rounded-xl h-60 object-cover" />
                        </figure>
                        <div className="flex flex-col  gap-3 items-center text-center text-white p-5">
                            <h2 className="text-2xl text-pink-400">{datum.title}</h2>
                            <p className='font-extralight'>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="text-white btn bg-gradient-to-r border-none from-indigo-500 via-purple-500 to-pink-500 font-medium btn-sm rounded-full">Explore Details</button>
                            </div>
                            <div className='flex gap-2  text-white'>
                                <span className='btn btn-ghost btn-circle text-xl hover:bg-white hover:text-pink-400'> <FaGooglePlay /></span>
                                <span className='btn btn-ghost btn-circle text-xl hover:bg-white hover:text-pink-400'> <FaPlaystation /></span>
                                <span className='btn btn-ghost btn-circle text-xl hover:bg-white hover:text-pink-400'> <FaGamepad /></span>
                                <span className='btn btn-ghost btn-circle text-xl hover:bg-white hover:text-pink-400'> <SiGameloft /></span>
                            </div>
                        </div>


                    </div> :
                    <div className="text-center">No Data Found</div>
            }
        </div>
    )
}
