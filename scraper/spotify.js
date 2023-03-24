import { launch } from 'puppeteer';
import { spotifyArtistsList } from './artists.js';
import fs from 'fs';


(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  const artistsData = [];

  for (const link of spotifyArtistsList) {
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

    artistsData.push(artist);
  }

  await browser.close();

  const json = JSON.stringify(artistsData);
  fs.writeFile('artists.json', json, 'utf8', (error) => {
    if (error) {
      console.log('Error writing file:', error);
    } else {
      console.log('File saved successfully');
    }
  });
})();
