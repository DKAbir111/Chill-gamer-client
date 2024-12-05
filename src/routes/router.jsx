import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AddReview from "../components/pages/AddReview";
import PrivateRoute from "./PrivateRoute";
import AllReview from "../components/pages/AllReview";
import MyReview from "../components/pages/MyReview";
import GameWatchList from "../components/pages/GameWatchList";
import HomeLayout from "../components/layouts/HomeLayout";
import ReviewDetails from "../components/pages/ReviewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomeLayout />,
                loader: async () => await fetch('http://localhost:5001/reviews')
            },
            {
                path: "/allreview",
                element: <PrivateRoute><AllReview /></PrivateRoute>,
                loader: async () => await fetch('http://localhost:5001/reviews')
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
            },
            {
                path: "/review/:id",
                element: <ReviewDetails />,
                loader: async ({ params }) => await fetch(`http://localhost:5001/review/${params.id}`)
            }
        ]
    },
]);

export default router;