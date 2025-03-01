import { useState } from "react";
import { Cake, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/");
    };

    return (
        <motion.nav
            className="w-full bg-white shadow-md fixed top-0 left-0 z-50"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="crsl" smooth={true} duration={500} className="flex cursor-pointer items-center gap-2 text-lg font-bold justify-center">
                    <Cake className="w-8 h-8" />
                    <span>Meghana Jugunta</span>
                </Link>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
                <div className="hidden md:flex gap-5">
                    <Link to="firstThings" smooth={true} duration={500} className="text-gray-700 cursor-pointer hover:text-black font-semibold transition-all">
                        First Things
                    </Link>
                    <Link to="memories" smooth={true} duration={500} className="text-gray-700 cursor-pointer hover:text-black font-semibold transition-all">
                        Memories
                    </Link>
                    <Button className="cursor-pointer" onClick={handleLogout}>Logout</Button>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden flex flex-col items-center bg-white py-4 space-y-3 shadow-lg"
                >
                    <Link to="firstThings" smooth={true} duration={500} className="text-gray-700 cursor-pointer hover:text-black font-semibold transition-all" onClick={() => setIsOpen(false)}>
                        First Things
                    </Link>
                    <Link to="memories" smooth={true} duration={500} className="text-gray-700 cursor-pointer hover:text-black font-semibold transition-all" onClick={() => setIsOpen(false)}>
                        Memories
                    </Link>
                    <Button className="cursor-pointer" onClick={handleLogout}>Logout</Button>
                </motion.div>
            )}
        </motion.nav>
    );
}
