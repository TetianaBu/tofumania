"use client";
import React, { useState } from "react";
import TextInput from "./TextInput.js";
import SearchResult from "./SearchResult.js";
import styles from "./SearchForm.module.css";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error } = useSWR(
    searchTerm ? `/api/products?searchTerm=${searchTerm}` : null,
    fetcher
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // setSearchTerm(event.target.value); // No need to set searchTerm here, it's managed by the input field.
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
