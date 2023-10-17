import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import "./modalUser.css"
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, toggleHiddenMenu } from '../../../redux/slices/userSlice';

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const ModalUser = () => {
    const { currentUser, hiddenMenu } = useSelector(state => state.user)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                dispatch(toggleHiddenMenu());
            }
        };

        if (!hiddenMenu) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };

    }, [dispatch, hiddenMenu]);

    const handleLogout = () => {
        dispatch(setCurrentUser(null));
        dispatch(toggleHiddenMenu());
        toast.success('Sesión cerrada');
        navigate("/");
    };

    const handleUsernameClick = () => {
        dispatch(toggleHiddenMenu());
    };

    return (
        <AnimatePresence>
            {!hiddenMenu && (
                <motion.div className='modal-container'
                    initial={{ translateX: 600 }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: 600 }}
                    transition={{ duration: 0.5 }}
                    key='cart-user'
                    ref={modalRef}
                >
                    <h2 className='username' onClick={handleUsernameClick}>{currentUser?.nombre}</h2>
                    <Link to='/mis-ordenes'>Mis Ordenes</Link>
                    <span onClick={handleLogout}>Cerrar Sesion</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalUser;