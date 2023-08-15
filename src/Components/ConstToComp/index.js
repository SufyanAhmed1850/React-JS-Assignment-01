import "./index.css";
import { motion } from "framer-motion";

function ConstsToComp() {
    const name = "Hello World";
    const obj = { name: "Hello World Object" };
    const data = ["We", "are", "United"];
    const list = [
        { name: "Hello World 1" },
        { name: "Hello World 2" },
        { name: "Hello World 3" },
    ];
    const complex = [
        { company: "XYZ", jobs: ["Javascript", "React"] },
        { company: "ABC", jobs: ["AngularJs", "Ionic"] },
    ];
    return (
        <div className="q1-wrapper">
            <motion.div
                whileHover={{
                    scale: [null, 1.1, 1.07],
                    borderRadius: ["1rem", ".5rem"],
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <p>{name}</p>
            </motion.div>
            <motion.div
                whileHover={{
                    scale: [null, 1.1, 1.07],
                    borderRadius: ["1rem", ".5rem"],
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <p>{obj.name}</p>
            </motion.div>
            <motion.div
                whileHover={{
                    scale: [null, 1.1, 1.07],
                    borderRadius: ["1rem", ".5rem"],
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <div className="q-data">
                    {data.map((d, k) => {
                        return <p key={k}>{d}</p>;
                    })}
                </div>
            </motion.div>
            <motion.ol
                whileHover={{
                    scale: [null, 1.1, 1.07],
                    borderRadius: ["1rem", ".5rem"],
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                {list.map((l, k) => {
                    return <li key={k}>{l.name}</li>;
                })}
            </motion.ol>
            <motion.div
                className="q-complex"
                whileHover={{
                    scale: [null, 1.1, 1.07],
                    borderRadius: ["1rem", ".5rem"],
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                {complex.map((c, k) => {
                    return (
                        <div key={k}>
                            <span>{c.company}</span>
                            {c.jobs.map((j, key) => {
                                return <p key={key}>{j}</p>;
                            })}
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}

export default ConstsToComp;
