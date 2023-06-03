/** @type {import("prettier").Config} */
const config = {
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    singleQuote: false,
    semi: true,
    tabWidth: 4,
    trailingComma: "es5",
    printWidth: 120,
};

module.exports = config;
