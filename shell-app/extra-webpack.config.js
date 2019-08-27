module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        use:
          [{
            loader: 'share-loader',
            options: {
              modules: [/@angular/, /ng-zorro-antd/],
              exclude: [/@angular-devkit/],
              namespace: 'container-app'
            }
          }]
      }]
  }
};
