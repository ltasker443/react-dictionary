import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
    }

    function handleChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div>
            <form onSubmit={search}>
                <input type="search" onChange={handleChange} />
                <button type="submit">Go</button>
            </form>
            <Results results={results}/>
            </div>
    );
}