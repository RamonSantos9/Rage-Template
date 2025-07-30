"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produtos: [
      { name: "Landing Pages", href: "#" },
      { name: "Sites Institucionais", href: "#" },
      { name: "E-commerce", href: "#" },
      { name: "Blogs", href: "#" },
    ],
    recursos: [
      { name: "Portfólio", href: "#" },
      { name: "Tutoriais", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Suporte", href: "#" },
    ],
    empresa: [
      { name: "Sobre Nós", href: "#about" },
      { name: "Serviços", href: "#services" },
      { name: "Contato", href: "#contact" },
      { name: "Orçamento", href: "#contact" },
    ],
    legal: [
      { name: "Privacidade", href: "#" },
      { name: "Termos de Uso", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "LGPD", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-8"
            >
              <div className="w-12 h-12 bg-custom-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-switzer-medium text-lg">
                  LP
                </span>
              </div>
              <span className="text-2xl font-switzer-medium text-black">
                Landing Page
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-black font-switzer-regular mb-8 max-w-md leading-relaxed"
            >
              Criamos landing pages modernas e responsivas que convertem
              visitantes em clientes. Design elegante, performance otimizada e
              resultados garantidos.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 text-black">
                <div className="w-8 h-8 bg-custom-secondary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-custom-secondary" />
                </div>
                <span className="font-switzer-regular">
                  contato@landingpage.com
                </span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <div className="w-8 h-8 bg-custom-secondary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-custom-secondary" />
                </div>
                <span className="font-switzer-regular">
                  +55 (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <div className="w-8 h-8 bg-custom-secondary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-custom-secondary" />
                </div>
                <span className="font-switzer-regular">
                  São Paulo, SP - Brasil
                </span>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-switzer-medium text-black mb-6 capitalize">
                  {category}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-black font-switzer-regular hover:text-custom-secondary transition-colors duration-300 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-switzer-medium text-black mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-black font-switzer-regular mb-8">
              Receba dicas de design, desenvolvimento e marketing digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-custom-secondary focus:border-transparent font-switzer-regular bg-white text-black placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-custom-secondary text-white rounded-lg font-switzer-medium hover:bg-custom-secondary/90 transition-colors duration-300">
                Inscrever
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-black text-sm font-switzer-regular">
              © {currentYear} Landing Page. Todos os direitos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={social.href}
                    className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-black hover:text-custom-secondary hover:border-custom-secondary transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
