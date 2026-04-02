import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram, Behance } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-display font-black tracking-tighter mb-2 uppercase">Muhammad <span className="text-brand-blue">Umer</span></h3>
          <p className="text-gray-400 text-sm max-w-xs">Senior 2D Animator & Motion Designer based in Karachi, Pakistan.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="mailto:muhammadumershabih@gmail.com" className="hover:text-brand-blue transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
            <Behance className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm font-bold uppercase tracking-widest mb-2">Contact Me</p>
          <div className="flex items-center justify-center md:justify-end gap-2 text-gray-400 text-xs">
            <MapPin className="w-3 h-3" />
            <span>PIB Colony, Karachi, Pakistan</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500">
        <p>© {new Date().getFullYear()} Muhammad Umer. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}