import { useContext } from "react";
import ContactForm from "../contact/ContactForm";
import ContactUsSection from "../contact/ContactUsSection";
import { AuthContext } from "../../Context/AuthContext";

export default function ContactUs() {
    const { darkMode } = useContext(AuthContext)
    return (
        <div className={darkMode ? "dark" : ""}>
            <ContactUsSection />
            <ContactForm />
        </div>
    )
}
