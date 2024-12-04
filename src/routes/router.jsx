import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AddReview from "../components/pages/AddReview";
import PrivateRoute from "./PrivateRoute";
import AllReview from "../components/pages/AllReview";
import MyReview from "../components/pages/MyReview";
import GameWatchList from "../components/pages/GameWatchList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <h2>home page</h2>
            },
            {
                path: "/allreview",
                element: <PrivateRoute><AllReview /></PrivateRoute>
            },
            {
                path: "/game-watch-list",
                element: <PrivateRoute><GameWatchList /></PrivateRoute>
            },
            {
                path: "/addreview",
                element: <PrivateRoute><AddReview /></PrivateRoute>
            },
            {
                path: "/myreview",
                element: <PrivateRoute><MyReview /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
]);

export default router;