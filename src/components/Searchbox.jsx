import React from "react";

export default function Searchbox({ handleSearch }) {
  return (
    <input
      className="searchbox"
      type="text"
      placeholder="Search Customer"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
