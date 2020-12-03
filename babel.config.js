module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3,
        "modules": false
      }
    ],
    [
      "@babel/preset-react"
    ]
  ],
  include: ["**/*.js", "**/*.ts", "**/*.tsx"],
  // exclude: "**/*.ts",
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      // "@babel/plugin-syntax-dynamic-import
    ],
    "@babel/plugin-syntax-dynamic-import"
  ]
}