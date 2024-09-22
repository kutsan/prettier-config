import type { Config as PrettierConfig } from 'prettier'

export const config = {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: ['pnpm-lock.yaml'] as const,
      options: {
        rangeEnd: 0,
      },
    },
  ],
  plugins: [
    'prettier-plugin-packagejson',
    '@trivago/prettier-plugin-sort-imports',
  ] as const,

  // sort-imports options
  importOrder: ['^\\w|^@\\w', '^@/', '.'] as const,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
} satisfies PrettierConfig
