import React from "react";
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.jpg";
import d1 from "../../assets/donation/d1.png";
import d2 from "../../assets/donation/d2.png";
import d3 from "../../assets/donation/d3.png";
import d4 from "../../assets/donation/d4.png";
import { Link } from "react-router-dom";

const Home = () => {
    const bloodDonationType = [
        { blood: "A+", donate: "A+, AB+", receive: "A+, A-, O+, O-" },
        { blood: "O+", donate: "O+, A+, B+, AB+", receive: "O+, O-" },
        { blood: "B+", donate: "B+, AB+", receive: "B+, B-, O+, O-" },
        { blood: "AB+", donate: "AB+", receive: "Everyone" },
        { blood: "A-", donate: "A+, A-, AB+, AB-", receive: "A-, O-" },
        { blood: "O-", donate: "Everyone", receive: "O-" },
        { blood: "B-", donate: "B+, B-, AB+, AB-", receive: "B-, O-" },
        { blood: "AB-", donate: "AB+, AB-", receive: "AB-, A-, B-, O-" },
    ];
    const bloodDonationProcess = [
        {
            title: "Registration",
            img: d1,
            description:
                "During the registration process, donors provide essential personal information such as their name, contact details, and medical history. Additionally, they may be required to fill out forms or answer questions related to their eligibility to donate blood, ensuring the safety and suitability of their donation.",
        },
        {
            title: "Health Screening",
            img: d2,
            description:
                "Before donation, donors undergo health screening, including checks of blood pressure, temperature, and hemoglobin levels. They're also asked about recent travel, medications, and bloodborne disease risks.",
        },
        {
            title: "Donation",
            img: d3,
            description:
                "Donors, cleared for donation, give blood in a 10-15 minute process. Around one pint of blood is collected using sterile equipment. The process is supervised by trained medical staff to ensure donor safety.",
        },
        {
            title: "Impact",
            img: d4,
            description:
                "Donated blood is rigorously tested to ensure its safety. It's then stored and distributed to hospitals, where it's used in emergencies, surgeries, and medical treatments. Every donation can save up to three lives, making a significant impact on the community.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="dark:text-white-900 bg-gray-50 dark:bg-gray-900">
            {/* Hero Section with Spline */}
            <div className="relative h-[900px] w-full overflow-hidden bg-black -translate-y-20">
                <Spline
                    scene="https://prod.spline.design/qwvncRg4zL0bNIs5/scene.splinecode"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center px-4"
                    >
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" 
                            style={{ color: 'white' }}
                        >
                            Save Lives With Blood Donation
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" 
                            style={{ color: 'white' }}
                        >
                            Every drop counts. Be a hero today.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Link to="/register/patient">
                                <button className="bg-red-600/50 backdrop-blur-md border border-red-700/30 text-red-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-red-700/70 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 dark:bg-red-700/50 dark:border-red-800/30 dark:hover:bg-red-800/70">
                                    Login
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Quote Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        className="transition-transform duration-300"
                    >
                        <img draggable={false} src={banner2} alt="Donation" className="rounded-lg shadow-xl w-full" />
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <p className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 italic">
                            "To give blood, you need neither extra strength nor extra food, and you will save a life."
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-white">
                            - Karl Landsteiner
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Blood Type Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-800 py-8 md:py-16"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl md:text-3xl font-bold text-center text-blood dark:text-white mb-8 md:mb-12"
                    >
                        Explore Blood Donation
                    </motion.h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        <motion.div 
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4 md:space-y-6"
                        >
                            <img src={banner3} alt="Blood Donation" className="rounded-lg shadow-lg w-full" />
                            <p className="text-base md:text-lg text-gray-600 dark:text-white text-center">
                                After giving blood, your body begins the remarkable process of
                                replenishing its supply. This renewal stimulates the production of
                                fresh blood cells, promoting overall well-being and vitality.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="overflow-x-auto"
                        >
                            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                                <thead>
                                    <tr className="bg-blood text-white">
                                        <th className="py-3 px-4 text-left">Blood Type</th>
                                        <th className="py-3 px-4 text-left">Can Donate To</th>
                                        <th className="py-3 px-4 text-left">Can Receive From</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bloodDonationType.map((type, index) => (
                                        <motion.tr 
                                            key={type.blood}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}
                                        >
                                            <td className="py-3 px-4 font-semibold dark:text-white">{type.blood}</td>
                                            <td className="py-3 px-4 dark:text-white">{type.donate}</td>
                                            <td className="py-3 px-4 dark:text-white">{type.receive}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Process Section */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"
            >
                <motion.h2 
                    variants={itemVariants}
                    className="text-2xl md:text-3xl font-bold text-center text-blood dark:text-white mb-8 md:mb-12"
                >
                    Blood Donation Process
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {bloodDonationProcess.map((process, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="relative h-48 md:h-full">
                                    <img src={process.img} alt={process.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                                        {index + 1}. {process.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 dark:text-white">
                                        {process.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Footer */}
            <motion.footer 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-blood text-white py-4 md:py-6"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-base md:text-lg">
                        🩸 Lifeblood Network @ {new Date().getFullYear()} 🩸 || Made with ❤️ by Chandan
                    </p>
                </div>
            </motion.footer>
        </div>
    );
};

export default Home;
