import React from "react";
import Question from "../Question";
import ConstsToComp from "../ConstToComp";

function ConstRenderPage() {
    return (
        <React.Fragment>
            <Question
                ques='Render these into component:
                const name = "Hello World";
                const obj = {name: "Hello World Object"}
                const data = ["We", "are", "United"] //Show these in seperate tags
                const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
                const complex = [{company: "XYZ", jobs: ["Javascript," "React"]}, {company: "ABC", jobs: ["AngularJs" "Ionic"]}]'
                num="Question-01"
            />
            <ConstsToComp />
        </React.Fragment>
    );
}

export default ConstRenderPage;
