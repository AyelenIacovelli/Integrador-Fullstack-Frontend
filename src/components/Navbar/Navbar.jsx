import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaHeart, FaBars, FaCheckCircle } from "react-icons/fa";
import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import ModalUser from "./ModalUser/ModalUser";
import "./navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/slices/userSlice";
import logo2 from "../../assets/images/logogg.png"
import { useEffect, useRef } from "react";


function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state) => state.user);

    const favorites = useSelector((state) => state.favs.favorites);
    const favoriteProductsCount = favorites ? favorites.length : 0;

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const stickyHeaderFunc = () => {
        if (window.scrollY > 100) {
            headerRef.current.classList.add("sticky__header");
        } else {
            headerRef.current.classList.remove("sticky__header");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", stickyHeaderFunc);

        return () => {
            window.removeEventListener("scroll", stickyHeaderFunc);
        };
    }, []);

    const navigateToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')


    return (
        <header className='header' ref={headerRef}>
            <div className="navbar-container">
                <ModalCart />
                <ModalUser />
                <div className="logo">
                    <Link to="/" onClick={navigateToTop}>
                        <img src={logo2} alt='logo' />
                    </Link>
                </div>
                <div className="navigation" ref={menuRef} onClick={menuToggle}>
                    <div className={"links-container"}>
                        <motion.div whileTap={{ scale: 0.97 }}>
                            <Link to="/">
                                Home
                            </Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.97 }}>
                            <Link to="/tienda">
                                Tienda
                            </Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.97 }}>
                            <Link to="/favoritos">
                                <div>
                                    <FaHeart />
                                    <span className='badge'>{favoriteProductsCount}</span>
                                </div>
                            </Link>
                        </motion.div>
                        <div className="cart-nav">
                            <CartIcon />
                        </div>
                        <div className="user-nav">
                            <div className="link-container user-container" onClick={() => {
                                currentUser ?
                                    dispatch(toggleHiddenMenu()) :
                                    navigate("/login")
                            }}>
                                <span className="span">
                                    {
                                        currentUser ?
                                            <>
                                                {currentUser.isVerified ? <FaCheckCircle /> : null}
                                                {currentUser.nombre}
                                            </> :
                                            "Iniciar Sesión"
                                    }
                                </span>
                                {currentUser ? null : <FaUserAlt />}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mobile__menu'>
                    <span onClick={menuToggle}>
                        <FaBars className="menu-hamburguesa" />
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Navbar;