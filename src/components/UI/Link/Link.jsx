import "./link.css";
import { motion } from "framer-motion";
import { Link as CustomLink } from "react-router-dom";

const Link = ({ radius = "32", to = "/" }) => {
    return (
        <motion.div className="container-link" whileTap={{ scale: 0.95 }}>
            <CustomLink radius={radius} to={to}>
                <span className="link"> Volver </span>
            </CustomLink>
        </motion.div>
    );
};

export default Link;