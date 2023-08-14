import React from "react";
import "./style.css";

function Question({ ques, num, c }) {
    return (
        <div className="question">
            <h2>{num || null}</h2>
            <code className={c || null}>{ques}</code>
        </div>
    );
}

export default Question;
