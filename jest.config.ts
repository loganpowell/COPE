module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom", //"jsdom", // "node",
    testMatch: [ "**/**/*.test.(js|ts|tsx)" ],
    verbose: true,
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    transformIgnorePatterns: [ "node_modules/?!(@-0)" ],
    watchPathIgnorePatterns: [ "^.+\\.repl.(ts|js)$" ]
}
