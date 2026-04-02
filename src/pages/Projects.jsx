import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Play } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("Animations");

  const categories = ["Animations"];

  const projects = [
    {
      id: 1,
      title: "Oreo Brand",
      category: "Animations",
      embedUrl: "https://www.behance.net/embed/project/245108345?ilo0=1",
      behanceUrl: "https://www.behance.net/gallery/245108345/Oreo",
    },
    {
      id: 2,
      title: "TUC Brand",
      category: "Animations",
      embedUrl: "https://www.behance.net/embed/project/242080387?ilo0=1",
      behanceUrl: "https://www.behance.net/gallery/242080387/TUC",
    },
    {
      id: 3,
      title: "Spotify",
      category: "Animations",
      embedUrl: "https://www.behance.net/embed/project/241789743?ilo0=1",
      behanceUrl: "https://www.behance.net/gallery/241789743/Spotify",
    },
    {
      id: 4,
      title: "DREAMTO",
      category: "Animations",
      embedUrl: "https://www.behance.net/embed/project/234347109?ilo0=1",
      behanceUrl: "https://www.behance.net/gallery/234347109/DREAMTO",
    },
    {
      id: 5,
      title: "McDonald's",
      category: "Animations",
      embedUrl: "https://www.behance.net/embed/project/233506297?ilo0=1",
      behanceUrl: "https://www.behance.net/gallery/233506297/McDonalds",
    },
    {
      id: 6,
      title: "Kingtox",
      category: "Animations",
      embedUrl: "https://www.behance.net/embed/project/219046293?ilo0=1",
      behanceUrl: "https://www.behance.net/gallery/219046293/Kingtox",
    },
    {
      id: 7,
      title: "KRONE",
      category: "Animations",
      embedUrl: "https://www.behance.net/embed/project/211855881?ilo0=1",
      behanceUrl: "https://www.behance.net/gallery/211855881/KRONE",
    },
    {
      id: 8,
      title: "Engro",
      category: "Animations",
      embedUrl: "https://www.behance.net/embed/project/221028855?ilo0=1",
      behanceUrl: "https://www.behance.net/gallery/221028855/Engro",
    },
    {
      id: 9,
      title: "Stay Green",
      category: "Animations",
      embedUrl: "https://www.behance.net/embed/project/234919057?ilo0=1",
      behanceUrl: "https://www.behance.net/gallery/234919057/Stay-Green",
    },
    {
      id: 10,
      title: "Quice",
      category: "Animations",
      embedUrl: "https://www.behance.net/embed/project/160876375?ilo0=1",
      behanceUrl: "https://www.behance.net/gallery/160876375/Quice",
    },
    {
      id: 11,
      title: "National Foods",
      category: "Animations",
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445135386613325824?compact=1",
      behanceUrl: "https://www.linkedin.com/feed/",
    },
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white pt-32">
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[12vw] font-display font-black text-brand-black leading-none uppercase tracking-tighter"
          >
            PROJECTS<span className="text-brand-blue">.</span>
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0, rotate: 5 }}
            animate={{ opacity: 0.1, rotate: 5 }}
            className="absolute -top-10 right-0 text-8xl md:text-[15vw] font-brush text-brand-black pointer-events-none"
          >
            Works
          </motion.span>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-display text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === cat ? "bg-brand-blue text-white shadow-lg" : "bg-gray-50 text-brand-black hover:bg-gray-100"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="bg-gray-50 flex items-center justify-center p-4">
                  <iframe 
                    src={project.embedUrl + (project.embedUrl.includes('?') ? '&' : '?') + 'autoplay=1'}
                    className="border-0"
                    style={{ height: '300px', width: '100%', maxWidth: '450px', objectFit: 'cover' }}
                    allowFullScreen
                    loading="lazy"
                    title={project.title}
                    autoPlay
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-display font-black text-brand-black uppercase tracking-tighter">{project.title}</h3>
                    </div>
                    <a 
                      href={project.behanceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-50 p-3 rounded-2xl text-brand-black group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
