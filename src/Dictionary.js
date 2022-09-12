import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);

    let pexelsApiKey = "563492ad6f9170000100000100fd6751c60847bcb11f54aef8da65b8";
    let pexelsApiUrl =   `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            <Results results={results} />
            <Photos photos={photos} />
            </div>
    );  
    } else {
        load();
        return "Summoning data...";
    }
}