import React, { useState } from "react";
import CoinChart from "./CoinChart";
import PercentChange from "./PercentChange";
import StarIcon from "./StarIcon";

function TableLine({ coin, index }) {
  const [showChart, setShowChart] = useState(false);

  const priceFormater = (num) => {
    if (Math.round(num).toString.length < 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(num);
    } else {
      return num;
    }
  };

  const mktCapFormater = (num) => {
    let newnum = String(num).split("").slice(0, -6);
    return Number(newnum.join(""));
  };

  return (
    <div className="table-line">
      <div className="infos-container">
        <StarIcon coinId={coin.id} />
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} alt="logo" height="20" />
        </div>
        <div className="infos">
          <div
            className="chart-img"
            onMouseEnter={() => setShowChart(true)}
            onMouseLeave={() => setShowChart(false)}
          >
            <img src={process.env.PUBLIC_URL + "/assets/chart-icon.svg"} alt="chart-icon" />
            <div className="chart-container" id={coin.name}>
              {showChart && <CoinChart coinId={coin.id} coinName={coin.name} />}
            </div>
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            href={`https://www.coingecko.com/fr/pi%C3%A8ces/${coin.name
              .toLowerCase()
              .replace(" ", "-")
              .replace(" ", "-")
              .replace(" ", "-")}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="coingecko-container">
              <img src={process.env.PUBLIC_URL + "/assets/info-icon.svg"} alt="" />
              <span className="go-to-info">Go to see {coin.name} on CoinGecko</span>
            </div>
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price)?.toLocaleString()} $</p>
      <p className="mktcap">
        {mktCapFormater(coin.market_cap)?.toLocaleString()} M$
      </p>
      <p className="volume">{coin.total_volume?.toLocaleString()} $</p>
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
      <PercentChange percent={coin.price_change_percentage_24h_in_currency} />
      <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
      {coin.ath_change_percentage > -3 ? (
        <p>ATH !</p>
      ) : (
        <PercentChange percent={coin.ath_change_percentage} />
      )}
    </div>
  );
}

export default TableLine;
