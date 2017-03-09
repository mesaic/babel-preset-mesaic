module.exports = function buildMesaicPreset(context, options) {
  let preset; // eslint-disable-line no-var
  return {
    presets: [
      require('babel-preset-env'),
      require('babel-preset-stage-0'),
      require('babel-preset-react'),
    ],
    plugins: [
      require('babel-plugin-react-autoprefix'),
      require('babel-plugin-transform-runtime'),
      require('babel-plugin-transform-decorators-legacy'),
    ],
  };
};
