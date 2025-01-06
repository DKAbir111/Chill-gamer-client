import { useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUsSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a default duration
    }, []);

    return (
        <div className="bg-gray-900">
            {/* Gradient Header Section */}
            <div className="h-[400px] bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-white flex flex-col items-center justify-center">
                <div
                    className="text-center"
                    data-aos="fade-down"
                >
                    <h1 className="text-4xl font-bold">Contact us</h1>
                    <p className="mt-4 text-lg text-white/80">
                        Start the conversation to establish good relationships and business.
                    </p>
                </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-6 pt-10">
                {/* Head Office Card */}
                <div
                    className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <FaMapMarkerAlt className="text-pink-400 text-4xl mx-auto mb-4" />
                    <h3 className="text-pink-400 text-lg font-semibold">HEAD OFFICE</h3>
                    <p className="mt-2 text-white/80">
                        Jln Cempaka Wangi No 22
                        <br />
                        Jakarta - Indonesia
                    </p>
                </div>

                {/* Email Us Card */}
                <div
                    className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg text-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <FaEnvelope className="text-pink-400 text-4xl mx-auto mb-4" />
                    <h3 className="text-pink-400 text-lg font-semibold">EMAIL US</h3>
                    <p className="mt-2 text-white/80">
                        support@chilgam.tld
                        <br />
                        hello@chilgam.tld
                    </p>
                </div>

                {/* Let's Talk Card */}
                <div
                    className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg text-center"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <FaPhoneAlt className="text-pink-400 text-4xl mx-auto mb-4" />
                    <h3 className="text-pink-400 text-lg font-semibold">LET&apos;S TALK</h3>
                    <p className="mt-2 text-white/80">
                        Phone: +6221.2002.2012
                        <br />
                        Fax: +6221.2002.2013
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;
