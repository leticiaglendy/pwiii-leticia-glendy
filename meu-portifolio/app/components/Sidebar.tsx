'use client'
import { User, Folder, Mail, Wrench, Menu, X } from 'lucide-react';
import { useState } from 'react';

const sections = [
  { href: '#sobre', label: 'Sobre', icon: <User className="w-5 h-5" /> },
  { href: '#tecnologias', label: 'Tecnologias', icon: <Wrench className="w-5 h-5" /> },
  { href: '#projetos', label: 'Projetos', icon: <Folder className="w-5 h-5" /> },
  { href: '#contato', label: 'Contato', icon: <Mail className="w-5 h-5" /> }
];

export default function Sidebar() {
  // Estado para controlar se o menu está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão de Menu/Fechar (visível apenas em telas pequenas) */}
      <button
        // A classe 'md:hidden' faz o botão desaparecer em telas médias e maiores
        className="fixed top-4 left-4 z-50 text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav
        className={`
          fixed top-0 left-0 h-full w-48 bg-[#14163A] 
          flex flex-col justify-start px-4 py-10 space-y-6 
          shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {sections.map(({ href, label, icon }) => (
          <a
            key={href}
            href={href}
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(false)} // Fecha o menu ao clicar em um item
          >
            {icon}
            <span className="text-base font-medium">{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}