import React from 'react';
import { motion } from "framer-motion"
import "./increase.css"

const Increase = ({
    children,
    disabled = false,
    onClick = e => e.preventDefault(),
}) => {

    return (
        <motion.button
            className='increase'
            whileTap={{ scale: 0.95 }}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default Increase;