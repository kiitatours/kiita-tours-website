import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:4321';
const label = process.argv[3] || '';

const dir = 'temporary-screenshots';
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const timestamp = Date.now();
const filename = path.join(dir, `screenshot-${label ? label + '-' : ''}${timestamp}.png`);

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });
await page.screenshot({ path: filename, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${filename}`);
