import { Share, Price } from "../types";

const shares: Share[] = [];

const apiKey = process.env.REACT_APP_API_KEY_B;

const defaultUrl = "https://api.twelvedata.com/stocks?source=docs";
const startfilteredUrl =
  "https://api.twelvedata.com/stocks?source=docs&exchange=NYSE";

const url = startfilteredUrl;

const api = {
  list: async (): Promise<Share[]> => {
    const data = await fetch(url)
      .then((res) => res.json())
      .then((newData) => newData);
    if (!(url.length > 43)) {
      shares.push(...data.data);
    }
    return data;
  },
  fetch: async (
    symbol: Share["symbol"],
    name: Share["name"]
  ): Promise<Share> => {
    const share = shares.find((share) => share.symbol === symbol);
    if (share) {
      return share;
    } else {
      const data = await fetch(
        `https://api.twelvedata.com/stocks?symbol=${symbol}&name=${name}`
      )
        .then((res) => res.json())
        .then((newData) =>
          newData.data.find((share: any) => share.name === name)
        );
      return data;
    }
  },
  search: async (query: string | any): Promise<Share[]> => {
    const results = await api.list().then((shares: any) =>
      shares.data.filter((res: any) => {
        if (query?.includes("symbol")) {
          const newQuery = query.slice(7);
          return res.symbol.toLowerCase().includes(newQuery?.toLowerCase());
        } else {
          return res.name.toLowerCase().includes(query?.toLowerCase());
        }
      })
    );
    return results;
  },
  price: async (symbol: Share["symbol"]): Promise<Price> => {
    const data = await fetch(
      `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=5min&apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((newData) => newData);

    return data;
  },
};

export default api;
