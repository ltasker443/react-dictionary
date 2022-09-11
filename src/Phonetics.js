import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
    console.log(props.results);
    return (
        <div className="Phonetics">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                Listen
            </a>
            {props.phonetic.text}
        </div>
    );
}