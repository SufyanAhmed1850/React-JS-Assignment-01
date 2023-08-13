import React from "react";
import CardWrapper from "../PostCardWrapper";
import ThemeBtn from "../ThemeBtn";
import Question from "../Question";

function PostsPage() {
    return (
        <React.Fragment>
            <ThemeBtn />
            <Question
                ques="Just copy and paste the data from these links and store them into a variable:
                const posts = https://jsonplaceholder.typicode.com/posts //copy the array from this link
                const users = https://jsonplaceholder.typicode.com/users //copy the array from this link
                //DON'T USE FETCH FOR NOW Using above API's, you've to render all the users with their names, emails and their posts.
                Use `id` as a key with each data rendering."
            />
            <CardWrapper />
        </React.Fragment>
    );
}

export default PostsPage;
