"use client";
import React, { useState } from "react";
import TextInput from "./TextInput.js";
import SearchResult from "./SearchResult.js";
import styles from "./SearchForm.module.css";
import useSWR from "swr";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    searchTerm ? `/api/products?searchTerm=${searchTerm}` : null,
    fetcher
  );

  if (error) return <div>An error occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className={styles.form}
      >
        <TextInput
          required={true}
          label="Search for:"
          placeholder="firm polsoja"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button type="submit">Find</button>
      </form>
      <div className={styles.responseContainer}>
        {data && (
          <div className={styles.successContainer}>
            <h2>Search Results:</h2>
            <div className={styles.searchResults}>
              {data.filteredData.map((result) => (
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
