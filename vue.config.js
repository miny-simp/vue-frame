const path = require('path'); // 引入path模块
// const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV);
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 基本路径
  publicPath: './',
  // 构建时输出目录
  outputDir: 'dist',
  // 是否在保存的时候使用 `eslint-loader` 进行检查
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('./src/components'))
    config.resolve.symlinks(true) // 修复热更新失效
  },

  // css: {
  //   // 是否使用css分离插件
  //   extract: IS_PROD,
  //   loaderOptions: {
  //     less: {
  //       javascriptEnabled: true
  //     }
  //   }
  // },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "src/assets/css/common.less")] // 引入全局样式变量
    }
  },
}