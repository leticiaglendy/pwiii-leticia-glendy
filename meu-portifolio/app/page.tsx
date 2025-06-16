import { Orbitron } from 'next/font/google'
import { Card, CardContent } from './components/ui/Card'
import { Button } from './components/ui/Button'
import { Github, Rocket, Mail, Linkedin, Instagram } from 'lucide-react'
import Head from 'next/head'
import Sidebar from './components/Sidebar'


const orbitron = Orbitron({ subsets: ['latin'], weight: ['600'] })

const projetos = [
  {
    id: 1,
    titulo: "Projeto Astro",
    descricao: "Um site com tema espacial, usando Next.js e Tailwind.",
    linkCodigo: "https://github.com/seuusuario/projeto-astro",
    linkOnline: "https://projeto-astro.vercel.app",
  },
  {
    id: 2,
    titulo: "App Mobile Galaxy",
    descricao: "Aplicativo React Native com design futurista e funcionalidades de navegação.",
    linkCodigo: "https://github.com/seuusuario/app-mobile-galaxy",
    linkOnline: "https://expo.dev/@seuusuario/app-mobile-galaxy",
  },
  {
    id: 3,
    titulo: "Dashboard SpaceX",
    descricao: "Dashboard para visualizar dados de missões espaciais com gráficos dinâmicos.",
    linkCodigo: "https://github.com/seuusuario/dashboard-spacex",
    linkOnline: "https://dashboard-spacex.vercel.app",
  },
]


export default function Home() {
  return (
    <main className="pl-48 pt-10 bg-[#0B0C2A] text-white min-h-screen">
      <Sidebar />
      <Head>
        <title>Portfólio Espacial</title>
      </Head>

      <section id="sobre" className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-6">
        <h1 className={`text-4xl md:text-6xl font-bold text-blue-400 ${orbitron.className}`}>Olá, eu sou Leticia</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Sou uma desenvolvedora web e mobile em missão constante para aprender e criar soluções que impactam.
        </p>
      </section>

      <section id="projetos" className="px-6 py-12 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold text-white mb-8 text-center">Projetos</h2>

  <div className="grid md:grid-cols-2 gap-6">
    {projetos.map(({ id, titulo, descricao, linkCodigo, linkOnline }) => (
      <Card key={id} className="bg-[#14163A] border-none shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">{titulo}</h3>
          <p className="text-gray-400 mb-4">{descricao}</p>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white"
              as="a"
              href={linkCodigo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Código <Github className="ml-2 h-4 w-4" />
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white"
              as="a"
              href={linkOnline}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Online <Rocket className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>


      <section id="contato" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-300 flex items-center gap-2 mb-6">
            <Mail className="w-6 h-6 text-blue-400" />
            Contato
          </h2>

          <p className="text-gray-300 text-lg mb-6">
            Para entrar em contato, envie um e-mail para:
            <a href="mailto:seuemail@example.com" className="text-blue-400 underline ml-2">
              ltcglendy@gmail.com
            </a>
          </p>

          <div className="flex gap-6 items-center">
            <a href="https://www.linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-7 h-7 text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://github.com/leticiaglendy" target="_blank" rel="noopener noreferrer">
              <Github className="w-7 h-7 text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://www.instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-7 h-7 text-gray-300 hover:text-pink-500 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        Feito com ☄️ por Leticia Glendy — 2025
      </footer>
    </main>
  )
}
