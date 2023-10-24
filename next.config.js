/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/coursework-nmmp",
  assetPrefix: "/coursework-nmmp/",
  output: "export", // только для того, чтобы превратить NextJS проект в статичный для деплоя на gh-pages
};

module.exports = nextConfig;
