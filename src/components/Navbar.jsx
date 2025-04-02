import { useEffect } from "react";
import {Link} from "react-scroll";


export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,.6)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link 
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    className="font-mono text-xl tracking-widest text-white hover:cursor-pointer uppercase ">    
                        Tonic Audio
                    </Link>

                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8 ">
                        <Link 
                        to = "home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50} 
                        activeClass="text-purple-light border-b "
                        className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer hover:border-b uppercase"
                        >
                            Home
                        </Link>

                        <Link 
                        to = "about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50} 
                        activeClass="text-purple-light border-b"
                        className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer hover:border-b uppercase"
                        >
                            About
                        </Link>

                        <Link 
                        to = "projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50} 
                        activeClass="text-purple-light border-b"
                        className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer hover:border-b uppercase"
                        >
                            Projects
                        </Link>

                        <Link 
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="bg-purple-dark text-white py-1 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
                        >
                            Download
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}