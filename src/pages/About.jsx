import { motion } from "motion/react";
import { Award, Heart, Coffee, Zap, Palette, Film, Camera, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-32">
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[12vw] font-display font-black text-brand-black leading-none uppercase tracking-tighter"
          >
            ABOUT ME<span className="text-brand-blue">.</span>
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 0.1, rotate: -5 }}
            className="absolute -top-10 right-0 text-8xl md:text-[15vw] font-brush text-brand-black pointer-events-none"
          >
            Profile
          </motion.span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/images/rabiaan.jpeg" 
              alt="Workspace" 
              className="w-full rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-brand-blue text-white p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center rotate-12">
              <span className="text-4xl font-display font-black">5+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest leading-tight">Years of Experience</span>
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-black text-brand-black uppercase tracking-tighter">
              Senior 2D <span className="text-brand-blue">Animator.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              I'm <strong>Muhammad Umer</strong>, a Creative 2D Animator & Motion Designer with 5 years of experience in design, animation, and visual storytelling. I specialize in motion graphics, color grading, and AI-assisted workflows to deliver stunning visual content.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently pursuing a B.A. in Visual Studies at Karachi University. Passionate about learning 3D and pushing creative boundaries to deliver exceptional results for clients worldwide.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-2xl text-brand-blue">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-black uppercase text-sm">Fast Learner</h4>
                  <p className="text-xs text-gray-500">Always learning new tools</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-2xl text-brand-blue">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-black uppercase text-sm">Passionate</h4>
                  <p className="text-xs text-gray-500">Dedicated to excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="py-20 border-t border-gray-100">
          <h3 className="text-4xl font-display font-black text-brand-black mb-16 uppercase tracking-tighter text-center">
            TECHNICAL <span className="text-brand-blue">SKILLS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all duration-500 group"
            >
              <Film className="w-10 h-10 text-brand-blue mb-4 group-hover:text-white" />
              <h4 className="text-xl font-display font-black mb-4 uppercase tracking-tighter">2D Animation</h4>
              <ul className="text-sm text-gray-500 group-hover:text-white/80 space-y-2">
                <li>Motion Graphics</li>
                <li>Character Animation</li>
                <li>Explainer Videos</li>
                <li>TVC Production</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all duration-500 group"
            >
              <Palette className="w-10 h-10 text-brand-blue mb-4 group-hover:text-white" />
              <h4 className="text-xl font-display font-black mb-4 uppercase tracking-tighter">Design</h4>
              <ul className="text-sm text-gray-500 group-hover:text-white/80 space-y-2">
                <li>Graphic Design</li>
                <li>Brand Identity</li>
                <li>Visual Composition</li>
                <li>Typography</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all duration-500 group"
            >
              <Camera className="w-10 h-10 text-brand-blue mb-4 group-hover:text-white" />
              <h4 className="text-xl font-display font-black mb-4 uppercase tracking-tighter">Post-Production</h4>
              <ul className="text-sm text-gray-500 group-hover:text-white/80 space-y-2">
                <li>Color Grading</li>
                <li>Video Editing</li>
                <li>VFX</li>
                <li>Sound Design</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all duration-500 group"
            >
              <Sparkles className="w-10 h-10 text-brand-blue mb-4 group-hover:text-white" />
              <h4 className="text-xl font-display font-black mb-4 uppercase tracking-tighter">AI Tools</h4>
              <ul className="text-sm text-gray-500 group-hover:text-white/80 space-y-2">
                <li>Midjourney</li>
                <li>Google Whisk</li>
                <li>Runway ML</li>
                <li>AI-Assisted Design</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="py-20 border-t border-gray-100">
          <h3 className="text-4xl font-display font-black text-brand-black mb-16 uppercase tracking-tighter text-center">
            WORK <span className="text-brand-blue">EXPERIENCE</span>
          </h3>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-[3rem] hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h4 className="text-2xl font-display font-black text-brand-black uppercase">Senior 2D Animator</h4>
                  <p className="text-brand-blue font-bold">Saatchi</p>
                </div>
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">2024 – Present</span>
              </div>
              <ul className="text-gray-600 space-y-2 list-disc pl-4">
                <li>Work as a 2D animator and editor</li>
                <li>Created eye-catching, engaging animation campaigns</li>
                <li>Worked with brands from local to global (Spotify, McDonald's)</li>
                <li>Delivered high-quality, time-efficient projects using AI-based tools</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-10 rounded-[3rem] hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h4 className="text-2xl font-display font-black text-brand-black uppercase">Designer & Animator</h4>
                  <p className="text-brand-blue font-bold">Seven Senses</p>
                </div>
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">2021 – 2024</span>
              </div>
              <ul className="text-gray-600 space-y-2 list-disc pl-4">
                <li>Created animated videos, motion graphics, and digital content</li>
                <li>Worked for clients across multiple industries</li>
                <li>Worked on many TVCs</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-10 rounded-[3rem] hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h4 className="text-2xl font-display font-black text-brand-black uppercase">Junior Graphic Designer</h4>
                  <p className="text-brand-blue font-bold">Aureus</p>
                </div>
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">2020 – 2021</span>
              </div>
              <ul className="text-gray-600 space-y-2 list-disc pl-4">
                <li>Worked as a junior graphic designer</li>
                <li>Created various design materials for clients</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="py-20 border-t border-gray-100">
          <h3 className="text-4xl font-display font-black text-brand-black mb-16 uppercase tracking-tighter text-center">
            EDUCATION & <span className="text-brand-blue">CERTIFICATIONS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-display font-black text-brand-black mb-8 uppercase tracking-tighter flex items-center gap-3">
                <Award className="w-6 h-6 text-brand-blue" />
                Education
              </h4>
              <div className="bg-gray-50 p-8 rounded-[2.5rem]">
                <h5 className="text-xl font-bold text-brand-black mb-2">B.A. in Visual Studies</h5>
                <p className="text-gray-600 mb-2">University of Karachi</p>
                <p className="text-brand-blue font-bold text-sm">Expected Graduation: 2025</p>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-display font-black text-brand-black mb-8 uppercase tracking-tighter flex items-center gap-3">
                <Award className="w-6 h-6 text-brand-blue" />
                Software Skills
              </h4>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-[2rem] hover:shadow-lg transition-all">
                  <h5 className="font-bold text-brand-black">Adobe After Effects</h5>
                  <p className="text-xs text-gray-500">Advanced animation and motion graphics</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-[2rem] hover:shadow-lg transition-all">
                  <h5 className="font-bold text-brand-black">Adobe Photoshop</h5>
                  <p className="text-xs text-gray-500">Graphic design and image editing</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-[2rem] hover:shadow-lg transition-all">
                  <h5 className="font-bold text-brand-black">Adobe Premiere Pro</h5>
                  <p className="text-xs text-gray-500">Video editing and post-production</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-[2rem] hover:shadow-lg transition-all">
                  <h5 className="font-bold text-brand-black">Canva</h5>
                  <p className="text-xs text-gray-500">Design and quick prototyping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
