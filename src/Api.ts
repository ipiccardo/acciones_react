export interface Share {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  mic_code: string;
  country: string;
  type: string;
  values: [];
}

const shares: Share[] = [];

const apiKey = process.env.REACT_APP_API_KEY;

const api = {
  list: async (): Promise<Share[]> => {
    const data = await fetch(
      "https://api.twelvedata.com/stocks?source=docs&exchange=NYSE",
      // { next: { tags: ["accions"] } }
      { cache: "force-cache" }
    )
      .then((res) => res.json())
      .then((newData) => newData);
    shares.push(...data.data);
    return data;
  },
  fetch: async (symbol: Share["symbol"]): Promise<Share> => {
    const share = shares.find((share) => share.symbol === symbol);

    if (share) {
      return share;
    } else {
      throw new Error(`Accion with symbol ${symbol} not found`);
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
  price: async (symbol: Share["symbol"]): Promise<Share> => {
    const data = await fetch(
      `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=5min&start_date=2021-04-16%2009:48:00&end_date=2021-04-16%2019:48:00&apikey=${apiKey}`
      // { next: { tags: ["accions"] } }
    )
      .then((res) => res.json())
      .then((newData) => newData);

    return data;
  },
};

export default api;
