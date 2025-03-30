import { RevealOnScroll } from "../RevealOnScroll";
import {Link} from "react-scroll";
import { FaDownload } from "react-icons/fa";

export const ResumeLink = () => {
    const handleClick = (e) => {
      e.preventDefault();
      
      // Open in new tab
      window.open('/Evan_Fraustro_Resume.pdf', '_blank', 'noopener,noreferrer');
      
      // Create a temporary anchor to trigger download
      const downloadLink = document.createElement('a');
      downloadLink.href = '/Evan_Fraustro_Resume.pdf';
      downloadLink.download = 'Evan_Fraustro_Resume.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
  
    return (
      <a 
        href="/Evan_Fraustro_Resume.pdf"
        onClick={handleClick}
        aria-label="View and Download Resume"
        className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,46,0.2)] hover:bg-red-500/10 hover:text-white flex items-center"
      >
        Resume
        <FaDownload className="ml-2" />
      </a>
    );
  };
  



export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent leading-right ">
                        Hi, I'm Evan Fraustro
                    </h1>
                    <div className="relative flex items-center justify-center space-x-8">
                        <h2 className="text-2xl md:text-4xl font-medium text-red-400 mb-8 ">
                            Houston, TX 
                        </h2>
                        <h2 className="text-2xl md:text-4xl font-medium text-gray-400 mb-8">
                            Software Developer
                        </h2>
                    </div>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Lovely to meet you! I am Evan, a Junior at the University of Houston studying Computer Science.
                    <br/>Currently I am working on a few projects and looking for internships to expand my knowledge and experience.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link 
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            View Projects
                        </Link>
                        <ResumeLink/>
                    </div>
                </div>
            </RevealOnScroll>
            
        </section>
    );
}