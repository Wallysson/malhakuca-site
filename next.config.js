/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  env: {
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
  },
  publicRuntimeConfig: {
    VALOR_QUALQUER: process.env.NEXT_PUBLIC_VALOR_QUALQUER,
    VALOR_100: process.env.NEXT_PUBLIC_VALOR_100,
    VALOR_50: process.env.NEXT_PUBLIC_VALOR_50,
    VALOR_20: process.env.NEXT_PUBLIC_VALOR_20,
  },
};

module.exports = nextConfig;
