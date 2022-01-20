import React from "react";
import { useState } from "react";
import Info from "./Info";
import "./styles/Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchBy === "artist") {
      fetch(`/artist/${searchTerm}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setResult(res);
        });
    } else {
      fetch(`/tracks/${searchTerm}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setResult(res);
        });
    }
  };
  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
        <select
          className="input"
          value={searchBy}
          onChange={(e) => {
            setSearchBy(e.target.value);
          }}
        >
          <option value="id" className="input">
            Search by ID
          </option>
          <option value="artist" className="input">
            Search by Artist
          </option>
        </select>
        <button className="btn">Search</button>
      </form>
      <Info result={result} />
    </div>
  );
};

export default Search;
