const { hostname } = require("os");

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'shutterstock.com',
        },
        {
          protocol: 'https',
          hostname: 'm7vwiihfc6hf4bbg.public.blob.vercel-storage.com',
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
        }
      ],
    },
  }