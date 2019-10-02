module.exports = function(api) {
    api.cache(true);

    const presets = [
        [
            'es2015', 
            'es2016', 
            'es2017', 
            'latest',
            ["env",{
                "targets": {
                     ie: 11,
                    "browsers": ["> 0.2%, not dead, not op_mini all, Explorer 11, last 4 Edge versions"]
                },
                debug: true,
                "useBuiltIns": true
            }],
            "react",
            "stage-0"
        ],
        "ignore": [
            "node_modules"
        ],
    ];
    const plugins = [
        "transform-es2015-arrow-functions",
        "transform-class-properties",
        "syntax-class-properties",
        "transform-decorators",
        "transform-react-constant-elements",
        "transform-react-inline-elements",
        "transform-runtime", 
        "transform-regenerator"    
    ];

    return {
        presets,
        plugins,
    }
}

