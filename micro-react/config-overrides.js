module.exports = {
    webpack: (config, env) =>{
        config.output.library = 'micro-react';
        config.output.libraryTarget = "umd";
        config.output.jsonpFunction = 'micro-react';
        return config;
    },
    devServer: (configFunction)=>{
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            config.port = 20000;
            config.headers = {
                "Access-Control-Allow-Origin": "*"
            };
            return config;
        }
    }
}