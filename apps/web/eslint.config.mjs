import {baseConfig} from '@workspace/eslint-config/base'
import {nextConfig} from '@workspace/eslint-config/next'

export default [...baseConfig, ...nextConfig]

// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { FlatCompat } from '@eslint/eslintrc';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends('next/core-web-vitals', 'next/typescript'),
// ];

// export default eslintConfig;
