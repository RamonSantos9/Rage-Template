import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Configuração para resolver paths @/
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(process.cwd(), "src"),
    };

    // Encontrar a regra de carregamento para arquivos SVG
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    // Modificar as regras de SVGs
    config.module.rules.push(
      // Reaplicar a regra existente para SVGs que podem ser importados como URLs
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // Aplica para *.svg?url
      },
      // Converter outros SVGs em componentes React
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] }, // Exclui SVGs com ?url
        use: ["@svgr/webpack"],
      }
    );

    // Excluir a regra anterior para arquivos SVG que já foram tratados
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  images: {
    domains: ["framerusercontent.com", "via.placeholder.com"], // Adicione os domínios permitidos
  },
};

export default nextConfig;
