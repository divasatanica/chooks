module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3,
        "modules": false
      }
    ]
  ],
  include: "**/*.js",
  exclude: "**/*.ts",
  plugins: [
    [
      "@babel/plugin-transform-runtime"
    ]
  ]
}