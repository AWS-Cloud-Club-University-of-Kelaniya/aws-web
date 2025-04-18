// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import path from 'path';
import { fileURLToPath } from 'url';

/** ESM path resolution */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
