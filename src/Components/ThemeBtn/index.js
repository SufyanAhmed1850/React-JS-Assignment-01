import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Moon from "../../Assets/moon.svg";
import Sun from "../../Assets/sun.svg";
import "./style.css";

function ThemeBtn() {
    const [dark, setDark] = useState(false);
    const [source, setSource] = useState(Moon);
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("theme")) === "dark") {
            setDark(true);
        }
    }, []);
    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
            setSource(Sun);
            localStorage.setItem("theme", JSON.stringify("dark"));
        } else {
            document.body.classList.remove("dark");
            setSource(Moon);
            localStorage.setItem("theme", JSON.stringify("light"));
        }
    }, [dark]);
    return (
        <motion.div
            className="theme"
            whileTap={{
                scale: 0.9,
                borderRadius: [".5rem", ".75rem"],
            }}
            onClick={() => setDark(!dark)}
        >
            <img className="theme-img" src={source} alt="moon" />
        </motion.div>
    );
}

export default ThemeBtn;
