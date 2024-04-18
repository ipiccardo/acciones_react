export interface Share {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  mic_code: string;
  country: string;
  type: string;
}

const shares: Share[] = [];

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  list: async (): Promise<Share[]> => {
    // await sleep(750);

    const data = await fetch(
      "https://api.twelvedata.com/stocks?source=docs&exchange=NYSE",
      { next: { tags: ["accions"] } }
    )
      .then((res) => res.json())
      .then((newData) => newData);

    return data;
  },
  fetch: async (symbol: Share["symbol"]): Promise<Share> => {
    // await sleep(750);

    const share = shares.find((share) => share.symbol === symbol);

    if (!share) {
      throw new Error(`Accion with symbol ${symbol} not found`);
    }

    return share;
  },
  search: async (query: string | any): Promise<Share[]> => {
    const results = await api
      .list()
      .then((shares: any) =>
        shares.data.filter(
          (res: any) =>
            res.name.toLowerCase().includes(query?.toLowerCase()) ||
            res.symbol.toLowerCase().includes(query?.toLowerCase())
        )
      );

    return results;
  },
};

export default api;
