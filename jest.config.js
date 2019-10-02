module.exports = {
    "verbose": true,
    "testPathIgnorePatterns": [
        "/node_modules/",
        "/jspm_packages",
        "docs",
        "app"
    ],
        "unmockedModulePathPatterns": [
            "./node_modules/react"
        ],
        "modulePathIgnorePatterns": [
            "./docs/assets/"
        ],
        "setupFilesAfterEnv": ["./tests/jest/setupTest.js"],
        "moduleNameMapper": {
            "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/jest/__mocks__/fileMock.js",
            "\\.(css|less)$": "<rootDir>/tests/jest/__mocks__/styleMock.js"
        },
        "reporters": [
            "default",
            [
                "./node_modules/jest-html-reporter",
                {
                    "pageTitle": "Test Report",
                    "outputPath": "docs/library/reports/jest.html"
                }
            ]
        ]
};

