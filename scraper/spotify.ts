import { launch, Browser, Page } from 'puppeteer';
import { spotifyArtistsList } from './artists.js';
import fs from 'fs/promises';
import { Artist } from '@/utils/Types.js';

async function scrapeArtistData(link: string, page: Page) {
  try {
    await page.goto(link);
    await page.waitForSelector('.Ydwa1P5GkCggtLlSvphs');

    const artist: string | null = await page.$eval(
      'h1.Type__TypeElement-sc-goli3j-0',
      (element: Element): string | null => element.textContent?.trim() || null
    );

    const listeners: string | null = await page.$eval(
      'span.Ydwa1P5GkCggtLlSvphs',
      (element: Element): string | null => {
        const text = element.textContent?.replace(/\D/g, '').trim();
        return text ? text : null;
      }
    );

    const image_url: string | null = await page.$eval(
      'button.uhDzVbFHyCQDH6WrWZaC',
      (element: HTMLElement): string | null => {
        const match = element.style.backgroundImage?.match(/url\("(.+)"\)/);
        return match ? match[1] : null;
      }
    );

    if (!artist || !listeners || !image_url) {
      console.log(`Failed to scrape ${link}, skipping`);
      return null;
    }

    console.log(`${artist} scraped successfully`);

    return { artist, listeners, image_url };
  } catch (error) {
    console.log(`Failed to scrape ${link}, skipping`);
    return null;
  }
}

async function exportJson(data: Array<Artist>, fileName: string) {
  const jsonData = JSON.stringify(data);

  try {
    await fs.writeFile(fileName, jsonData);
    console.log(`Data exported to ${fileName} successfully`);
  } catch (error) {
    console.log(`Failed to export data: ${error}`);
  }
}

async function main() {
  const browser: Browser = await launch();
  const page: Page = await browser.newPage();
  const artistsData: Array<Artist> = [];

  for (const link of spotifyArtistsList) {
    const artist: Artist | null = await scrapeArtistData(link, page);

    if (artist) {
      artistsData.push(artist);
    }
  }

  await exportJson(artistsData, 'artists.json');

  await browser.close();
}

main();
