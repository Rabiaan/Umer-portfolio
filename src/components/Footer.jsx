import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin } from "lucide-react";

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
          <a href="https://www.linkedin.com/in/muhammad-umer-5378a8242/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.behance.net/umershabih" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
              <path d="M22 7h-7v.6h7V7zm-7.016 4.382c0-.441.04-.847.121-1.218a2.9 2.9 0 0 1 .387-1.008 2.506 2.506 0 0 1 .71-.726 2.052 2.052 0 0 1 1.088-.306c.404 0 .759.081 1.066.242.305.161.564.387.773.677.21.29.356.63.436 1.017.082.387.121.806.121 1.258h-4.702zm4.783 1.371c-.017.419-.089.79-.218 1.113-.13.322-.315.597-.557.822-.24.226-.54.395-.895.508-.354.113-.766.17-1.233.17-.597 0-1.114-.113-1.549-.339a2.766 2.766 0 0 1-1.04-1.008 3.541 3.541 0 0 1-.509-2.613c0-.5.064-.976.194-1.428.13-.451.347-.847.653-1.185a3.102 3.102 0 0 1 1.121-.774 3.916 3.916 0 0 1 1.589-.282c.5 0 .935.073 1.306.218.37.145.686.355.944.629.259.274.451.605.58.992.13.387.194.831.194 1.331h.001v.784h-5.461c0 .403.04.75.121 1.04.081.29.21.532.387.726.178.194.404.339.678.436a2.016 2.016 0 0 0 1.952-.303c.178-.13.323-.274.436-.432l1.25.758zM8.3 8.161c.468 0 .863.065 1.185.194.323.129.589.314.798.556.21.242.363.532.46.871.097.339.145.718.145 1.137 0 .436-.057.823-.17 1.161a2.808 2.808 0 0 1-.499.895 2.502 2.502 0 0 1-.823.63 2.88 2.88 0 0 1-1.137.218H4.637V8.161H8.3zm.451 5.92c.5 0 .911-.081 1.234-.242.323-.161.589-.387.798-.677.21-.29.355-.637.436-1.04.08-.403.121-.847.121-1.33 0-.468-.04-.887-.121-1.258a2.593 2.593 0 0 1-.42-.968c-.144-.242-.37-.427-.677-.556-.306-.129-.71-.194-1.21-.194H4.637v6.265h4.114zM0 3.75V20.25h11.25c.677 0 1.291-.081 1.839-.242.548-.161 1.008-.411 1.379-.75a3.42 3.42 0 0 0 .887-1.322c.194-.532.29-1.161.29-1.887 0-.58-.065-1.105-.194-1.573a4.114 4.114 0 0 0-.556-1.258 4.293 4.293 0 0 0-1-.968c-.419-.29-.911-.5-1.476-.629.419-.145.774-.355 1.064-.629a3.09 3.09 0 0 0 .734-.944 3.018 3.018 0 0 0 .395-1.185c.048-.419.073-.863.073-1.33 0-.677-.073-1.274-.218-1.79a3.844 3.844 0 0 0-.645-1.371 3.535 3.535 0 0 0-1.121-.92c-.452-.258-1-.387-1.645-.387H0zm12 5.097c0 .484-.04.91-.121 1.282a2.801 2.801 0 0 1-.387.976 2.373 2.373 0 0 1-.71.693c-.282.178-.63.266-1.04.266H4.637V6.032h3.403c.484 0 .887.065 1.21.194.323.129.58.314.774.556.194.242.339.532.436.871s.145.702.145 1.094l-.005.107z" />
            </svg>
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