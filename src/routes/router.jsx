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
import Blog from "../components/pages/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomeLayout />,
                loader: async () => await fetch('https://chill-gamer-server-sandy.vercel.app/reviews')
            },
            {
                path: "/allreview",
                element: <AllReview />,
                loader: async () => await fetch('https://chill-gamer-server-sandy.vercel.app/reviews')
            },
            {
                path: "/game-watch-list/:email",
                element: <PrivateRoute><GameWatchList /></PrivateRoute>,
                loader: async ({ params }) => await fetch(`https://chill-gamer-server-sandy.vercel.app/watchlist/${params.email}`)
            },
            {
                path: "/addreview",
                element: <PrivateRoute><AddReview /></PrivateRoute>
            },
            {
                path: "/myreview/:email",
                element: <PrivateRoute><MyReview /></PrivateRoute>,
                loader: async ({ params }) => await fetch(`https://chill-gamer-server-sandy.vercel.app/reviews/${params.email}`)
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
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/review/:id",
                element: <PrivateRoute><ReviewDetails /></PrivateRoute>,
                loader: async ({ params }) => await fetch(`https://chill-gamer-server-sandy.vercel.app/review/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateReview /></PrivateRoute>,
                loader: async ({ params }) => await fetch(`https://chill-gamer-server-sandy.vercel.app/review/${params.id}`)
            }
        ]
    },
]);

export default router;