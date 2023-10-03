import { motion } from "framer-motion"
import "./button.css"

const Button = ({
    children,
    disabled = false,
    onClick = (e) => e.preventDefault(),
}) => {
    return (
        <motion.button className="button"
            disabled={disabled}
            onClick={onClick}

            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
};

export default Button;