import React from "react";

export default function Meanings(props) {
    console.log(props.meanings);
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
                        </p>
                    </div>
                );
            })}
        </div>
    );
}