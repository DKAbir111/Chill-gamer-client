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
import UpdateReview from "../components/pages/UpdateReview";
import ErrorPage from "../components/pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomeLayout />,
                loader: async () => await fetch('http://localhost:5001/reviews')
            },
            {
                path: "/allreview",
                element: <AllReview />,
                loader: async () => await fetch('http://localhost:5001/reviews')
            },
            {
                path: "/game-watch-list/:email",
                element: <PrivateRoute><GameWatchList /></PrivateRoute>,
                loader: async ({ params }) => await fetch(`http://localhost:5001/watchlist/${params.email}`)
            },
            {
                path: "/addreview",
                element: <PrivateRoute><AddReview /></PrivateRoute>
            },
            {
                path: "/myreview/:email",
                element: <PrivateRoute><MyReview /></PrivateRoute>,
                loader: async ({ params }) => await fetch(`http://localhost:5001/reviews/${params.email}`)
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
                element: <PrivateRoute><ReviewDetails /></PrivateRoute>,
                loader: async ({ params }) => await fetch(`http://localhost:5001/review/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateReview /></PrivateRoute>,
                loader: async ({ params }) => await fetch(`http://localhost:5001/review/${params.id}`)
            }
        ]
    },
]);

export default router;