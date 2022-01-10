require = require("esm")(module);
const { routes } = require("./src/routes.js");

module.exports = {
	chainWebpack: (config) => {
		config.resolve.symlinks(false);
	},
	configureWebpack: {
		plugins: [
		]
	},
	devServer: {// Environment configuration
        host: "0.0.0.0",
		socket: "socket",
        port: 8080,
        https: false,
        hotOnly: false,
		public: "0.0.0.0:8080",
        disableHostCheck:true,
                 open: true // Configure to automatically start the browser
    },
	pwa: {
		name: process.env.VUE_APP_NAME,
        workboxOptions: {
            skipWaiting: true,
        }
    },
	css: {
		loaderOptions: {
			scss: {
				additionalData: "@import \"~@/styles/variables.scss\";"
			},
		}
	},
	pluginOptions: {
		webpackBundleAnalyzer: {
			openAnalyzer: false,
			analyzerMode: process.env.NODE_ENV === "development" ? "server" : "static",
			reportFilename: "build_analysis.html"
		},
	},
	publicPath: process.env.NODE_ENV === "production"
	  ? "/geonarrative/generator/" 
	  // Change this ^^ path if the app won't be at root level ie website.com/app/ - put "/app/"
	  : "/"
  };