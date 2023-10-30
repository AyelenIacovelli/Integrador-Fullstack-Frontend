import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import "./modalUser.css"
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, toggleHiddenMenu } from '../../../redux/slices/userSlice';

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const ModalUser = () => {
    const { currentUser, hiddenMenu } = useSelector(state => state.user)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(setCurrentUser(null));
        dispatch(toggleHiddenMenu());
        toast.success('Sesión cerrada');
        navigate("/")
    };


    return (
        <>
            {!hiddenMenu && (
                <motion.div className={`modal-overlay ${hiddenMenu ? 'hidden' : ''}`}
                    onClick={() => dispatch(toggleHiddenMenu())}
                ></motion.div>
            )}
            <AnimatePresence>
                {!hiddenMenu && (
                    <motion.div className='modal-container'
                        initial={{ translateX: 600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 600 }}
                        transition={{ duration: 0.5 }}
                        key='cart-user'
                    >
                        <div className='close-button-container'>
                            <motion.button
                                className='close-button close__modal'
                                whileTap={{ scale: 0.95 }}
                                onClick={() => dispatch(toggleHiddenMenu())}
                            >
                                <MdOutlineClose size='24px' />
                            </motion.button>
                        </div>
                        <h2 className='username'>{currentUser?.nombre}</h2>
                        {currentUser.verified ? (
                            <Link to='/mis-ordenes' onClick={() => dispatch(toggleHiddenMenu())}>
                                Mis Ordenes
                            </Link>
                        ) : (
                            <span className='user-span'>Mis Ordenes</span>
                        )}
                        <span className='user-span' onClick={handleLogout}>Cerrar Sesion</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalUser;