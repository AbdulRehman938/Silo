#!/usr/bin/env node

/**
 * Simple test runner for BlogDetail component tests
 * Run with: node test-runner.js
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import and run the tests
const testFile = `file://${join(__dirname, 'src', 'pages', '__tests__', 'BlogDetail.test.js').replace(/\\/g, '/')}`;

try {
  const tests = await import(testFile);
  await tests.runTests();
} catch (error) {
  console.error('Error running tests:', error.message);
  process.exit(1);
}