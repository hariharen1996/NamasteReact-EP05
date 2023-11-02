import { resList } from "../mockData/config";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurentList] = useState(resList);
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restaurantList.filter(
              (item) => item.data.avgRating > 4
            );
            setRestaurentList(filteredData);
          }}
        >
          Top Rated Restaurents
        </button>
        <input
          type="search"
          className="search-input"
          placeholder="search here.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="restaurent-container">
        {restaurantList.map((rescard) => (
          <RestaurentCard rescard={rescard} key={rescard.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
