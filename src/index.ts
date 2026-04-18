// @ts-expect-error - Upstream types declare only types, not the runtime default export.
import sortImportsPlugin from '@trivago/prettier-plugin-sort-imports'
import type { Config as PrettierConfig } from 'prettier'
import packageJsonPlugin from 'prettier-plugin-packagejson'

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
  plugins: [packageJsonPlugin, sortImportsPlugin] as const,

  // sort-imports options
  importOrder: ['^\\w|^@\\w', '^@/', '.'] as const,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
} satisfies PrettierConfig
