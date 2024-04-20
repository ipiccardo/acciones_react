export interface FirstData {
  data: Share[];
}

export interface CurrentPageData {
  country: string;
  currency?: string;
  exchange: string;
  mic_code: string;
  name: string;
  symbol: string;
  type: string;
}

export interface Header {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  mic_code: string;
  country: string;
  type: string;
}

export interface Share {
  symbol: string;
  name?: string;
  currency: string;
  exchange: string;
  mic_code: string;
  country: string;
  type: string;
}

export interface ShareValues {
  dateTime: string;
  close: string;
  high: string;
  low: string;
  open: string;
  volume: string;
}

export interface Price {
  meta: {
    symbol: string;
    interval: string;
    currency: string;
    exchange_timezone: string;
    exchange: string;
    mic_code: string;
    type: string;
  };
  status: string;
  values: ShareValues[];
  price: any;
}

export interface ChartType {
  price: Price;
  sinceDate: string;
  untilDate: string;
  isRealTime: boolean;
  interval: string;
  setNewCall: any;
  newCall: boolean;
}
