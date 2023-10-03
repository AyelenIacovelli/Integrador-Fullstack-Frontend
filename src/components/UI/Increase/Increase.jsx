import React from 'react';
import { motion } from "framer-motion"
import "./increase.css"

const Increase = ({
    children,
    bgColor,
    disabled = false,
    onClick = e => e.preventDefault(),
}) => {
    const buttonStyle = {
        backgroundColor: bgColor,
    };

    return (
        <motion.button
            className='increase'
            whileTap={{ scale: 0.95 }}
            style={buttonStyle}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default Increase;