module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "tsconfigRootDir": __dirname,
        "project": './tsconfig.json'
    },
    "extends": [
        "standard-with-typescript"
    ],
    "rules": {
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/promise-function-async": "off"
    },
    "plugins": [
        "@typescript-eslint"
    ]
};
