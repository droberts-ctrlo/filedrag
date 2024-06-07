import {defineConfig} from 'vite'

export default defineConfig({
    test: {
        testMatch: ['**/*.test.js'],
        environment: 'jsdom',
        name: "Common Module",
    }
});