module.exports = function(api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env", {
                "targets": {
                     ie: 11,
                    "browsers": ["> 0.2%, not dead, not op_mini all"]
                },
                "modules": false,
                "debug":true,
                "useBuiltIns": 'usage',
                'corejs' : '2',
            }
        ],
        ["@babel/preset-react"]
    ];
    const plugins = [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-regenerator",
        "@babel/plugin-proposal-class-properties",
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ],
        "@babel/plugin-transform-react-constant-elements",
        "@babel/plugin-transform-react-inline-elements",
        "transform-es2015-shorthand-properties",
        "@babel/plugin-transform-runtime"
    ];

    return {
        presets,
        plugins,
        "env": {
            "test": {
                "presets": [
                    [
                        "@babel/preset-env",
                        {
                            "targets": {
                                "node": "current",
                                "browsers": ["> 0.25%, not dead, not op_mini all"]
                            }
                        }
                    ]
                ]
            }
        }
    }
}

