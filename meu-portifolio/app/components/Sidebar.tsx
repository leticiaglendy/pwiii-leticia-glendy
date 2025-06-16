import { User, Folder, Mail } from 'lucide-react';

const sections = [
  { href: '#sobre', label: 'Sobre', icon: <User className="w-5 h-5" /> },
  { href: '#projetos', label: 'Projetos', icon: <Folder className="w-5 h-5" /> },
  { href: '#contato', label: 'Contato', icon: <Mail className="w-5 h-5" /> }
];

export default function Sidebar() {
  return (
    <nav className="fixed top-0 left-0 h-full w-48 bg-[#14163A] flex flex-col justify-start px-4 py-10 space-y-6 shadow-lg z-50">
      {sections.map(({ href, label, icon }) => (
        <a
          key={href}
          href={href}
          className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
        >
          {icon}
          <span className="text-base font-medium">{label}</span>
        </a>
      ))}
    </nav>
  );
}
