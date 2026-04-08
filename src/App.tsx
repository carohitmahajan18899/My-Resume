/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Linkedin, 
  Github, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  BarChart3, 
  ShieldCheck, 
  Leaf,
  Menu,
  X,
  Cpu,
  Brain,
  Globe,
  LineChart,
  FileSpreadsheet,
  Award,
  BookOpen
} from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Qualifications", href: "#qualifications" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    role: "CA Article",
    company: "RVN Associates",
    period: "Present",
    current: true,
    description: "Focusing on statutory audits, tax compliance, and developing expertise in ESG reporting frameworks."
  },
  {
    role: "CA Article",
    company: "Nimish Nagpal & Co.",
    period: "Nov 2022 - Nov 2025",
    current: false,
    description: "Handled diverse audit assignments, internal controls evaluation, and financial statement preparation."
  }
];

const EDUCATION = [
  {
    title: "CA Finalist",
    status: "Currently Pursuing",
    category: "Core Finance",
    icon: <GraduationCap className="w-6 h-6 text-navy-900" />
  },
  {
    title: "CA Inter",
    status: "Cleared",
    category: "Core Finance",
    icon: <CheckCircle2 className="w-6 h-6 text-forest-600" />
  },
  {
    title: "CA Foundation",
    status: "Cleared",
    category: "Core Finance",
    icon: <CheckCircle2 className="w-6 h-6 text-forest-600" />
  },
  {
    title: "B.Com",
    status: "Completed",
    category: "Core Finance",
    icon: <GraduationCap className="w-6 h-6 text-navy-900" />
  },
  {
    title: "12th Grade",
    status: "Completed",
    category: "Schooling",
    icon: <GraduationCap className="w-6 h-6 text-slate-400" />
  },
  {
    title: "10th Grade",
    status: "Completed",
    category: "Schooling",
    icon: <GraduationCap className="w-6 h-6 text-slate-400" />
  }
];

const SPECIALIZED_TRAINING = [
  {
    title: "GRI Professional Certification",
    status: "Pursuing",
    description: "Global Reporting Initiative standards for sustainability reporting.",
    icon: <Leaf className="w-6 h-6 text-forest-600" />
  },
  {
    title: "AI & Environmental Sustainability",
    status: "EY & Microsoft",
    description: "Exploring the intersection of artificial intelligence and green initiatives.",
    icon: <Globe className="w-6 h-6 text-forest-600" />
  },
  {
    title: "AI Skills Passport",
    status: "EY Certified",
    description: "Foundational and advanced AI competencies for professional excellence.",
    icon: <Brain className="w-6 h-6 text-navy-900" />
  },
  {
    title: "Financial Markets",
    status: "Yale University",
    description: "Comprehensive understanding of financial institutions and markets.",
    icon: <LineChart className="w-6 h-6 text-forest-600" />
  },
  {
    title: "Pre-MBA Statistics",
    status: "IIM Ahmedabad",
    description: "Advanced statistical methods and data interpretation.",
    icon: <BarChart3 className="w-6 h-6 text-navy-900" />
  },
  {
    title: "Fundamentals of Data Analysis",
    status: "CFI Certified",
    description: "Mastering data analysis techniques using Microsoft Excel.",
    icon: <FileSpreadsheet className="w-6 h-6 text-forest-600" />
  },
  {
    title: "ICAI Mandatory Courses",
    status: "Completed",
    description: "ICITSS (IT & Orientation) and AICITSS (Advanced IT & MCS).",
    icon: <Award className="w-6 h-6 text-navy-900" />
  },
  {
    title: "BRSR Training (ICAI)",
    status: "Completed",
    description: "Business Responsibility and Sustainability Reporting framework.",
    icon: <ShieldCheck className="w-6 h-6 text-forest-600" />
  },
  {
    title: "Data Analytics Basics",
    status: "Google Certified",
    description: "Proficiency in Excel and Power BI for data-driven insights.",
    icon: <BarChart3 className="w-6 h-6 text-navy-900" />
  }
];

