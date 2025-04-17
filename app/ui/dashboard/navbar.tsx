"use client"

import { useState } from "react";
import { Link } from "react-scroll";
import { NAV_ITEMS } from "@/app/data/data";
import { poppins } from "@/app/ui/fonts";
import { FiMenu, FiX } from "react-icons/fi"; // Import icon untuk hamburger & close

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full px-6 sm:px-20 fixed top-0 z-50 shadow bg-white">
            <nav className="flex justify-between items-center py-4">
                {/* Logo */}
                <h2 className={`${poppins.className} text-2xl font-semibold text-teal-700`}>
                    Annisa L.F.
                </h2>

                {/* Tombol Menu (Mobile) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>

                {/* Menu Navigasi (Desktop) */}
                <div className="hidden md:flex space-x-6 font-medium">
                    {NAV_ITEMS.map((item) => (
                        <Link 
                            key={item.to} 
                            to={item.to} 
                            smooth={true} 
                            duration={500} 
                            className="cursor-pointer hover:text-teal-500 transition-all"
                        >
                            {item.to}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Menu Dropdown (Mobile) */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
                    <ul className="flex flex-col space-y-4 text-center">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.to}>
                                <Link 
                                    to={item.to} 
                                    smooth={true} 
                                    duration={500} 
                                    className="block py-2 hover:text-teal-500 transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.to}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
