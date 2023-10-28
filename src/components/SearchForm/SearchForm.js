"use client";
import React, { useState } from "react";
import TextInput from "./TextInput.js";
import SearchResult from "./SearchResult.js";

import styles from "./SearchForm.module.css";

const ENDPOINT = "http://localhost:5001/api/data";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  // idle | loading | success | error | empty
  const [status, setStatus] = useState("idle");
  async function handleSearch(event) {
    event.preventDefault();

    setStatus("loading");

    const url = `${ENDPOINT}?searchTerm=${searchTerm}`;

    const response = await fetch(url);
    const json = await response.json();

    if (json.ok) {
      setSearchResults(json.filteredData);
      setStatus(json.filteredData.length > 0 ? "success" : "empty");
    } else {
      setStatus("error");
    }
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
        <TextInput
          required={true}
          label="Search for:"
          placeholder="firm polsoja"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button>Find</button>
      </form>
      <div className={styles.responseContainer}>
        {status === "loading" && <p>Searching...</p>}
        {status === "error" && <p>Oww, something went wrong!</p>}
        {status === "empty" && <p>Sorry, no results</p>}
        {status === "success" && (
          <div className={styles.successContainer}>
            <h2>Search Results:</h2>
            <div className={styles.searchResults}>
              {searchResults?.map((result) => (
                <SearchResult key={result.id} result={result} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default SearchForm;
