import { useContext } from "react"
import PropTypes from "prop-types"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

export default function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext)
    if (user && user?.email) {
        return children;
    }

    return (
        <Navigate to='/login' />

    )
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}