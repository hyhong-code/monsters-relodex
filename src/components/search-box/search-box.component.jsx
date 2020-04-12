import React from "react";
import "./search-box.styles.css";

// We can also destruct props
export const SearchBox = ({ placeholder, handleChange }) => (
  <input className="search" onChange={handleChange} type="search" placeholder={placeholder} />
);
