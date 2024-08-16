/** @type {import('next').NextConfig} */

const { readFileSync } = require("fs");
const config = {};
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  mdxOptions: {
    rehypePrettyCodeOptions: {
      // VSCode theme or built-in Shiki theme, see Shiki documentation for more information
      theme: JSON.parse(readFileSync("./public/syntax/shadc.json", "utf8")),
    },
  },
});

module.exports = withNextra(config);
