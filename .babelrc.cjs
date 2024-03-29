module.exports = {
    "plugins": [
        ["@babel/plugin-transform-modules-commonjs"],
        //["@babel/plugin-syntax-import-assertions"],
        ["babel-plugin-transform-import-meta"],
        [ "search-and-replace", {
            "rules": [
                {
                  "search": /\.mjs/,
                  "replace": ".cjs"
                },
                {
                  "search": /\/src\//,
                  "replace": "/dist/"
                }
            ]
        }]
    ]
}