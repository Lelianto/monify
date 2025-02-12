/** @type {import('jest').Config} */
export default {
    preset: "ts-jest", // Use ts-jest for TypeScript support
    testEnvironment: "node", // Use Node.js environment
    transform: {
        "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files
    },
    extensionsToTreatAsEsm: [".ts"],
    globals: {
        "ts-jest": {
            useESM: true, // Enable ESM support for Jest
        },
    },
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1", // Fixes import paths
    },
};
