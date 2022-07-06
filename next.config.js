const withLinaria = require("next-linaria");

module.exports = withLinaria({
    experimental: {
        appDir: true,
    },
    output: "standalone",
});
