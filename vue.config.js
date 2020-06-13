/*
 * @Description:
 * @Author: 雪中无处寻
 * @Date: 2020-06-13 16:57:31
 * @LastEditTime: 2020-06-13 17:00:23
 * @LastEditors: 雪中无处寻
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack (config) {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@views', resolve('src/views'))
      .set('@com', resolve('src/common'))
      .set('@js', resolve('src/assets/js'))
      .set('@css', resolve('src/assets/css'))
      .set('@imgs', resolve('src/assets/imgs'))
      .set('@c', resolve('src/components'))
  }
}
