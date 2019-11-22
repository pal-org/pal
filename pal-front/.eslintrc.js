module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/standard'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'quotes': ['error', 'single'],
        'semi': 0,
        'spaced-comment': 0,
        'indent': 0,
        'no-unused-vars': 0,
        'prefer-const': 0,
        'no-trailing-spaces': 0,
        'key-spacing': 0,
        'no-undef': 0,
        'eqeqeq': 0,
        'padded-blocks': 0,
        'comma-dangle': 0,
        'no-multiple-empty-lines': 0

    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
