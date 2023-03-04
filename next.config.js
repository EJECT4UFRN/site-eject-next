const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  images: {
    domains: [
      'apisite.ejectufrn.com.br',
      'res.cloudinary.com',
      'assets.vercel.com',
      'images.prismic.io',
    ],
  },
});
