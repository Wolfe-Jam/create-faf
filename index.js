#!/usr/bin/env node

/**
 * create-faf - Unscoped wrapper for @faff/create
 *
 * This package exists as a catch-all for users who type:
 *   npm create faf
 *
 * It simply redirects to the main @faff/create package.
 * This follows the Vercel pattern (create-next-app → @vercel/*)
 */

import { spawn } from 'child_process';

console.log('');
console.log('Redirecting to @faff/create...');
console.log('');

// Run npx @faff/create with all arguments passed through
const args = process.argv.slice(2);
const child = spawn('npx', ['-y', '@faff/create', ...args], {
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
