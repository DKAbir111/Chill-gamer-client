import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
