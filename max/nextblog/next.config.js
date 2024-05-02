const { PHASE_DEVELOPMENT_SERVER } = require("next/config");

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            webpack: (config) => {
                config.node = {
                    fs: "empty",
                };
                return config;
            },
            env: {
                dbUser: "nextblogs",
                dbPass: "nextblogs",
                dbCluster: "cluster0",
                dbName: "blogs-dev",
            },
        };
    }
    return {
        webpack: (config) => {
            config.node = {
                fs: "empty",
            };
            return config;
        },
        env: {
            dbUser: "nextblogs",
            dbPass: "nextblogs",
            dbCluster: "cluster0",
            dbName: "blogs",
        },
    };
};
