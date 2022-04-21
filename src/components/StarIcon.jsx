import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { decrFavLength, incrFavLength } from "../actions/fav.action";

function StarIcon({ coinId }) {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      }
    }
  }, []);

  const idChecker = (id) => {
    let favList = null;

    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }

    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
        dispatch(decrFavLength())
      } else {
        window.localStorage.coinList = [...favList, coinId];
        setLike(true);
        dispatch(incrFavLength())
      }
    } else {
      window.localStorage.coinList = coinId;
      setLike(true);
      dispatch(incrFavLength())
    }
  };

  return (
    <img
      onClick={() => idChecker(coinId)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
    />
  );
}

export default StarIcon;
