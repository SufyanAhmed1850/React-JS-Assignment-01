import "./index.css";
import { motion } from "framer-motion";

function Post({ img, name, address, title, body }) {
    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                scale: [null, 1.08, 1.06],
                borderRadius: ["1rem", ".5rem"],
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            <div className="header">
                <div className="profile-image">
                    <img src={img} alt="Profile" />
                </div>
                <div className="profile-info">
                    <p className="name">{name}</p>
                    <p className="address">{address}.</p>
                </div>
            </div>
            <div className="body">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </motion.div>
    );
}

export default Post;
