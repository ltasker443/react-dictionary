import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
    event.preventDefault();
    alert (`Summoning results for ${keyword}`);
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
            </div>
    );
}