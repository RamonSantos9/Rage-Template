"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-40">
      <div className="max-w-6xl container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-custom-secondary/10 text-custom-secondary rounded-lg text-sm font-switzer-medium">
                <span className="w-2 h-2 bg-custom-secondary rounded-full mr-2"></span>
                Sobre Nós
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-switzer-medium text-black">
                Criamos experiências{" "}
                <span className="font-instrument italic text-custom-secondary">
                  únicas
                </span>
              </h2>

              <p className="text-lg text-black font-switzer-regular leading-relaxed">
                Somos uma equipe apaixonada por design e tecnologia,
                especializada em criar landing pages que não apenas impressionam
                visualmente, mas também convertem visitantes em clientes.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <div className="text-3xl font-switzer-medium text-custom-secondary">
                    500+
                  </div>
                  <div className="text-black font-switzer-regular">
                    Projetos Entregues
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-switzer-medium text-custom-secondary">
                    98%
                  </div>
                  <div className="text-black font-switzer-regular">
                    Satisfação
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards de Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <motion.div whileHover={{ y: -5 }} className="rounded-xl p-6 ">
                <div className="w-12 h-12 bg-custom-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-custom-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-switzer-medium text-black mb-2">
                  Performance
                </h3>
                <p className="text-black font-switzer-regular">
                  Sites otimizados para velocidade e SEO
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-custom-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-custom-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-switzer-medium text-black mb-2">
                  Responsivo
                </h3>
                <p className="text-black font-switzer-regular">
                  Design adaptável para todos os dispositivos
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ delay: 0.2 }}
                className="rounded-xl p-6 "
              >
                <div className="w-12 h-12 bg-custom-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-custom-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-switzer-medium text-black mb-2">
                  Criatividade
                </h3>
                <p className="text-black font-switzer-regular">
                  Design único e personalizado
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ delay: 0.3 }}
                className="rounded-xl p-6 "
              >
                <div className="w-12 h-12 bg-custom-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-custom-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-switzer-medium text-black mb-2">
                  Suporte
                </h3>
                <p className="text-black font-switzer-regular">
                  Atendimento completo e personalizado
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
