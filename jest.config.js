module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};