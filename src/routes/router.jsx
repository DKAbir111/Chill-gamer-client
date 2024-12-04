import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AddReview from "../components/pages/AddReview";

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
                element: <h2>All reviews page</h2>
            },
            {
                path: "/addreview",
                element: <AddReview />
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