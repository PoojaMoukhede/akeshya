module.exports = {
    async redirects() {
      return [
        {
          source: '/main',
          destination: '/',
          permanent: true, // This will return a 308 permanent redirect
        },
      ];
    },
  };
  