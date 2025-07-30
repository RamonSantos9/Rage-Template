"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Palette,
  Smartphone,
  Monitor,
  ShoppingCart,
  FileText,
  BarChart3,
} from "lucide-react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const projects = [
    {
      title: "E-commerce Moderno",
      category: "E-commerce",
      description:
        "Loja virtual completa com design responsivo, sistema de pagamentos integrado e alta taxa de conversão. Foco em experiência do usuário e performance.",
      image: "/assets/logo.svg",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS"],
      link: "#",
      github: "#",
      live: "#",
      stats: {
        conversion: "+45%",
        performance: "98/100",
        mobile: "100%",
      },
    },
    {
      title: "Landing Page SaaS",
      category: "Landing Page",
      description:
        "Página de conversão otimizada para startup de tecnologia com foco em conversão de leads e apresentação de produto.",
      image: "/assets/logo.svg",
      technologies: ["React", "Framer Motion", "TypeScript", "Vercel"],
      link: "#",
      github: "#",
      live: "#",
      stats: {
        conversion: "+67%",
        performance: "100/100",
        mobile: "100%",
      },
    },
    {
      title: "Site Institucional",
      category: "Website",
      description:
        "Presença digital profissional para empresa de consultoria com design elegante e navegação intuitiva.",
      image: "/assets/logo.svg",
      technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
      link: "#",
      github: "#",
      live: "#",
      stats: {
        conversion: "+38%",
        performance: "95/100",
        mobile: "100%",
      },
    },
    {
      title: "App Mobile",
      category: "Mobile",
      description:
        "Aplicativo mobile nativo para gestão de tarefas com interface intuitiva e sincronização em tempo real.",
      image: "/assets/logo.svg",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      link: "#",
      github: "#",
      live: "#",
      stats: {
        conversion: "+52%",
        performance: "4.8/5",
        mobile: "100%",
      },
    },
    {
      title: "Dashboard Analytics",
      category: "Dashboard",
      description:
        "Painel administrativo com análises avançadas, gráficos interativos e relatórios em tempo real.",
      image: "/assets/logo.svg",
      technologies: ["Vue.js", "Chart.js", "Node.js", "PostgreSQL"],
      link: "#",
      github: "#",
      live: "#",
      stats: {
        conversion: "+41%",
        performance: "96/100",
        mobile: "95%",
      },
    },
    {
      title: "Blog Personalizado",
      category: "Blog",
      description:
        "Plataforma de blog com CMS personalizado, SEO otimizado e sistema de comentários integrado.",
      image: "/assets/logo.svg",
      technologies: ["Next.js", "MDX", "Vercel", "Prisma"],
      link: "#",
      github: "#",
      live: "#",
      stats: {
        conversion: "+29%",
        performance: "98/100",
        mobile: "100%",
      },
    },
  ];

  const categories = [
    { name: "Todos", icon: Palette, count: projects.length },
    {
      name: "Landing Page",
      icon: Monitor,
      count: projects.filter((p) => p.category === "Landing Page").length,
    },
    {
      name: "E-commerce",
      icon: ShoppingCart,
      count: projects.filter((p) => p.category === "E-commerce").length,
    },
    {
      name: "Website",
      icon: Code,
      count: projects.filter((p) => p.category === "Website").length,
    },
    {
      name: "Mobile",
      icon: Smartphone,
      count: projects.filter((p) => p.category === "Mobile").length,
    },
    {
      name: "Dashboard",
      icon: BarChart3,
      count: projects.filter((p) => p.category === "Dashboard").length,
    },
    {
      name: "Blog",
      icon: FileText,
      count: projects.filter((p) => p.category === "Blog").length,
    },
  ];

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-28 lg:py-40 bg-white">
      <div className="max-w-6xl container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-custom-secondary/10 text-custom-secondary rounded-lg text-sm font-switzer-medium mb-6">
            <span className="w-2 h-2 bg-custom-secondary rounded-full mr-2"></span>
            Nosso Portfólio
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-switzer-medium text-black mb-6">
            Projetos{" "}
            <span className="font-instrument italic text-custom-secondary">
              incríveis
            </span>
          </h2>

          <p className="text-lg text-black font-switzer-regular max-w-2xl mx-auto mb-8">
            Explore nossa coleção de projetos que demonstram nossa expertise em
            criar soluções digitais inovadoras e impactantes.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-switzer-medium text-custom-secondary mb-2">
                {projects.length}+
              </div>
              <div className="text-black font-switzer-regular">
                Projetos Entregues
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-switzer-medium text-custom-secondary mb-2">
                98%
              </div>
              <div className="text-black font-switzer-regular">Satisfação</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-switzer-medium text-custom-secondary mb-2">
                24h
              </div>
              <div className="text-black font-switzer-regular">
                Tempo de Resposta
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-switzer-medium transition-all duration-300 border-2 ${
                activeCategory === category.name
                  ? "bg-custom-secondary text-white border-custom-secondary shadow-lg"
                  : "bg-white text-black border-gray-200 hover:border-custom-secondary hover:bg-custom-secondary/5"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.name
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Projetos */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Imagem */}
              <div className="relative h-56 bg-gradient-to-br from-custom-secondary/10 to-custom-secondary/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-custom-secondary/20 rounded-2xl flex items-center justify-center">
                    <Palette className="w-10 h-10 text-custom-secondary" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay com ações */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.live}
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black hover:bg-custom-secondary hover:text-white transition-all duration-300 shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black hover:bg-custom-secondary hover:text-white transition-all duration-300 shadow-lg"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-custom-secondary/10 text-custom-secondary text-sm font-switzer-medium rounded-lg">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-custom-secondary">
                    <Eye className="w-4 h-4" />
                    <span className="font-switzer-medium">
                      {project.stats.conversion}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-switzer-medium text-black mb-3 group-hover:text-custom-secondary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-black font-switzer-regular mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-lg font-switzer-medium text-custom-secondary">
                      {project.stats.conversion}
                    </div>
                    <div className="text-xs text-black font-switzer-regular">
                      Conversão
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-switzer-medium text-custom-secondary">
                      {project.stats.performance}
                    </div>
                    <div className="text-xs text-black font-switzer-regular">
                      Performance
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-switzer-medium text-custom-secondary">
                      {project.stats.mobile}
                    </div>
                    <div className="text-xs text-black font-switzer-regular">
                      Mobile
                    </div>
                  </div>
                </div>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white border border-gray-200 text-black text-sm font-switzer-regular rounded-lg hover:bg-custom-secondary hover:text-white hover:border-custom-secondary transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center justify-center w-full py-3 bg-custom-secondary text-white font-switzer-medium rounded-xl hover:bg-custom-secondary/90 transition-all duration-300 group"
                >
                  Ver Projeto Completo
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-custom-secondary/5 to-custom-secondary/10 rounded-2xl p-12 border border-gray-200">
            <h3 className="text-3xl font-switzer-medium text-black mb-4">
              Pronto para o próximo projeto?
            </h3>
            <p className="text-black font-switzer-regular mb-8 max-w-2xl mx-auto">
              Vamos criar algo incrível juntos! Entre em contato e vamos
              transformar sua ideia em realidade.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-custom-secondary text-white font-switzer-medium rounded-xl hover:bg-custom-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Iniciar Projeto
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
