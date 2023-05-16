export interface IApiProps  {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: Valute;
}
export interface Valute {
  AUD: IvName;
  AZN: IvName;
  GBP: IvName;
  AMD: IvName;
  BYN: IvName;
  BGN: IvName;
  BRL: IvName;
  HUF: IvName;
  HKD: IvName;
  DKK: IvName;
  USD: IvName;
  EUR: IvName;
  INR: IvName;
  KZT: IvName;
  CAD: IvName;
  KGS: IvName;
  CNY: IvName;
  MDL: IvName;
  NOK: IvName;
  PLN: IvName;
  RON: IvName;
  XDR: IvName;
  SGD: IvName;
  TJS: IvName;
  TRY: IvName;
  TMT: IvName;
  UZS: IvName;
  UAH: IvName;
  CZK: IvName;
  SEK: IvName;
  CHF: IvName;
  ZAR: IvName;
  KRW: IvName;
  JPY: IvName;
}
export interface IvName {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}
