module.exports = {
    devServer:{
        port:10000,
        headers:{
            "Access-Control-Allow-Origin":"*"
        },
        overlay: {
            warnings: false,
            errors: false
        },
    },
    configureWebpack:{
        output:{
            library:"micro-vue",
            libraryTarget:"umd",
            jsonpFunction: `webpackJsonp_micro-vue`,
        }

    },
    lintOnSave: false
}
