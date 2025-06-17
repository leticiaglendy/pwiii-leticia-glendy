import { Orbitron } from 'next/font/google'
import { Card, CardContent } from './components/ui/Card'
import { Button } from './components/ui/Button'
import { Github, Rocket, Mail, Linkedin, Instagram, Wrench } from 'lucide-react'
import Head from 'next/head'
import Sidebar from './components/Sidebar'
import { ScrollToTopButton } from './components/ScrollToTopButton'

const orbitron = Orbitron({ subsets: ['latin'], weight: ['600'] })

const projetos = [
  {
    id: 1,
    titulo: "App Mobile Stickersmash",
    descricao: "Um app feito com React Native (com expo)",
    linkCodigo: "https://github.com/leticiaglendy/pamii-leticia-glendy/tree/main/StickerSmash",
    linkOnline: "",
  },
  {
    id: 2,
    titulo: " Projeto Letras de Músicas",
    descricao: "Site desenvolvido com Html, CSS e Javascript. Com tema vintage, letras de músicas e notícias",
    linkCodigo: "https://github.com/leticiaglendy/projeto-pw1-site",
    linkOnline: "",
  },
  {
    id: 3,
    titulo: "Projeto Papelaria",
    descricao: "Site de uma papelaria criado com Laravel, Bootstrap e PHP",
    linkCodigo: "https://github.com/leticiaglendy/PW2/tree/main/aula",
    linkOnline: "",
  },
]

export default function Home() {
  return (
    <main className="pt-10 bg-[#0B0C2A] text-white min-h-screen lg:pl-48">
      <Sidebar />
      <Head>
        <title>Portfólio | Leticia Glendy</title>
        <meta name="description" content="Portfólio de Leticia Glendy - Desenvolvedora web e mobile, apaixonada por tecnologia e aprendizado constante." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>


      <section
        id="sobre"
        className="py-20 max-w-5xl mx-auto px-6 text-center space-y-6"
      >
        <h1
          className={`text-4xl md:text-6xl font-bold text-blue-400 ${orbitron.className}`}
        >
          Olá, eu sou Leticia
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Sou uma desenvolvedora web e mobile em missão constante para aprender
          e criar soluções que impactam.
        </p>
      </section>

      <section
        id="tecnologias"
        className="py-20 max-w-5xl mx-auto px-6 text-center space-y-10"
      >
        <h2 className="text-3xl font-bold text-blue-300 flex items-center justify-center gap-3 mb-12">
          Tecnologias que utilizo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-left">
          {[
            "React Native (com Expo)",
            "Laravel (PHP)",
            "Node.js (Express)",
            "MySQL",
            "HTML, CSS e JavaScript",
            "TypeScript",
            "Consumo de APIs REST",
            "Git e GitHub",
          ].map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-3 bg-[#14163A] rounded-lg p-4 shadow-md hover:shadow-blue-500 transition-shadow cursor-default"
            >
              <span className="text-blue-400 text-xl select-none">🔹</span>
              <span className="text-gray-300 text-lg">{tech}</span>
            </div>
          ))}
        </div>
      </section>


      <section id="projetos" className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-300 flex items-center justify-center gap-2 mb-6">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projetos.map(({ id, titulo, descricao, linkCodigo, linkOnline }) => (
            <Card key={id} className="bg-[#14163A] border-none shadow-md hover:shadow-blue-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">
                  {titulo}
                </h3>
                <p className="text-gray-400 mb-4">{descricao}</p>
                <div className="flex space-x-4">
                  {linkCodigo && (
                    <a
                      href={linkCodigo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white" variant="outline">
                        Ver Código <Github className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  )}

                  {linkOnline && (
                    <a
                      href={linkOnline}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        Ver Online <Rocket className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="contato"
        className="py-20 max-w-5xl mx-auto px-6 text-center space-y-10"
      >
        <h2 className="text-3xl font-bold text-blue-300 flex items-center justify-center gap-2 mb-6">
          Contato
        </h2>

        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Para entrar em contato, envie um e-mail para:
          <a
            href="mailto:ltcglendy@gmail.com"
            className="text-blue-400 underline ml-2"
          >
            ltcglendy@gmail.com
          </a>
        </p>

        <div className="flex gap-6 items-center justify-center">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-7 h-7 text-gray-300 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://github.com/leticiaglendy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-7 h-7 text-gray-300 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-7 h-7 text-gray-300 hover:text-pink-500 transition-colors" />
          </a>
        </div>
      </section>

      <ScrollToTopButton />

      <footer className="text-center text-sm text-gray-500 py-6">
        Feito com ☄️ por Leticia Glendy — 2025
      </footer>
    </main>
  )
}
