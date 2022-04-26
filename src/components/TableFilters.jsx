import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setListDisplay } from "../actions/list.action";
import { searchToken } from "../actions/search.action";
import { setStableState } from "../actions/stable.action";

function TableFilters() {
  const [showStable, setShowStable] = useState(true);
  const [showFavList, setShowFavList] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStableState(showStable));
    dispatch(setListDisplay(showFavList));
    dispatch(searchToken(search));
  }, [showStable, showFavList, search]);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            defaultChecked={true}
            onChange={() => setShowStable(!showStable)}
          />
          <label htmlFor="stableCoin">
            {showStable ? "Avec Stablecoin" : "Sans Stablecoin"}
          </label>
        </div>
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="favoris"
            defaultChecked={false}
            onChange={() => setShowFavList(!showFavList)}
          />
          <label htmlFor="favoris">
            Liste des Favoris
            <img src={process.env.PUBLIC_URL + "/assets/star-full.svg"} alt="icon star" />
          </label>
        </div>
        <div className="search-container">
          <input
            className="search-bar"
            type="search"
            placeholder="Rechercher..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default TableFilters;
