// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/saveregist.ajax':{
        target:'http://192.168.1.100:8082/commerce-web/regist',
        changeOrigin: true,
        pathRewrite:{
          '^/saveregist.ajax':'/saveregist.ajax'
        }
      },
      '/login.ajax':{
        target:'http://192.168.1.100:8082/commerce-web',
        changeOrigin: true,
        pathRewrite:{
          '^login.ajax':'login.ajax'
        }
      },
      '/tostortmessage.ajax':{
        target:'http://192.168.1.100:8082/commerce-web/regist',
        changeOrigin: true,
        pathRewrite:{
          '^/tostortmessage.ajax':'/tostortmessage.ajax'
        }
      },
      '/countenterprisename.ajax':{
        target:'http://192.168.1.100:8082/commerce-web/regist',
        changeOrigin: true,
        pathRewrite:{
          '^/countenterprisename.ajax':'/countenterprisename.ajax'
        }
      },
      '/countcreditcode.ajax':{
        target:'http://192.168.1.100:8082/commerce-web/regist',
        changeOrigin: true,
        pathRewrite:{
          '^/countcreditcode.ajax':'/countcreditcode.ajax'
        }
      },
      '/countusename.ajax':{
        target:'http://192.168.1.100:8082/commerce-web/regist',
        changeOrigin: true,
        pathRewrite:{
          '^/countusename.ajax':'/countusename.ajax'
        }
      },
      '/countmobile.ajax':{
        target:'http://192.168.1.100:8082/commerce-web/regist',
        changeOrigin: true,
        pathRewrite:{
          '^/countmobile.ajax':'/countmobile.ajax'
        }
      },
      '/xuan/verifyCode.ajax':{
        target:'http://192.168.1.100:8082/commerce-web',
        changeOrigin: true,
        pathRewrite:{
          '^/xuan/verifyCode.ajax':'/xuan/verifyCode.ajax'
        }
      },
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