const ROADMAP = [
  { title: "ESG Auditor", type: "Target Role" },
  { title: "Due Diligence Professional", type: "Target Role" },
  { title: "Forensic Auditor", type: "Target Role" },
  { title: "ICAI Forensic Accounting & Fraud Detection (FAFD)", type: "Certification" },
  { title: "Certified Due Diligence Professional", type: "Certification" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-forest-600 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight text-navy-900"
          >
            RM<span className="text-forest-600">.</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-navy-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-navy-800 transition-all shadow-lg shadow-navy-900/10">
              Resume
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-navy-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-600"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-600/10 text-forest-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-600"></span>
                </span>
                Available for Opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-navy-900 leading-[1.1] mb-6">
                Rohit <span className="text-forest-600">Mahajan</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8 leading-relaxed">
                CA Finalist | Aspiring ESG & Forensic Auditor | Data Analytics Enthusiast
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4" /> Amritsar, Punjab, India
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Mail className="w-4 h-4" /> carohitmahajan18899@gmail.com
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Phone className="w-4 h-4" /> 7888976982
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-navy-800 transition-all shadow-xl shadow-navy-900/20 group">
                  Download Resume <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                </button>
                <a href="#contact" className="flex items-center justify-center gap-2 bg-white text-navy-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all">
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-navy-900 to-forest-900 p-1 shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-[1.4rem] bg-slate-900/40 backdrop-blur-3xl flex items-center justify-center relative">
                  {/* Abstract Data Viz Graphic */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <BarChart3 className="w-48 h-48 text-white" />
                  </div>
                  <div className="z-10 text-center p-8">
                    <div className="text-6xl font-black text-white/10 mb-4">ESG</div>
                    <div className="text-4xl font-bold text-forest-400 mb-2">Audit</div>
                    <div className="text-xl text-slate-300">Data Analytics</div>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest-600 flex items-center justify-center text-white">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Focus Area</div>
                    <div className="text-navy-900 font-bold">Forensic Auditing</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-forest-600 uppercase tracking-[0.2em] mb-4">About Me</h2>
            <h3 className="text-4xl font-bold text-navy-900 mb-8">Bridging Finance with Sustainability & Data</h3>
            <p className="text-xl text-slate-600 leading-relaxed">
              A dedicated CA Finalist with a strong foundation in traditional auditing, currently pivoting towards the future of corporate accountability. Passionate about integrating data analytics with sustainability reporting and fraud detection. My goal is to leverage my financial expertise as a specialized ESG Auditor, Due Diligence expert, and Forensic Auditor.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-sm font-bold text-forest-600 uppercase tracking-[0.2em] mb-4">Professional Journey</h2>
          <h3 className="text-4xl font-bold text-navy-900 mb-16 text-center md:text-left">Experience</h3>
          
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-12 relative pl-8 md:pl-12"
              >
                <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-slate-50 ${exp.current ? "bg-forest-600" : "bg-navy-900"}`}></div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-navy-900">{exp.role}</h4>
                      <p className="text-slate-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-slate-400">{exp.period}</span>
                      {exp.current && (
                        <span className="px-3 py-1 bg-forest-600/10 text-forest-600 text-xs font-bold rounded-full">Present</span>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-500 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-forest-400 uppercase tracking-[0.2em] mb-4">Expertise</h2>
            <h3 className="text-4xl font-bold mb-4">Education & Qualifications</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">A blend of core financial excellence and future-ready specialized training.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {EDUCATION.map((edu, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  {edu.icon}
                </div>
                <h4 className="text-lg font-bold mb-1">{edu.title}</h4>
                <p className="text-forest-400 text-sm font-bold mb-4">{edu.status}</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider">{edu.category}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SPECIALIZED_TRAINING.map((train, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-3xl border border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-forest-600/20 flex items-center justify-center mb-6">
                  {train.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{train.title}</h4>
                <div className="inline-block px-3 py-1 rounded-full bg-forest-600/20 text-forest-400 text-xs font-bold mb-4">
                  {train.status}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{train.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-forest-600 uppercase tracking-[0.2em] mb-4">Future Vision</h2>
              <h3 className="text-4xl font-bold text-navy-900 mb-8">Roadmap & Ambitions</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I am actively working towards becoming a leader in the intersection of finance and sustainability. My roadmap includes specialized certifications that bridge the gap between traditional accounting and modern corporate responsibility.
              </p>
              <div className="space-y-4">
                {ROADMAP.filter(r => r.type === "Target Role").map((role, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-forest-600"></div>
                    <span className="font-bold text-navy-900">{role.title}</span>
                    <span className="ml-auto text-xs font-bold text-slate-400 uppercase tracking-wider">Target Role</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-forest-400" /> Planned Certifications
              </h4>
              <div className="space-y-6">
                {ROADMAP.filter(r => r.type === "Certification").map((cert, i) => (
                  <div key={i} className="relative pl-8 border-l border-white/20">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-forest-400"></div>
                    <h5 className="font-bold mb-1">{cert.title}</h5>
                    <p className="text-slate-400 text-sm">In Progress / Planned</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm text-slate-400 italic">
                  "The future of auditing lies in the ability to interpret non-financial data with the same rigor as financial statements."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-20 bg-navy-900 text-white">
                <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
                <p className="text-slate-400 mb-12 text-lg">
                  Interested in discussing ESG auditing, forensic accounting, or data analytics? Reach out through any of these channels.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-forest-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email</div>
                      <div className="font-bold">carohitmahajan18899@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-forest-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Phone</div>
                      <div className="font-bold">+91 7888976982</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-forest-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</div>
                      <div className="font-bold">Amritsar, Punjab, India</div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-white/10 flex gap-6">
                  <a href="https://www.linkedin.com/in/ca-rohit-712388334/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-forest-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-forest-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-forest-600 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-12 md:p-20">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy-900 uppercase tracking-wider">Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-forest-600 focus:ring-1 focus:ring-forest-600 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy-900 uppercase tracking-wider">Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-forest-600 focus:ring-1 focus:ring-forest-600 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 uppercase tracking-wider">Subject</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-forest-600 focus:ring-1 focus:ring-forest-600 outline-none transition-all" placeholder="Project Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 uppercase tracking-wider">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-forest-600 focus:ring-1 focus:ring-forest-600 outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
                  </div>
                  <button className="w-full bg-forest-600 text-white py-4 rounded-xl font-bold hover:bg-forest-700 transition-all shadow-lg shadow-forest-600/20">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tight text-navy-900">
            RM<span className="text-forest-600">.</span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Rohit Mahajan. All rights reserved.
          </div>
          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-navy-900 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
