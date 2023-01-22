## About

This application helps you find block party around Berlin. It leverages on the open API
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

## Design
Design file is design.dio, and can be viewed with design.io
<img width="689" alt="Screenshot 2022-11-30 at 16 15 50" src="https://user-images.githubusercontent.com/6938921/204844971-43724843-7953-4cd2-b440-f661fca68cf3.png">


## TODO

- [ ] Add tests
- [ ] Add more filters (Search by bezeichnung, strasse, betreiber, etc)
- [ ] Add more styling to the UI
- [ ] Add more details to the UI (Opening hours, etc)
- [ ] Add more data (Add more data from the API)
- [ ] Implement pagination
