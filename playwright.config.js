const { devices } = require('playwright');

let config = {
  use: {
    headless: true,
    reporter: 'list',
    // reporter: './reporters/my-awesome-reporter.js',
    screenshot: 'only-on-failure',
    testDir: 'test',
    testMatch: '**/integration-test/tests/**/*.test.js',    
    video: 'retry-with-video',
  },
  projects: [
    getProject('Desktop', 'chromium', { width: 1920, height: 1080 }),
    getProject('Mobile', 'chromium',  devices['Pixel 5'].viewport),
    // getProject('Desktop', 'firefox', { width: 1920, height: 1080 }),
    // getProject('Mobile', 'firefox',  devices['Pixel 5'].viewport),
    // getProject('Desktop', 'webkit', { width: 1920, height: 1080 }),
    // getProject('Mobile', 'webkit', devices['iPhone 12 Pro Max'].viewport),
  ]
};

module.exports = config;

function getProject(projectName, browserName, viewport) {
  return result = {
    name: projectName,
    use: {
      browserName: browserName,
      description: `${browserName}${projectName}`,
      viewport: viewport      
    }
  };
}
