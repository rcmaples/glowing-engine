// ./packages/eslint-config/base.js
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import onlyWarn from 'eslint-plugin-only-warn'
import turboPlugin from 'eslint-plugin-turbo'
import tseslint from 'typescript-eslint'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const baseConfig = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': [
        'warn',
        {
          cwd: '../../',
          allowList: [
            'SANITY_API_READ_TOKEN',
            'SANITY_READ_TOKEN',
            'NEXT_PUBLIC_SANITY_PROJECT_ID',
            'NEXT_PUBLIC_SANITY_DATASET',
            'NEXT_PUBLIC_SANITY_API_VERSION',
            'NEXT_PUBLIC_SANITY_STUDIO_URL',
            'SANITY_STUDIO_PREVIEW_URL',
            'SANITY_STUDIO_API_URL',
            'NODE_ENV',
            'VERCEL_ENV',
            'SANITY_PROJECT_ID',
            'OPENAI_API_KEY',
          ],
        },
      ],
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**', 'node_modules', '.sanity', '**/sanity.types.ts'],
  },
]
