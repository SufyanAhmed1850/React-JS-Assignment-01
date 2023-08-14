import React from "react";
import Question from "../Question";
import ExplainComp from "../ExplainComp";

function ExplainPage() {
    return (
        <React.Fragment>
            <Question
                num="Question-02"
                ques="Briefly explain with an example what's the difference between
        import Something from 'package' VS import {Something} from 'package'
        "
            />
            <ExplainComp />
        </React.Fragment>
    );
}

export default ExplainPage;
