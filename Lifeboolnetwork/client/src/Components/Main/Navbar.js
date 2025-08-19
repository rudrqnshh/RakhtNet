import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/logo.png";
import { Outlet, Link } from "react-router-dom";
import DropDown from "../Util/DropDown";
import axios from "../Api"
import AuthContext from "../context/AuthContext";

const Navbar = (props) => {
    const s1 = "relative bg-white/30 backdrop-blur-md border border-red-200/20 mx-2 px-6 py-2.5 rounded-lg text-base font-medium text-red-600 hover:bg-red-50/50 hover:border-red-300/30 transition-all duration-300 hover:scale-105 active:scale-95";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { getLoggedIn } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setActiveDropdown(null);
        }
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const MobileDropdown = ({ title, children, links }) => {
        const index = title;
        return (
            <div className="w-full">
                <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex items-center justify-between p-3 bg-white/30 backdrop-blur-md border border-red-200/20 rounded-lg text-red-600 hover:bg-red-50/50 transition-all duration-300"
                >
                    <span className="font-medium">{title}</span>
                    <i className={`fa-solid fa-chevron-${activeDropdown === index ? 'up' : 'down'} transition-transform duration-300`}></i>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === index ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="py-2 space-y-1">
                        {children.map((child, i) => (
                            <Link
                                key={i}
                                to={links[i]}
                                className="block px-4 py-2 text-red-600 hover:bg-red-50/50 rounded-md transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {child}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <nav className="p-4 bg-white/50 backdrop-blur-md sticky top-0 z-10 border-b border-red-100/20 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="group">
                        <div className="flex items-center space-x-3 transform transition-transform duration-300 group-hover:scale-105">
                            <img
                                className="h-8 md:h-10 w-auto"
                                src={logo}
                                draggable={false}
                                alt="Lifeblood Network"
                            />
                            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                                Lifeblood Network
                            </span>
                        </div>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg bg-white/30 backdrop-blur-md border border-red-200/20 text-red-600 hover:bg-red-50/50 hover:border-red-300/30 transition-all duration-300"
                        onClick={toggleMenu}
                    >
                        <i className={`fa-solid fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLinks props={props} s1={s1} getLoggedIn={getLoggedIn} />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 space-y-2`}>
                    <MobileDropdown 
                        title="Our Organization" 
                        children={["Home", "About Lifeblood Network", "Contact Us"]} 
                        links={["/", "/about", "/contactUs"]} 
                    />
                    {props.logIn ? (
                        <>
                            <Link
                                to={`/${props.user}/profile`}
                                className={s1}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <i className="fa-solid fa-user"></i>
                            </Link>
                            <Link
                                to="/"
                                onClick={async () => {
                                    await axios.get("/auth/logout", { withCredentials: true }).then((r) => { });
                                    await getLoggedIn();
                                    setIsMenuOpen(false);
                                }}
                                className={s1}
                            >
                                Log Out
                            </Link>
                        </>
                    ) : (
                        <>
                            <MobileDropdown 
                                title="Seeking Blood" 
                                children={["Patient Login/Register", "Blood Bank Directory"]} 
                                links={["/register/patient", "/bloodDirect"]} 
                            />
                            <MobileDropdown 
                                title="Wish to Contribute" 
                                children={["Donor Login/Register", "Blood Donation Events", "Understanding Blood Donation"]} 
                                links={["/register/donor", "/bloodCamps", "/aboutBloodDonation"]} 
                            />
                            <MobileDropdown 
                                title="Blood Bank Access" 
                                children={["Blood Bank Login", "Add Your Bloodbank"]} 
                                links={["/login/bank", "/register/bank"]} 
                            />
                        </>
                    )}
                </div>
            </nav>
            <Outlet />
        </>
    );
};

// Separate component for navigation links
const NavLinks = ({ props, s1, getLoggedIn }) => {
    return (
        <>
            <DropDown title="Our Organization" children={["Home", "About Lifeblood Network", "Contact Us"]} links={["/", "/about", "/contactUs"]}></DropDown>
            {props.logIn ? (
                <>
                    <Link
                        to={`/${props.user}/profile`}
                        className={s1}
                    >
                        <i className="fa-solid fa-user"></i>
                    </Link>
                    <Link
                        to="/"
                        onClick={async () => {
                            await axios.get("/auth/logout", { withCredentials: true }).then((r) => { });
                            await getLoggedIn();
                        }}
                        className={s1}
                    >
                        Log Out
                    </Link>
                </>
            ) : (
                <>
                    <DropDown title="Seeking Blood" children={["Patient Login/Register", "Blood Bank Directory"]} links={["/register/patient", "/bloodDirect"]}></DropDown>
                    <DropDown title="Wish to Contribute" children={["Donor Login/Register", "Blood Donation Events", "Understanding Blood Donation"]} links={["/register/donor", "/bloodCamps", "/aboutBloodDonation"]}></DropDown>
                    <DropDown title="Blood Bank Access" children={["Blood Bank Login", "Add Your Bloodbank"]} links={["/login/bank", "/register/bank"]}></DropDown>
                </>
            )}
        </>
    );
};

export default Navbar;
