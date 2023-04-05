/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config');
// 91.227.122.80
const nextConfig = {
    reactStrictMode: false,
    i18n,
    optimizeFonts: false,
    images: {
        domains: [
            'localhost',
            'http://57.128.195.225/',
            'http://57.128.195.225:1337/',
            '57.128.195.225',
            'http://91.227.122.80/',
            'http://91.227.122.80:1337/',
            '91.227.122.80',
            'www.instagram.com',
            'thumbs2.imgbox.com',
            'scontent-waw1-1.cdninstagram.com',
        ],
    },
};

module.exports = nextConfig;
