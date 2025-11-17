import { GoHome } from "react-icons/go";
import { TbChartCandleFilled } from "react-icons/tb";
import { BiTimer } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
export const bottomBarNavItems = [
  {
    label: "Home",
    url: "/",
    Icon: GoHome,
  },
  {
    label: "Trade",
    url: "/trade",
    Icon: TbChartCandleFilled,
  },
  {
    label: "History",
    url: "/history",
    Icon: BiTimer,
  },
  {
    label: "Profile",
    url: "/profile",
    Icon: FaUser,
  },
];

export const tradingCategories = [
  { id: 1, label: "Favourites" },
  { id: 2, label: "Forex" },
  { id: 3, label: "Crypto" },
  { id: 4, label: "Indices" },
  { id: 5, label: "Stocks" },
  { id: 6, label: "Commodities" },
  { id: 7, label: "Metals" },
  { id: 8, label: "Energies" },
  { id: 9, label: "ETFs" },
  { id: 10, label: "Synthetic" },
  { id: 11, label: "Trending" },
  { id: 12, label: "New" },
  { id: 13, label: "Popular" },
];

export interface TradingInstrument {
  id: number;
  time: string;
  currencyPair: string;
  change: number;
  changePercent: number;
  currentValue: number;
  low: number;
  high: number;
  isPositive: boolean; // Determines if value is green (true) or red (false)
}

export const tradingInstruments: TradingInstrument[] = [
  {
    id: 1,
    time: "15:00:00",
    currencyPair: "EUR/GBP",
    change: 30,
    changePercent: 23.2,
    currentValue: 1478.256369,
    low: 235698,
    high: 25.3659,
    isPositive: false, // Red
  },
  {
    id: 2,
    time: "15:00:00",
    currencyPair: "EUR/USD",
    change: 30,
    changePercent: 23.2,
    currentValue: 1478.256369,
    low: 235698,
    high: 25.3659,
    isPositive: true, // Green
  },
  {
    id: 3,
    time: "15:00:00",
    currencyPair: "GBP/USD",
    change: 30,
    changePercent: 23.2,
    currentValue: 1478.256369,
    low: 235698,
    high: 25.3659,
    isPositive: false, // Red
  },
  {
    id: 4,
    time: "15:00:00",
    currencyPair: "USD/JPY",
    change: 30,
    changePercent: 23.2,
    currentValue: 1478.256369,
    low: 235698,
    high: 25.3659,
    isPositive: true, // Green
  },
  {
    id: 5,
    time: "15:00:00",
    currencyPair: "AUD/USD",
    change: 30,
    changePercent: 23.2,
    currentValue: 1478.256369,
    low: 235698,
    high: 25.3659,
    isPositive: false, // Red
  },
  {
    id: 6,
    time: "15:00:00",
    currencyPair: "USD/CAD",
    change: 30,
    changePercent: 23.2,
    currentValue: 1478.256369,
    low: 235698,
    high: 25.3659,
    isPositive: true, // Green
  },
  {
    id: 7,
    time: "15:00:00",
    currencyPair: "NZD/USD",
    change: 30,
    changePercent: 23.2,
    currentValue: 1478.256369,
    low: 235698,
    high: 25.3659,
    isPositive: false, // Red
  },
  {
    id: 8,
    time: "15:00:00",
    currencyPair: "USD/CHF",
    change: 30,
    changePercent: 23.2,
    currentValue: 1478.256369,
    low: 235698,
    high: 25.3659,
    isPositive: true, // Green
  },
  {
    id: 9,
    time: "15:00:00",
    currencyPair: "EUR/JPY",
    change: 30,
    changePercent: 23.2,
    currentValue: 1478.256369,
    low: 235698,
    high: 25.3659,
    isPositive: false, // Red
  },
  {
    id: 10,
    time: "15:00:00",
    currencyPair: "GBP/JPY",
    change: 30,
    changePercent: 23.2,
    currentValue: 1478.256369,
    low: 235698,
    high: 25.3659,
    isPositive: true, // Green
  },
];
