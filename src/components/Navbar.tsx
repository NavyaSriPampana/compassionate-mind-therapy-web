
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-semibold text-xl text-slate-800">
            Dr. Serena Blake
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-slate-600 hover:text-blue-600 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-blue-600 transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-600 hover:text-blue-600 transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-slate-600 hover:text-blue-600 transition-colors text-left"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 w-fit"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
