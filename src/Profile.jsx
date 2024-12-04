import React from "react";
import "./App.css";

function Profile({ storeName, address, phoneNumber }) {
  return (
    <section className="profile">
      <h2>・{storeName}</h2>
      <ul>
        <li>住所：{address}</li>
        <li>電話番号：{phoneNumber}</li>
      </ul>
    </section>
  );
}

export default Profile;
