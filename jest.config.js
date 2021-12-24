module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '.(ts|tsx)$': 'esbuild-jest',
      ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
    testMatch: ['<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx}'],
    testURL: 'http://localhost',
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts']
}