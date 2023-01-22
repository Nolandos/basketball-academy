/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config');

const nextConfig = {
    reactStrictMode: false,
    i18n,
    optimizeFonts: false,
    images: {
        domains: [
            'localhost',
            'www.instagram.com',
            'thumbs2.imgbox.com',
            'scontent-waw1-1.cdninstagram.com',
        ],
    },
};

module.exports = nextConfig;
