import { useContext } from "react"
import PropTypes from "prop-types"
import { AuthContext } from "../Context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

export default function PrivateRoute({ children }) {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ring loading-lg text-pink-500"></span>
        </div>
    }
    if (user && user?.email) {
        return children;
    }

    return (
        <Navigate to='/login' state={location.pathname} />

    )
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}