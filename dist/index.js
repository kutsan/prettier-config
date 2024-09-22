export const config = {
    semi: false,
    singleQuote: true,
    overrides: [
        {
            files: ['pnpm-lock.yaml'],
            options: {
                rangeEnd: 0,
            },
        },
    ],
    plugins: [
        'prettier-plugin-packagejson',
        '@trivago/prettier-plugin-sort-imports',
    ],
    // sort-imports options
    importOrder: ['^\\w|^@\\w', '^@/', '.'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
//# sourceMappingURL=index.js.map
