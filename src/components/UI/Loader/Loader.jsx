import React from 'react';
// import { motion, useTime, useTransform } from 'framer-motion';
import "./loader.css"
import logo from "../../../assets/images/logogg.png"



const Loader = () /*({ styles }) */ => {
    <div className='spinner'><img src={logo} /></div>
    // const time = useTime();
    // const rotate = useTransform(time, [0, 1200], [0, 360], { clamp: false });

    // return (
    //     <div className='loader-container'>
    //         <motion.div args={styles} style={{ rotate }}></motion.div>
    //     </div>
    // );
};

export default Loader;