/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config');

const nextConfig = {
    reactStrictMode: false,
    i18n,
    optimizeFonts: false,
    images: {
        domains: ['thumbs2.imgbox.com'],
    },
};

module.exports = nextConfig;
