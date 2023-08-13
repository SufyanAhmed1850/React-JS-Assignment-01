import React, { useEffect, useState } from "react";
import "./style.css";

function ThemeBtn() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [dark]);
    return (
        <div onClick={() => setDark(!dark)} className="theme">
            <p>Toggle Theme</p>
        </div>
    );
}

export default ThemeBtn;
