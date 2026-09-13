import { useState } from "react";
import logo from "../assets/logo-text.png";
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-2xl">
                        ☰
                    </button> 
            <div className="flex items-center gap-2">
                <img src={logo} alt="Dev Stack Logo" className="h-10 w-auto" />   

            </div>
            <div className="hidden md:block">
                <ul className="flex items-center gap-7 text-sm font-medium text-gray-600">
                    <li><a className="text-pink-500 transition hover:text-pink-600"  href="#home">Home</a></li>
                    <li><a className="transition hover:text-gray-900" href="#Technologies">Technologies</a></li>
                    <li><a className="transition hover:text-gray-900" href="#Projects">Projects</a></li>
                    <li><a className="transition hover:text-gray-900" href="#about">About</a></li>
                    <li><a className="transition hover:text-gray-900" href="#contact">Contact</a></li>
                </ul>
            </div>
            {isMenuOpen && (
             <div className="absolute top-full left-4 bg-white md:hidden">
               <ul className="flex flex-col gap-3 p-4 text-sm font-medium text-gray-600">
                   <li><a href="#home">Home</a></li>
                   <li><a href="#technologies">Technologies</a></li>
                   <li><a href="#projects">Projects</a></li>
                   <li><a href="#about">About</a></li>
                   <li><a href="#contact">Contact</a></li>
               </ul>
            </div>
            )}
            <div>
                <ul className="flex items-center gap-4">
                    <li><a href="#signin" className="font-medium text-gray-700 transition hover:text-pink-500">Sign In</a></li>
                    <li><a href="#signup" className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 px-5 py-2 text-white">Sign Up</a></li>
                </ul>
            </div>
        </div> 
    </nav>
  );
}

export default Navbar;
