import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { Briefcase, GraduationCap, User, Award, Palette, Film, Camera, Sparkles } from "lucide-react";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 20, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const textX = useTransform(x, (val) => val * 0.02);
  const textY = useTransform(y, (val) => val * 0.02);
  const imageX = useTransform(x, (val) => -val * 0.03);
  const imageY = useTransform(y, (val) => -val * 0.03);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* PORTFOLIO Text - behind image, solid black */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
          style={{ x: textX, y: textY }}
        >
          <h1 className="text-[15vw] font-display font-black text-brand-black leading-none uppercase tracking-tighter">
            PORTFOLIO
          </h1>
        </motion.div>

        {/* Main Portrait - above text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{ x: imageX, y: imageY }}
        >
          <img 
            src="/images/rabiaan.jpeg" 
            alt="Muhammad Umer" 
            className="w-full max-w-md rounded-[10rem]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* PORTFOLIO Text outline - above image */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-20"
          style={{ x: textX, y: textY }}
        >
          <h1 
            className="text-[15vw] font-display font-black leading-none uppercase tracking-tighter"
            style={{ 
              WebkitTextStroke: '2px black',
              color: 'transparent'
            }}
          >
            PORTFOLIO
          </h1>
          {/* Handwritten "My" */}
          <span className="absolute top-8 left-1/2 -translate-x-1/2 text-6xl md:text-[8rem] font-brush text-brand-black">
            My
          </span>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-light mb-8"
            >
              My Name is <span className="text-brand-blue font-medium">Muhammad Umer</span> and I am a
            </motion.p>
            
            <div className="relative">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-7xl md:text-[14rem] font-display font-black text-brand-black leading-[0.8] uppercase tracking-tighter"
              >
                Senior 2D<br className="md:hidden" />
              </motion.h2>
              
              {/* About Me Section */}
              <div className="mt-6 md:mt-8 max-w-md">
                <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                  About <span className="text-brand-blue">Me</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Creative 2D Animator & Motion Designer with 5 years of experience in design, animation, and visual storytelling. Skilled in motion graphics, color grading, and AI-assisted workflows. Passionate about learning 3D and pushing creative boundaries.
                </p>
              </div>
              
              <motion.span 
                initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: -8, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 right-24 md:right-48 text-6xl md:text-[10rem] font-brush text-brand-blue whitespace-nowrap z-20"
              >
                Animator.
              </motion.span>
            </div>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Work Experiences - Left Aligned */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-brand-blue" />
                Work Experiences
              </h4>
              <div className="space-y-8">
                <div className="group">
                  <h5 className="text-brand-blue font-bold text-lg mb-1">Senior 2D Animator</h5>
                  <p className="font-bold text-sm mb-2">Saatchi <span className="text-gray-400 font-normal">(2024–present)</span></p>
                  <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                    <li>Work as a 2D animator and editor</li>
                    <li>Created eye-catching, engaging animation campaigns</li>
                    <li>Worked with brands from local to global (Spotify, McDonald's)</li>
                    <li>Delivered high-quality, time-efficient projects using AI-based tools</li>
                  </ul>
                </div>
                <div className="group">
                  <h5 className="text-brand-blue font-bold text-lg mb-1">Designer & Animator</h5>
                  <p className="font-bold text-sm mb-2">Seven Senses <span className="text-gray-400 font-normal">(2021–2024)</span></p>
                  <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                    <li>Created animated videos, motion graphics, and digital content</li>
                    <li>Worked for clients across multiple industries</li>
                    <li>Worked on many TVCs</li>
                  </ul>
                </div>
                <div className="group">
                  <h5 className="text-brand-blue font-bold text-lg mb-1">Junior Graphic Designer</h5>
                  <p className="font-bold text-sm mb-2">Aureus <span className="text-gray-400 font-normal">(2020–2021)</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills - Left Aligned */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <Award className="w-5 h-5 text-brand-blue" />
                Skills
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "2D Animation & Motion Graphics", icon: <Film className="w-4 h-4" />, color: "bg-purple-600" },
                  { name: "Graphic Design", icon: <Palette className="w-4 h-4" />, color: "bg-pink-500" },
                  { name: "Color Grading & Visual Composition", icon: <Camera className="w-4 h-4" />, color: "bg-orange-500" },
                  { name: "Video Editing", icon: <Film className="w-4 h-4" />, color: "bg-blue-500" },
                  { name: "AI-Assisted Design Tools", icon: <Sparkles className="w-4 h-4" />, color: "bg-cyan-500" },
                  { name: "Creative Concept Development", icon: <Sparkles className="w-4 h-4" />, color: "bg-green-500" },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 group">
                    <div className={`${skill.color} text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded shadow-sm group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Skills */}
            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <Award className="w-5 h-5 text-brand-blue" />
                Softwares
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "After Effects", color: "bg-purple-600" },
                  { name: "Photoshop", color: "bg-blue-500" },
                  { name: "Premiere Pro", color: "bg-purple-500" },
                  { name: "Canva", color: "bg-teal-500" },
                ].map((software) => (
                  <div key={software.name} className="flex items-center gap-3 group">
                    <div className={`${software.color} text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded shadow-sm group-hover:scale-110 transition-transform`}>
                      <Palette className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{software.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Info & Education - Left Aligned */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <User className="w-5 h-5 text-brand-blue" />
                Personal <span className="text-brand-blue">Info</span>
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Name :</span>
                  <span className="text-gray-500">Muhammad Umer</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Position :</span>
                  <span className="text-gray-500">Senior 2D Animator</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Location :</span>
                  <span className="text-gray-500">PIB Colony, Karachi, Pakistan</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-gray-50 pb-2">
                  <span className="font-bold">Email :</span>
                  <span className="text-gray-500 break-all">muhammadumershabih@gmail.com</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Phone :</span>
                  <span className="text-gray-500">0336 2083942</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-brand-blue" />
                Education
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-sm">B.A. in Visual Studies</p>
                  <p className="text-xs text-gray-500">University of Karachi</p>
                  <p className="text-xs text-brand-blue">Expected Graduation: 2025</p>
                </div>
              </div>
            </div>

            {/* AI Tools */}
            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-brand-blue" />
                AI Tools
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Midjourney</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Google Whisk</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Runway ML</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100 overflow-hidden">
        <div className="relative flex flex-col items-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-[15vw] font-brush text-brand-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
          >
            Projects
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-black text-brand-black relative z-10 uppercase tracking-tighter"
          >
            FEATURED WORK.
          </motion.h3>
        </div>

        {/* Bento Grid Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 - Heartstrings (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-brand-black rounded-[3rem] p-8 overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
              {/* Main Image */}
              <div className="lg:col-span-2 relative">
                <img 
                  src="/images/heartstrings.png" 
                  alt="Heartstrings" 
                  className="w-full h-64 lg:h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter">Heartstrings</h4>
                  <p className="text-brand-blue font-bold text-sm">2D Animation</p>
                </div>
                <p className="text-gray-400 text-sm">Animated content for various clients.</p>
                {/* Color Palette */}
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Color Palette</p>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#ff6b6b]" title="#ff6b6b"></div>
                    <div className="w-8 h-8 rounded-lg bg-[#4ecdc4]" title="#4ecdc4"></div>
                    <div className="w-8 h-8 rounded-lg bg-[#2c3e50]" title="#2c3e50"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 - Rabiaan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-[3rem] p-8 overflow-hidden group"
          >
            <div className="space-y-6">
              <img 
                src="/images/rabiaan.jpeg" 
                alt="Rabiaan" 
                className="w-full h-48 object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
              />
              <div>
                <h4 className="text-xl font-display font-black text-brand-black uppercase tracking-tighter">Rabiaan</h4>
                <p className="text-brand-blue font-bold text-sm">2D Animation</p>
              </div>
              <p className="text-gray-500 text-sm">Custom animation project.</p>
              {/* Color Palette */}
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Color Palette</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-lg bg-purple-600" title="#7b61ff"></div>
                  <div className="w-6 h-6 rounded-lg bg-pink-500" title="#4a9eff"></div>
                  <div className="w-6 h-6 rounded-lg bg-gray-900" title="#1f2937"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 - FrameGen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-[3rem] p-8 overflow-hidden group"
          >
            <div className="space-y-6">
              <img 
                src="/images/frame-gen.png" 
                alt="FrameGen" 
                className="w-full h-48 object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
              />
              <div>
                <h4 className="text-xl font-display font-black text-brand-black uppercase tracking-tighter">FrameGen</h4>
                <p className="text-brand-blue font-bold text-sm">Motion Graphics</p>
              </div>
              <p className="text-gray-500 text-sm">React Business Portfolio for marketing agency.</p>
              {/* Color Palette */}
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Color Palette</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#44362a]" title="#44362a"></div>
                  <div className="w-6 h-6 rounded-lg bg-[#d1b7a0]" title="#d1b7a0"></div>
                  <div className="w-6 h-6 rounded-lg bg-[#e4e1dc]" title="#e4e1dc"></div>
                  <div className="w-6 h-6 rounded-lg bg-[#0a0a0a]" title="#0a0a0a"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <a 
            href="/projects" 
            className="inline-block bg-brand-black text-white px-8 py-4 rounded-full font-display font-bold text-sm uppercase tracking-widest hover:bg-brand-blue transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </section>
    </div>
  );
}
