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
      // https://github.com/babel/babel/issues/2877
      [require('babel-plugin-transform-runtime'), {polyfill: false}],
      require('babel-plugin-transform-decorators-legacy').default,
    ],
  };
};
