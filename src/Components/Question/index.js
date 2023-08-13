import React from "react";
import "./style.css";

function Question({ ques }) {
    return (
        <div className="question">
            <h1>{ques}</h1>
        </div>
    );
}

export default Question;
