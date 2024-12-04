import React, { useState } from "react";
import useStoreData from "./StoreData";
import Profile from "./Profile";
import "./App.css";

function Gallery() {
  const storeData = useStoreData(); // Fetch data using custom hook
  const [selectedRegion, setSelectedRegion] = useState("Tohoku");

  if (!storeData) {
    return <p>Loading...</p>; // Display a loading state while data is being fetched
  }

  const stores = storeData.regions[selectedRegion];

  return (
    <div>
      <h1>店舗情報</h1>
      <p>
        地域を選択:
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="Tohoku">東北</option>
          <option value="Kanto">関東</option>
          <option value="Kansai">関西</option>
        </select>
      </p>
      <div>
        {stores.map((store, index) => (
          <Profile
            key={index}
            storeName={store.storeName}
            address={store.address}
            phoneNumber={store.phoneNumber}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
