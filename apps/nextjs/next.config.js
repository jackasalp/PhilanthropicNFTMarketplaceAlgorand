const path = require('path');
const { getSharedConfig } = require('nft-marketplace-config');
const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-plugin-svgr');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // keep development cache indefinitely
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 1000,
    pagesBufferLength: 1000,
  },
  poweredByHeader: false,
  // TODO: We need env system to set specific environments in development, staging, production correctly.
  env: {
    TOKEN_COOKIE_NAME: 'nft-marketplace-token',
    TOKEN_COOKIE_EXPIRATION: 60 * 60 * 2,
    ...getSharedConfig(),
  },
};

module.exports = withPlugins(
  [
    [
      withSvgr,
      {
        svgrOptions: {
          configFile: path.resolve(__dirname, 'svgr.config.js'),
        },
      },
    ],
  ],
  nextConfig,
);
