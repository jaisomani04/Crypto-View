import React from 'react'
import { Link } from 'react-router-dom';

export default function ListItems({ coin}) {
  return (
    <div className="home-crypto">
      

      <Link to={`${coin.id}`}>
      <span className="home-crypto-image"><img src={coin.image} /></span>
      <span className="home-crypto-name">{coin.name}</span>

      {coin.priceBtc && 
        <span className="home-crypto-prices">
          <span className="home-ctypto-btc">
            <img src = "/bitcoin.webp" />
            {coin.priceBtc} BTC</span>
          <span className="home-ctypto-usd">({coin.priceUsd} USD)</span>
        </span>
      }
      </Link>
    </div> 
  );
}  