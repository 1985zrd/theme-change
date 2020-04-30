const path = require('path')
const createThemeColorReplacerPlugin = require('./config/plugin.config')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: config => {
        // 配置别名
        config.resolve.alias
          .set('@', resolve('src'))
    
        config.optimization.minimize(true) // 最小化压缩
        config.optimization.splitChunks({
          // 分割代码
          chunks: 'all'
        })
    
        // // 用cdn方式引入
        // config.externals({
        //   'vue': 'Vue',
        //   'vuex': 'Vuex',
        //   'vue-router': 'VueRouter',
        //   'axios': 'axios'
        // })
    
        // 打包文件带hash
        // config.output.filename('[name].[hash].js').end()
    },
    configureWebpack: () => {
        return {
            // 压缩代码
            plugins: [createThemeColorReplacerPlugin()]
        }
    }
}