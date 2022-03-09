import { PlaywrightTestConfig } from '@playwright/test';
import { TestOptions } from './globals/customTest';
import { devices } from '@playwright/test';

let config: PlaywrightTestConfig<TestOptions> = {
  globalSetup: './globals/globalSetup.ts',
  globalTeardown: './globals/globalTeardown.ts',
  reporter: [
    // ['junit', { outputFile: 'results.xml' }],
    ['./reporters/my-awesome-reporter.ts', {}],
    ['allure-playwright', {}],
  ],
  use: {
    headless: false,
    // reporter: './reporters/my-awesome-reporter.js',
    screenshot: 'only-on-failure',

    video: 'retry-with-video',
  },
  projects: [
    // {
    //   name: 'Desktop',
    //   use: {
    //     browserName: 'chromium',
    //     viewport: { width: 1920, height: 1080}
    //   }
    // }
    getProject('Desktop', 'chromium', { width: 1920, height: 1080 }),
    // getProject('Mobile', 'chromium',  devices['Pixel 5'].viewport),
    // getProject('Desktop', 'firefox', { width: 1920, height: 1080 }),
    // getProject('Mobile', 'firefox',  devices['Pixel 5'].viewport),
    // getProject('Desktop', 'webkit', { width: 1920, height: 1080 }),
    // getProject('Mobile', 'webkit', devices['iPhone 12 Pro Max'].viewport),
  ]
};

export default config;

function getProject(projectName, browserName, vp) {
  return {
    name: projectName,
    use: {
      browserName: browserName,
      // description: `${browserName}${projectName}`,
      viewport: { width: vp.width, height: vp.height }
    },
    testDir: 'test/fixtures',
    testMatch: '**/**/*.test.ts',
  };
}
