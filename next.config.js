module.exports = ({
  pageExtensions: ["tsx"],
  webpack: (config) => {
    config.module.rules.push(
      ...[
        {
          test: /\.ya?ml$/,
          use: "js-yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
  images: {
    // formats: [
    //   'image/avif',
    //   'image/webp',
    //   'image/jpeg',
    //   'image/png'
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      }
    ],
  },
});
