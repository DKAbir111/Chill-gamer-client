import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useEffect } from 'react';
import AOS from 'aos';
export default function Root() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
