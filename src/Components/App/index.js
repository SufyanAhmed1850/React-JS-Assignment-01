import React from "react";
import ThemeBtn from "../ThemeBtn";
import ConstRenderPage from "../ConstRenderPage";
import PostsPage from "../PostsPage";
import ExplainPage from "../ExplainPage";

function App() {
    return (
        <React.Fragment>
            <ThemeBtn />
            <ConstRenderPage />
            <ExplainPage />
            <PostsPage />
        </React.Fragment>
    );
}

export default App;
