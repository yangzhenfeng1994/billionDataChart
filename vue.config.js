module.exports = {
	devServer: {
		proxy: {
			'/node': {
				target: 'localhost',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			}
		}
	}
};
