import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useEffect } from 'react';
import AOS from 'aos';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
export default function Root() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div>
            <ToastContainer />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
