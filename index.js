const browserVersions = ['> 5%', 'last 3 iOS versions', 'last 2 versions'];

module.exports = function buildMesaicPreset(context, options_) {
  const options = options_ || {};
  return {
    presets: [
      [require('babel-preset-env'), {targets: options.node ? {node: 'current'} : browserVersions, debug: options.debug}],
      require('babel-preset-stage-1'),
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
