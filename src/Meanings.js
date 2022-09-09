import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
    return (
        <div className="Meanings">
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index){
                return (
                    <div key={index}>
                        <p>
                            {definition.definition}
                            <br />
                            {definition.example}
                            <br />
                            <Synonyms synonyms={definition.synonyms} />
                        </p>
                    </div>
                );
            })}
        </div>
    );
}