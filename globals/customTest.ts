import { test as base } from '@playwright/test';

export type TestOptions = {
  fullName: string;
};

export const test = base.extend<TestOptions>({
  fullName: ['John Doe', { option: true }],
});