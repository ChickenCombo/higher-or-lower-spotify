import { launch } from 'puppeteer';
import { spotifyArtistsList } from './artists.js';
import fs from 'fs/promises';

async function scrapeArtistData(link, page) {
  try {
    await page.goto(link);
    await page.waitForSelector('.Ydwa1P5GkCggtLlSvphs');

    const artist = await page.$eval(
      'h1.Type__TypeElement-sc-goli3j-0',
      (element) => element.textContent
    );

    const listeners = await page.$eval(
      'span.Ydwa1P5GkCggtLlSvphs',
      (element) => element.textContent.replace(/\D/g, '')
    );

    const image_url = await page.$eval(
      'button.uhDzVbFHyCQDH6WrWZaC',
      (element) => element.style.backgroundImage.match(/url\("(.+)"\)/)[1]
    );

    console.log(`${artist} scraped successfully`);

    return { artist, listeners, image_url };
  } catch (error) {
    console.log(`Failed to scrape ${link}, skipping`);
    return null;
  }
}

async function exportJson(data, fileName) {
  const jsonData = JSON.stringify(data);

  try {
    await fs.writeFile(fileName, jsonData);
    console.log(`Data exported to ${fileName} successfully`);
  } catch (error) {
    console.log(`Failed to export data: ${error}`);
  }
}

async function main() {
  const browser = await launch();
  const page = await browser.newPage();
  const artistsData = [];

  for (const link of spotifyArtistsList) {
    const artist = await scrapeArtistData(link, page);

    if (!artist) {
      continue;
    }

    artistsData.push(artist);
  }

  await exportJson(artistsData, 'artists.json');

  await browser.close();
}

main();
