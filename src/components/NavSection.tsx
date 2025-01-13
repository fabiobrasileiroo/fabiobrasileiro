import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { UserIcon } from './ui/user';
import { FlaskIcon } from './ui/flask';
import { TimerIcon } from './ui/timer';
import { RocketIcon } from './ui/rocket';
import { MessageCircleMoreIcon } from './ui/message-circle-more';

// ✅ Definindo as props com tipagem explícita
interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'about', icon: <UserIcon />, label: 'About' },
    { id: 'skills', icon: <FlaskIcon />, label: 'Skills' },
    { id: 'timeline', icon: <TimerIcon />, label: 'Timeline' },
    { id: 'projects', icon: <RocketIcon />, label: 'Projects' },
    { id: 'blog', icon: <MessageCircleMoreIcon />, label: 'Blog' }
  ];

  return (
    <nav className="sticky top-0 bg-[#1a0f2e]/80 backdrop-blur-sm z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center items-center py-4 relative">
          {/* Menu Hamburguer */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute left-4 md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu de Navegação */}
          <div className={`flex-col md:flex md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === item.id ? 'bg-[#2B4162] text-white' : 'hover:bg-[#2B4162]/50 text-white'
                }`}
              >
                <span className="transition-transform transform group-hover:scale-110">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
