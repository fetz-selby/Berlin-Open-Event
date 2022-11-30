//I'm grabbing the data from the API and storing it in the variable data
const URL =
  "https://www.berlin.de/sen/web/service/maerkte-feste/wochen-troedelmaerkte/index.php/index/all.json?q=";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const fetcherAllData = () => fetcher(URL);

export { fetcherAllData };
