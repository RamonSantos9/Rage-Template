"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Services() {
  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Landing Pages",
      description:
        "Páginas de conversão otimizadas para transformar visitantes em clientes",
      features: ["Design responsivo", "SEO otimizado", "Análise de conversão"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Sites Institucionais",
      description:
        "Presença digital profissional que fortalece sua marca no mercado",
      features: ["Múltiplas páginas", "CMS integrado", "Blog personalizado"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "E-commerce",
      description: "Lojas virtuais completas para vender seus produtos online",
      features: [
        "Catálogo de produtos",
        "Pagamentos seguros",
        "Gestão de estoque",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-28 lg:py-40">
      <div className="max-w-6xl container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-custom-secondary/10 text-custom-secondary rounded-lg text-sm font-switzer-medium mb-6">
            <span className="w-2 h-2 bg-custom-secondary rounded-full mr-2"></span>
            Nossos Serviços
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-switzer-medium text-black mb-6">
            Soluções{" "}
            <span className="font-instrument italic text-custom-secondary">
              completas
            </span>
          </h2>

          <p className="text-lg text-black font-switzer-regular max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para impulsionar sua
            presença digital e alcançar seus objetivos de negócio.
          </p>
        </motion.div>

        {/* Cards de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 bg-custom-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="text-custom-secondary">{service.icon}</div>
              </div>

              <h3 className="text-2xl font-switzer-medium text-black mb-4">
                {service.title}
              </h3>

              <p className="text-black font-switzer-regular mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-black font-switzer-regular"
                  >
                    <svg
                      className="w-4 h-4 text-custom-secondary mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="secondary"
                size="md"
                className="w-full font-switzer-medium"
              >
                Saiba Mais
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
