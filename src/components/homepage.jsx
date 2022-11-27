import React from "react";
import { useState, useEffect } from "react";
import "../styles.css";
import "../styles/tailwind-pre-build.css";
import CoinRow from "../CoinRow";
import Carousel from "./carousel";

const COINGECKO = "https://api.coingecko.com/api/v3/";
const coin1 = {
  id: "bitcoin",
  symbol: "btc",
  name: "Bitcoin",
  asset_platform_id: null,
  market_price: "$160000",
  market_cap: "$500000000000",
  day_change: 0.75788,
  thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
  large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
};
const coin2 = {
  thumb:
    "https://assets.coingecko.com/coins/images/20635/thumb/1Ab_Umee_Brand_Icon_Full_Color.png?1645018295",
  name: "Polygon",
  symbol: "btc",
  price_btc: "4.33333"
};
export default function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    loadCoins();
  }, []);

  const loadCoins = async () => {
    await fetch(
      `${COINGECKO}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
      .then((response) => response.json())
      .then((data) => setCoins(data));
    trendingCoins();
  };
  const searchCoin = async (coin) => {
    await fetch(`{COINGECKO}search?query=${coin}`)
      .then((response) => response.json())
      .then((data) => setCoins(data));
  };

  const trendingCoins = async () => {
    await fetch(`${COINGECKO}search/trending`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className=" w-full h-screen ">
      <div className="bg-blue-900">
        <div className="flex text-xs items-center p-1 max-w-5xl mx-auto text-white font-bold">
          <span className="flex mx-2 ">
            Coins<p className="mx-1">13210</p>
          </span>

          <span className="flex mx-2">
            Market Cap<p className="mx-1">12123213200032432000</p>
          </span>
          <span className="flex mx-2">
            24h Volume<p className="mx-1">13210</p>
          </span>
          <span className="flex mx-2">
            Dominance<p className="mx-1">13210</p>
          </span>
        </div>
      </div>
      <h1 className="mx-4">Coinvana</h1>

      <div className=" flex items-center p-6 my-4 shadow">
        <div className="invisible md:visible">
          <a className="px-3 py-2 text-gray-600 hover:text-blue-400" href="">
            Portfolio
          </a>
          <a className="px-3 py-2 text-gray-600 hover:text-blue-400" href="">
            Coins
          </a>
          <a className="px-3 py-2 text-gray-600 hover:text-blue-400" href="">
            New Coins
          </a>
          <a className="px-3 py-2 text-gray-600 hover:text-blue-400" href="">
            Gainers & Losers
          </a>
          <a className="px-3 py-2 text-gray-600 hover:text-blue-400" href="">
            Categories
          </a>
          <a className="px-3 py-2 text-gray-600 hover:text-blue-400" href="">
            DeFi
          </a>
          <a className="px-3 py-2 text-gray-600 hover:text-blue-400" href="">
            NFT
          </a>
        </div>
        <div className="flex">
          <div className=" flex items-center pl-3 pointer-events-none border-2 border-slate-200 rounded-l-lg">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>

            <input
              type="search"
              id="default-search"
              className="py-2 px-3"
              placeholder="Search"
              value="matic"
              onChange={() => {}}
            />
          </div>
          <button
            className=" bg-blue-400 text-white rounded-r-lg px-3 py-1"
            onClick={() => {}}
          >
            SEARCH
          </button>
        </div>
      </div>
      <div>
        <div className="overflow-hidden mx-auto px-4">
          <table className=" table w-full overflow-hidden mx-auto ">
            <thead className=" text-gray-700 w-full">
              <tr>
                <th>Rank</th>
                <th className="text-left">Name</th>
                <th>
                  <p>Price /</p>
                  <span>24h</span>
                </th>

                <th>24h Volume</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {coins?.length > 0 ? (
                <>
                  {coins.map((coin) => (
                    <CoinRow coin={coin} />
                  ))}
                </>
              ) : (
                <tr className="hover:bg-gray-100" onClick={window.open}>
                  <td>
                    <img src={coin1.thumb} className="p-3"></img>
                  </td>
                  <td>{coin1.name}</td>
                  <td>{coin1.market_price}</td>
                  <td>{coin1.market_price}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 grid grid-3">
        <div className="rounded-lg bg-white shadow-md w-64 h-24 bg-red-100">
          <img src={coin2.thumb} alt="" />
          <span>{coin2.name}</span>
          <span>{coin2.price_btc}</span>
        </div>
        <div className="rounded-lg bg-white shadow-md w-64 h-24 bg-red-100">
          <img src={coin2.thumb} alt="" />
          <span>{coin2.name}</span>
          <span>{coin2.price_btc}</span>
        </div>
        <div className="rounded-lg bg-white shadow-md w-64 h-24 bg-red-100">
          <img src={coin2.thumb} alt="" />
          <span>{coin2.name}</span>
          <span>{coin2.price_btc}</span>
        </div>
        <div className="rounded-lg bg-white shadow-md w-64 h-24 bg-red-100">
          <img src={coin2.thumb} alt="" />
          <span>{coin2.name}</span>
          <span>{coin2.price_btc}</span>
        </div>
        <div className="rounded-lg bg-white shadow-md w-64 h-24 bg-red-100">
          <img src={coin2.thumb} alt="" />
          <span>{coin2.name}</span>
          <span>{coin2.price_btc}</span>
        </div>
        <div className="rounded-lg bg-white shadow-md w-64 h-24 bg-red-100">
          <img src={coin2.thumb} alt="" />
          <span>{coin2.name}</span>
          <span>{coin2.price_btc}</span>
        </div>
        <div className="rounded-lg bg-white shadow-md w-64 h-24 bg-red-100">
          <img src={coin2.thumb} alt="" />
          <span>{coin2.name}</span>
          <span>{coin2.price_btc}</span>
        </div>
        <div className="rounded-lg bg-white shadow-md w-64 h-24 bg-red-100">
          <img src={coin2.thumb} alt="" />
          <span>{coin2.name}</span>
          <span>{coin2.price_btc}</span>
        </div>
      </div>
    </div>
  );
}
