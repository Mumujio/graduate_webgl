const { defineConfig } = require("@vue/cli-service");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// defineConfig vue-cli的内置帮手函数，代码提示
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV === "production") {
  //     // 生产环境
  //     return {
  //       // plugins: [new BundleAnalyzerPlugin()],

  //     };
  //   } else {
  //     // 开发环境
  //     return {
  //       plugins: [new BundleAnalyzerPlugin()],
  //     };
  //   }

  //   // optimization: {
  //   //   /**
  //   //    * runtimeChunk可选值有：true或'multiple'或'single'
  //   //    * true或'multiple'会有每个入口对应的chunk。不过一般情况下
  //   //    * 考虑到要模块初始化，设置为single就够多数情况下使用啦。
  //   //    * 详情见官网：https://webpack.docschina.org/configuration/optimization/#optimizationruntimechunk
  //   //    * */
  //   //   runtimeChunk: "single",
  //   //   /**
  //   //    * 以前是CommonsChunkPlugin，现在换成optimization.splitChunks。普通项目下方的配置就足够用啦
  //   //    * 详情见官网：https://webpack.docschina.org/configuration/optimization/#optimizationsplitchunks
  //   //    * */
  //   //   splitChunks: {
  //   //     chunks: "all", // 可选值：all，async 和 initial。all功能最强大，所以咱们就使用all
  //   //     maxInitialRequests: Infinity, // 最大并行请求数，为了以防万一，设置无穷大即可
  //   //     minSize: 20000, // 引入的模块大于20kb才做代码分割，官方默认20000，这里不用修改了
  //   //     maxSize: 60000, // 若引入的模块大于60kb，则告诉webpack尝试再进行拆分
  //   //     cacheGroups: {
  //   //       vendors: {
  //   //         test: /[\\/]node_modules[\\/]/, // 使用正则匹配node_modules中引入的模块
  //   //         priority: -10, // 优先级值越大优先级越高，默认-10，不用修改
  //   //         name(module, chunks, cacheGroupKey) {
  //   //           // 设定分包以后的文件模块名字，按照包名字替换拼接一下
  //   //           const moduleFileName = module
  //   //             .identifier()
  //   //             .split("/")
  //   //             .reduceRight((item) => item);
  //   //           const allChunksNames = chunks.map((item) => item.name).join("~");
  //   //           return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
  //   //         },
  //   //       },
  //   //     },
  //   //   },
  //   // },
  // },
  // chainWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     config.externals(assetsCDN.externals)
  //    }
  // }
});

/**
 * 静态CDN文件
 */
// const assetsCDN = {
//   externals: {
//       // 左侧key为项目中引入的名称，右侧value为包对外提供的名称
//       vue: "Vue",
//       "vue-router": "VueRouter",
//       "element-plus": "ElementPlus",
//       echarts: "echarts",
//       axios: "axios",
//   },
//   css: [
//       'https://cdn.bootcdn.net/ajax/libs/element-plus/2.3.3/index.css'
//   ],
//   js: [
//       'https://cdn.bootcdn.net/ajax/libs/vue/3.2.47/vue.cjs.min.js',
//       'https://unpkg.com/vue-router@4.0.3/dist/vue-router.global.js',
//       "https://cdn.bootcdn.net/ajax/libs/element-plus/2.3.3/index.full.min.js",
//       'https://cdn.bootcdn.net/ajax/libs/echarts/5.4.1/echarts.min.js',
//       'https://cdn.bootcdn.net/ajax/libs/axios/0.27.2/axios.min.js'
//   ]
// }
