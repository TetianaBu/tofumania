"use client";
import React, { useState } from "react";
import TextInput from "./TextInput.js";
import SearchResult from "./SearchResult.js";
import styles from "./SearchForm.module.css";
import useSWR from "swr";

const ENDPOINT = 'https://tofumania.vercel.app/api/products';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();

  return json.data;
}


const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error } = useSWR(
    searchTerm ? `${ENDPOINT}?searchTerm=${searchTerm}` : null,
    fetcher
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value); 
  };

  if (error) {
    console.error("Error fetching data:", error);
    return <div>An error occurred while fetching data.</div>;
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <TextInput
          required={true}
          label="Search for:"
          placeholder="firm polsoja"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Find</button>
      </form>
      <div className={styles.responseContainer}>
        {data ? (
          <div className={styles.successContainer}>
            <h2>Search Results:</h2>
            <div className={styles.searchResults}>
              {data.filteredData.map((result) => (
                <SearchResult key={result.id} result={result} />
              ))}
            </div>
          </div>
        ) : (
          searchTerm && <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
