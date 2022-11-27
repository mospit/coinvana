import React from "react";

const CoinRow = ({ coin }) => {
  return (
    <tr
      className="hover:bg-blue-100 items-center border-b-2 border-gray-100 text-center p-2"
      onClick={window.open}
    >
      <td className="px-6 text-gray-600 c mx-auto">{coin.market_cap_rank}</td>
      <td className="flex items-center text-gray-600 ">
        {" "}
        <img src={coin.image} className="w-5 h-5 m-1 rounded-full"></img>
        {coin.name}
        <span className="mx-1">({coin.symbol})</span>
      </td>
      <td>
        <span className="text-gray-600 ">{coin.current_price} </span>
        <span className="block text-sm text-green-500">
          {coin.price_change_percentage_24h}
        </span>
      </td>

      <td className="text-gray-600 ">{coin.total_volume}</td>
      <td className="text-gray-600 ">{coin.market_cap}</td>
    </tr>
  );
};

export default CoinRow;
