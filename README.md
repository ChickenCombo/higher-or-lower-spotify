# Higher or Lower: Spotify Edition

A recreation of this game: [Higher or Lower: Anime Edition](https://github.com/ChickenCombo/higher-or-lower-anime), but using React and Spotify's data.

A Spotify web scraper has also been programmed using [Puppeteer](https://pptr.dev/) that scrapes the artist's name, monthly listeners, and the artist's image, to make it easier to update the game's data.

Play here: https://higherorlower-spotify.netlify.app/

## 📄 About

Tech Stacks:

- [ReactJS](https://reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## ⚙️ Getting Started

### Project Setup

How to setup a local environment:

1. Clone the repository.

```
git clone ChickenCombo/higher-or-lower-spotify
```

2. Access the project directory and install dependencies.

```
cd higher-or-lower-spotify
npm install
```

4. Start a the server.

```
npm run dev
```

5. View the website at your local machine.

```
http://localhost:5173/
```

How to scrape your own Spotify data:

1. Update the `artists.ts` file with the Spotify URLs of the artists you want to scrape data from.

2. Run the following commands:

```
cd scraper
npx vite-node spotify.ts
```

3. Replace the values `Artist.tsx` with your own extracted data.
