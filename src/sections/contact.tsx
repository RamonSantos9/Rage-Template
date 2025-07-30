"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  Star,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@landingpage.com",
      link: "mailto:contato@landingpage.com",
      description: "Respondemos em até 24h",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999",
      description: "Segunda a Sexta, 9h às 18h",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      link: "#",
      description: "Atendimento presencial",
      color: "from-orange-500 to-red-600",
    },
  ];

  const testimonials = [
    {
      name: "João Silva",
      company: "TechStart",
      text: "Excelente trabalho! A equipe entregou exatamente o que precisávamos.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      company: "DigitalCorp",
      text: "Profissionais muito competentes e atenciosos. Recomendo!",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
    { icon: Award, value: "98%", label: "Taxa de Aprovação" },
    { icon: Zap, value: "24h", label: "Tempo de Resposta" },
    { icon: Star, value: "4.9", label: "Avaliação Média" },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-40 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-custom-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-custom-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl container mx-auto px-4 relative z-10">
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
            Entre em Contato
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-switzer-medium text-black mb-6">
            Vamos{" "}
            <span className="font-instrument italic text-custom-secondary">
              conversar
            </span>
          </h2>

          <p className="text-lg text-black font-switzer-regular max-w-2xl mx-auto mb-8">
            Pronto para transformar sua ideia em realidade? Entre em contato
            conosco e vamos criar algo incrível juntos.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-custom-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-custom-secondary" />
                </div>
                <div className="text-2xl font-switzer-medium text-custom-secondary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-black font-switzer-regular">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-custom-secondary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

              <div className="flex items-center mb-8 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-custom-secondary to-custom-secondary/80 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-switzer-medium text-black">
                    Envie sua mensagem
                  </h3>
                  <p className="text-black font-switzer-regular">
                    Conte-nos sobre seu projeto
                  </p>
                </div>
              </div>

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-switzer-medium text-black mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-custom-secondary focus:border-transparent font-switzer-regular bg-white text-black placeholder-gray-500 transition-all duration-300 group-hover:border-custom-secondary/50"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-switzer-medium text-black mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-custom-secondary focus:border-transparent font-switzer-regular bg-white text-black placeholder-gray-500 transition-all duration-300 group-hover:border-custom-secondary/50"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-switzer-medium text-black mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-custom-secondary focus:border-transparent font-switzer-regular bg-white text-black placeholder-gray-500 transition-all duration-300 group-hover:border-custom-secondary/50"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-switzer-medium text-black mb-2">
                      Tipo de projeto
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-custom-secondary focus:border-transparent font-switzer-regular bg-white text-black transition-all duration-300 group-hover:border-custom-secondary/50"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="site-institucional">
                        Site Institucional
                      </option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="blog">Blog</option>
                      <option value="app-mobile">App Mobile</option>
                      <option value="dashboard">Dashboard</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-switzer-medium text-black mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-custom-secondary focus:border-transparent font-switzer-regular bg-white text-black placeholder-gray-500 resize-none transition-all duration-300 group-hover:border-custom-secondary/50"
                    placeholder="Conte-nos sobre seu projeto, objetivos e expectativas..."
                  ></textarea>
                </div>

                <Button
                  variant="primary"
                  className="flex justify-center items-center w-full font-switzer-medium py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Cards de Contato */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-center p-6 rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  <div className="w-16 h-16 bg-gradient-to-br from-custom-secondary/10 to-custom-secondary/5 rounded-xl flex items-center justify-center mr-6 group-hover:bg-custom-secondary group-hover:text-white transition-all duration-300 relative z-10">
                    <info.icon className="w-8 h-8 text-custom-secondary group-hover:text-white" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-switzer-medium text-black mb-1">
                      {info.title}
                    </h4>
                    <p className="text-black font-switzer-regular mb-1">
                      {info.value}
                    </p>
                    <p className="text-custom-secondary font-switzer-regular text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Horário de Atendimento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-custom-secondary/5 to-custom-secondary/10 rounded-xl p-8 border border-gray-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-custom-secondary/5 rounded-full -translate-y-12 translate-x-12"></div>

              <div className="flex items-center mb-6 relative z-10">
                <div className="w-12 h-12 bg-custom-secondary/10 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-custom-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-switzer-medium text-black">
                    Horário de Atendimento
                  </h4>
                  <p className="text-custom-secondary font-switzer-regular">
                    Estamos aqui para ajudar
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-black font-switzer-regular relative z-10">
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span>Segunda a Sexta:</span>
                  <span className="font-switzer-medium text-custom-secondary">
                    9h às 18h
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span>Sábado:</span>
                  <span className="font-switzer-medium text-custom-secondary">
                    9h às 14h
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span>Domingo:</span>
                  <span className="font-switzer-medium text-gray-500">
                    Fechado
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-switzer-medium text-black mb-4">
                O que nossos clientes dizem
              </h4>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-black font-switzer-regular text-sm mb-2">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="text-custom-secondary font-switzer-medium text-sm">
                    {testimonial.name} - {testimonial.company}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-custom-secondary to-custom-secondary/90 rounded-xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <h4 className="text-xl font-switzer-medium mb-4">
                  Precisa de um orçamento rápido?
                </h4>
                <p className="font-switzer-regular mb-6 opacity-90">
                  Envie uma mensagem e receba uma proposta personalizada em até
                  24h
                </p>
                <Button
                  variant="secondary"
                  className="flex justify-center items-center w-full font-switzer-medium bg-white text-custom-secondary hover:bg-gray-100"
                  size="lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
