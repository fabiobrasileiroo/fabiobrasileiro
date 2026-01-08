"use client"
import { useState, useEffect } from 'react';
import { Code2, User2, Server, Wrench } from 'lucide-react';
import { ConfettiTitle } from './confettiTitle';
import { Description } from './Description';
import { AtSignIcon } from './ui/at-sign';
import { LinkedinIcon } from './ui/linkedin';
import { GithubIcon } from './ui/github';
import Navbar from './NavSection';
import { YoutubeIcon } from './ui/youtube';
import Experiencia from './Experiencia';
import Image from 'next/image';
import TerminalCommand from './TerminalCommand';
// import { TimelineDemo } from './TimeLine';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.timeline-item').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  // const projects = [
  //   {
  //     title: "E-Commerce Platform",
  //     description: "Full-stack shopping platform with React and Node.js",
  //     tech: ["React", "Node.js", "MongoDB", "Express"],
  //     link: "#"
  //   },
  //   {
  //     title: "Task Management App",
  //     description: "Real-time collaboration tool with websockets",
  //     tech: ["Vue.js", "Firebase", "Tailwind CSS"],
  //     link: "#"
  //   },
  //   {
  //     title: "AI Chat Interface",
  //     description: "Modern chat application with AI integration",
  //     tech: ["Next.js", "OpenAI API", "PostgreSQL"],
  //     link: "#"
  //   }
  // ];

  const timelineEvents = [
    {
      id: "event-1",
      year: "2023",
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Labs",
      description: "Led development of enterprise-scale applications using React and Node.js",
      skills: ["React", "Node.js", "AWS", "MongoDB"],
      icon: "🚀"
    },
    {
      id: "event-2",
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      description: "Developed and maintained multiple web applications for clients",
      skills: ["Vue.js", "Python", "PostgreSQL"],
      icon: "💻"
    },
    {
      id: "event-3",
      year: "2019 - 2021",
      title: "Frontend Developer",
      company: "WebCraft Studios",
      description: "Created responsive and interactive user interfaces",
      skills: ["React", "JavaScript", "CSS"],
      icon: "🎨"
    },
    {
      id: "event-4",
      year: "2018 - 2019",
      title: "Junior Developer",
      company: "StartUp Hub",
      description: "Began career working on various web development projects",
      skills: ["HTML", "CSS", "JavaScript"],
      icon: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a0f2e] text-white font-inter">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* bg-[url('https://upload.wikimedia.org/wikipedia/commons/0/0d/Great_Wave_off_Kanagawa2.jpg')] */}
        <div
          className="absolute inset-0 bg-[url('https://i.ibb.co/dJ6vC43/one-piece-monkey-d-luffy-hokusai-waves-wallpaper-preview.jpg')] bg-cover bg-center opacity-40 animate-[wave_15s_ease-in-out_infinite]"
          style={{ backgroundPosition: '50% 70%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e] via-transparent to-transparent" />
        <div className="z-10 mb-36 text-center px-4">
          <ConfettiTitle />
          {/* <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-50 to-cyan-100">
            Fábio Brasileiro
          </h1> */}
          {/* <p className="text-2xl text-[#8B9BB4] mb-8">Full Stack Developer</p> */}
          <Description />
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/fabiobrasileiroo" target='_blank' className="p-2 hover:text-cyan-50 transition-colors"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/fabiobrasileiro/" target='_blank' className="p-2  hover:text-cyan-50 transition-colors"><LinkedinIcon /></a>
            <a href="mailto:fabio.h591@gmail.com" className="p-2  hover:text-cyan-50 transition-colors"><AtSignIcon /></a>
            <a href="https://www.youtube.com/@fabiobrasileiroo" target='_blank' className="p-2  hover:text-cyan-50 transition-colors"><YoutubeIcon /></a>
          </div>
          <TerminalCommand />
        </div>
      </div>

      {/* Navigation */}
      {/* <Navbar /> */}
      {/* <div className="min-h-screen bg-[#1a0f2e] text-white font-inter"> */}
      {/* Navbar centralizado com estado controlado */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Seções controladas pelo estado */}
      {/* <main className="max-w-5xl mx-auto px-4 py-16">
          <section id="about" className={activeSection === 'about' ? 'block' : 'hidden'}>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p>Informações sobre mim.</p>
          </section>

          <section id="skills" className={activeSection === 'skills' ? 'block' : 'hidden'}>
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <p>Minhas habilidades.</p>
          </section>

          <section id="timeline" className={activeSection === 'timeline' ? 'block' : 'hidden'}>
            <h2 className="text-3xl font-bold mb-4">Timeline</h2>
            <p>Minha trajetória profissional.</p>
          </section>

          <section id="projects" className={activeSection === 'projects' ? 'block' : 'hidden'}>
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p>Meus projetos.</p>
          </section>
        </main> */}
      {/* </div> */}

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Timeline Section */}
        {/* <TimelineDemo /> */}
        <section className={activeSection === 'timeline' ? 'block' : 'hidden'}>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-[#2B4162] to-[#8B9BB4] transform -translate-x-1/2" />

            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                id={event.id}
                className={`timeline-item relative mb-16 opacity-0 ${isVisible[event.id] ? 'animate-fadeIn' : ''}`}
              >
                <div className={`flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#2B4162] rounded-full flex items-center justify-center z-10 shadow-lg transform hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{event.icon}</span>
                    </div>
                  </div>

                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`bg-[#2B4162]/20 rounded-2xl p-6 backdrop-blur-sm border border-[#2B4162]/30 hover:transform hover:scale-105 transition-all ${isVisible[event.id] ? (index % 2 === 0 ? 'animate-slideRight' : 'animate-slideLeft') : ''
                      }`}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-[#8B9BB4]">{event.title}</h3>
                        <span className="text-sm text-[#8B9BB4] bg-[#2B4162]/30 px-3 py-1 rounded-full">
                          {event.year}
                        </span>
                      </div>
                      <p className="text-[#8B9BB4] font-semibold mb-2">{event.company}</p>
                      <p className="text-[#8B9BB4] mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {event.skills.map((skill, i) => (
                          <span key={i} className="text-sm px-3 py-1 bg-[#2B4162]/30 rounded-full text-[#8B9BB4]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className={`${activeSection === 'skills' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <div className="bg-[#2B4162]/20 rounded-2xl p-8 backdrop-blur-sm border border-[#2B4162]/30 hover:transform hover:scale-105 transition-duration-300">
              <h3 className="text-2xl font-bold mb-6 text-[#8B9BB4] flex items-center gap-2">
                <Code2 className="text-[#4A90E2]" />
                Frontend
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'JavaScript', level: 95 },
                  { name: 'TypeScript', level: 90 },
                  { name: 'Next.js', level: 90 },
                  { name: 'Angular', level: 85 },
                  { name: 'React Native', level: 85 }
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#8B9BB4]">{skill.name}</span>
                      <span className="text-[#4A90E2]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#2B4162]/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#4A90E2] to-[#63B3ED] rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend & Cloud */}
            <div className="bg-[#2B4162]/20 rounded-2xl p-8 backdrop-blur-sm border border-[#2B4162]/30 hover:transform hover:scale-105 transition-duration-300">
              <h3 className="text-2xl font-bold mb-6 text-[#8B9BB4] flex items-center gap-2">
                <Server className="text-[#68D391]" />
                Backend & Cloud
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Node.js', level: 90 },
                  { name: 'AWS', level: 85 },
                  { name: 'REST APIs', level: 90 },
                  { name: 'Database Design', level: 85 },
                  { name: 'Microservices', level: 80 }
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#8B9BB4]">{skill.name}</span>
                      <span className="text-[#68D391]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#2B4162]/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#68D391] to-[#9AE6B4] rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="bg-[#2B4162]/20 rounded-2xl p-8 backdrop-blur-sm border border-[#2B4162]/30 hover:transform hover:scale-105 transition-duration-300">
              <h3 className="text-2xl font-bold mb-6 text-[#8B9BB4] flex items-center gap-2">
                <Wrench className="text-[#F6AD55]" />
                DevOps & Tools
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'GNU/Linux', level: 90 },
                  { name: 'Git', level: 90 },
                  { name: 'Docker', level: 85 },
                  { name: 'CI/CD', level: 85 },
                  { name: 'Cloud Architecture', level: 80 }
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#8B9BB4]">{skill.name}</span>
                      <span className="text-[#F6AD55]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#2B4162]/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#F6AD55] to-[#FBD38D] rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Additional Skills */}
          <div className="mt-8 space-y-8">
            {/* Certifications */}
            <div className="bg-[#2B4162]/20 rounded-2xl p-8 backdrop-blur-sm border border-[#2B4162]/30">
              <h3 className="text-2xl font-bold mb-6 text-[#8B9BB4]">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-[#2B4162]/30 rounded-xl">
                  <div className="p-3 bg-[#2B4162]/50 rounded-lg">
                    <Image width={48} height={48} src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
                      alt="AWS Certification"
                      className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-[#8B9BB4] font-semibold">AWS Certified</h4>
                    <p className="text-sm text-[#8B9BB4]/80">Cloud Professional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Skills */}
            <div className="bg-[#2B4162]/20 rounded-2xl p-8 backdrop-blur-sm border border-[#2B4162]/30">
              <h3 className="text-2xl font-bold mb-6 text-[#8B9BB4]">Additional Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Software Architecture',
                  'System Design',
                  'Mobile Development',
                  'Cross-platform Development',
                  'RESTful APIs',
                  'GraphQL',
                  'Agile Methodologies',
                  'Team Leadership',
                  'Problem Solving',
                  'Technical Documentation',
                  'Code Review',
                  'Performance Optimization'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#2B4162]/30 rounded-full text-[#8B9BB4] hover:bg-[#2B4162]/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={`${activeSection === 'about' ? 'block' : 'hidden'}`}>
          <div className="bg-[#2B4162]/20 rounded-2xl p-8 backdrop-blur-sm border border-[#2B4162]/30">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image */}
              <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4A90E2] to-[#63B3ED] rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-lg"></div>
                  <Image
                    width={192}
                    height={192}
                    src="https://media.licdn.com/dms/image/v2/D4D03AQH-SWM-UiriJg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688764384631?e=1742428800&v=beta&t=m1Y98KZGzMYmRfYWnog1dFKco-109tTw8NIYUCXHv_I"
                    alt="Fábio Profile"
                    unoptimized
                    referrerPolicy="no-referrer"
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-[#2B4162]/30 shadow-xl transform transition duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* About Text */}
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-[#8B9BB4] flex items-center gap-2">
                  <User2 className="text-[#4A90E2]" />
                  Sobre Mim
                </h2>
                <div className="space-y-4 text-[#8B9BB4] leading-relaxed">
                  <p className="text-lg">
                    Sou Fábio, um entusiasta da programação, apaixonado por tecnologia, animes e leitura. Nos meus momentos livres, gosto de aprimorar minhas habilidades em desenho e arduino. Inspirado pela sabedoria de Nietzsche, <span className="italic text-[#4A90E2]">"Aquele que possui um 'porquê' para viver pode suportar quase qualquer 'como'"</span>, estou sempre em busca de novos conhecimentos e desafios.
                  </p>
                  <p>
                    Sei que ainda tenho muito a aprender, mas minha paixão por estudar e ler me impulsiona a evoluir constantemente, tanto no lado pessoal quanto no profissional.
                  </p>
                  <p>
                    Adoro participar de eventos de tecnologia, hackathons e comunidades tech, onde posso trocar ideias, aprender com outras pessoas e colaborar em projetos inovadores. Acredito que a interseção entre tecnologia e sabedoria é fundamental para tomar decisões mais inteligentes e estratégicas.
                  </p>
                  {/* <p>
                    Com meu compromisso com o aprendizado contínuo, estou pronto para contribuir de forma significativa em qualquer equipe, sempre trazendo uma visão criativa e estratégica para solucionar problemas complexos.
                  </p> */}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[#2B4162]/30 p-4 rounded-xl text-center">
                    <Experiencia />
                  </div>
                  <div className="bg-[#2B4162]/30 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-[#4A90E2]">10+</div>
                    <div className="text-sm text-[#8B9BB4]">Projetos Grandes</div>
                  </div>
                  <div className="bg-[#2B4162]/30 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-[#4A90E2]">5+</div>
                    <div className="text-sm text-[#8B9BB4]">Comunidades que participo</div>
                  </div>
                  <div className="bg-[#2B4162]/30 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-[#4A90E2]">∞</div>
                    <div className="text-sm text-[#8B9BB4]">Vontade de Aprender</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other sections remain the same */}
      </main>

      <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0) scale(1.05); }
          50% { transform: translateY(-10px) scale(1.1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn { animation: fadeIn 1s forwards; }
        .animate-slideRight { animation: slideRight 1s forwards; }
        .animate-slideLeft { animation: slideLeft 1s forwards; }
        .timeline-item { transition: all 0.5s ease-in-out; }

  @keyframes tilt {
    0%, 50%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(1deg);
    }
    75% {
      transform: rotate(-1deg);
    }
  }

  .animate-tilt {
    animation: tilt 10s infinite linear;
  }
      `}</style>
    </div>
  );
}