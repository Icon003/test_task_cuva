module.exports = {
	publicPath: "/test_task_cuva/",
	css: {
	  loaderOptions: {
		sass: {
			prependData: `@import "@/assets/styles/variables.scss"; @import "@/assets/styles/fonts.scss";`,
		},
	  }
	}
}
