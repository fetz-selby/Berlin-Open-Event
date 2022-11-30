## About

This application helps you find block part around Berlin. It leverages on the open API
from [daten.berlin.de](https://www.berlin.de/sen/web/service/maerkte-feste/wochen-troedelmaerkte/index.php/index/all.json?q=). This app has a simple and easy to use UI which provide filtering
based on bezirk.

## Technology

This is a [next JS](https://nextjs.org/) application which uses [Material UI](https://mui.com/)
for some of the base UI components. [SWR](https://swr.vercel.app/) is used for data fetching and caching. [Zustand](https://www.npmjs.com/package/zustand) is used for state management.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO

- [ ] Add tests
- [ ] Add more filters (Search by bezeichnung, strasse, betreiber, etc)
- [ ] Add more details to the UI
