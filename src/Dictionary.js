import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
      return (
        <div className="Dictionary">
            <section>
                <h1>search for a word</h1>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleChange} defaultValue={props.defaultKeyword}/>
                <button type="submit">Go</button>
            </form>
            <div className="hints">
                hint: wizard, dragon, castle...
            </div>
            </section>
            <Results results={results}/>
            </div>
    );  
    } else {
        load();
        return "Summoning data...";
    }
}