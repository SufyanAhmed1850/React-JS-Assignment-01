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
            setSource(Sun);
            document.body.classList.add("dark");
            localStorage.setItem("theme", JSON.stringify("dark"));
        } else {
            setSource(Moon);
            document.body.classList.remove("dark");
            localStorage.setItem("theme", JSON.stringify("light"));
        }
    }, [dark]);
    return (
        <motion.div
            className="theme"
            initial={{ scale: 1 }}
            whileTap={{
                scale: 0.8,
            }}
            whileHover={{
                scale: 1.1,
            }}
            onClick={() => setDark(!dark)}
        >
            <motion.img
                className="theme-img"
                whileHover={{
                    rotate: -90,
                }}
                src={source}
                alt="moon"
            />
        </motion.div>
    );
}

export default ThemeBtn;
