import React from 'react';
import "./submit.css"
import { motion } from "framer-motion"

const Submit = ({ children, onClick, disabled = false }) => {
    return (
        <motion.button className='btn-submit'
            whileTap={{ scale: 0.95 }}
            disabled={disabled}
            onClick={onClick}
            type='submit'
        >
            {children}
        </motion.button>
    );
};

export default Submit;