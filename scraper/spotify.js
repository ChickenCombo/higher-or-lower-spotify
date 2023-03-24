import { launch } from 'puppeteer';
import { spotifyArtistsList as links } from './artists.js';

(async () => {
  const browser = await launch();
  const page = await browser.newPage();

  for (const link of links) {
    await page.goto(link);
    await page.waitForSelector('.Ydwa1P5GkCggtLlSvphs');

    const artist = await page.evaluate(() => {
      const artist = document.querySelector(
        'h1.Type__TypeElement-sc-goli3j-0',
      ).textContent;

      const listeners = document
        .querySelector('span.Ydwa1P5GkCggtLlSvphs')
        .textContent.replace(/\D/g, '');

      const image_url = document
        .querySelector('button.uhDzVbFHyCQDH6WrWZaC')
        .style.backgroundImage.match(/url\("(.+)"\)/)[1];

      return { artist, listeners, image_url };
    });

    console.log(artist, ',');
  }

  await browser.close();
})();
