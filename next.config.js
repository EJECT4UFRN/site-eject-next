const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  images: {
    domains: [
      'api-eject.herokuapp.com',
      'res.cloudinary.com',
      'assets.vercel.com',
      'images.prismic.io',
    ],
  },
});
