import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import routes from "./routes";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center px-6 py-4 md:px-10 lg:px-12 transition-all duration-300 font-sans
                ${scrolled
                        ? "bg-black/10 backdrop-blur-xl border-b border-white/10"
                        : "bg-transparent"
                    }`}
            >
                <NavLink to="/" className="text-white font-bold text-[1.4rem] md:text-[1.6rem] uppercase tracking-tighter">
                    Platinum <span className="text-[#20a7db]">Fitness</span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-wrap justify-center items-center gap-2 text-white/50">
                    {routes
                        .filter((route) => route.showInNav)
                        .map((route) => (
                            <NavLink
                                key={route.path}
                                to={route.path}
                                className={({ isActive }) =>
                                    `relative px-4 py-2 transition text-[12px] tracking-[0.25em] uppercase font-medium after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 text-white" ${isActive
                                        ? "after:scale-x-100 text-white"
                                        : "hover:text-white"
                                    }`
                                }
                            >
                                {route.name}
                            </NavLink>
                        ))}
                </div>
                <NavLink
                    to="/membership"
                    className="hidden md:flex min-w-fit rounded-full border border-white/20 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]"
                >
                    Join Now
                </NavLink>



                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={28} />
                </button>
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/90 z-50 transition-opacity duration-300 md:hidden
                ${isOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen w-72 bg-zinc-950 border-r border-white/10 z-50
                transform transition-transform duration-300 ease-in-out md:hidden
                ${isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <h2 className="text-white font-bold text-xl">
                        Menu
                    </h2>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white"
                    >
                        <X size={28} />
                    </button>
                </div>

                <div className="flex flex-col p-6 gap-8 text-white/40">
                    {routes
                        .filter((route) => route.showInNav)
                        .map((route) => (
                            <NavLink
                                key={route.path}
                                to={route.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `relative inline-block px-2 py-1 transition-colors duration-300
                                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full
                                    ${isActive ? "text-white after:w-full" : "text-white"}`
                                }
                            >
                                {route.name}
                            </NavLink>
                        ))}
                    <NavLink
                        to="/membership"
                        className="flex items-center justify-center rounded-full border border-white/20 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]"
                    >
                        Join Now
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;