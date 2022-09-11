import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
    return (
        <div className="Meanings">
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index){
                return (
                    <div key={index}>
                        <div>

                        <div className="definition">{definition.definition} </div>
                        <div className="example">{definition.example} </div>
                        <Synonyms synonyms={definition.synonyms} />
                       </div>
                    </div>
                );
            })}
        </div>
    );
}