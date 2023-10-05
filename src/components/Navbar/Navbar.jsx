import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
// import { HiHome } from "react-icons/hi";

import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import ModalUser from "./ModalUser/ModalUser";
import "./navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/slices/userSlice";

import logo2 from "../../assets/images/logogg.png"

import { FaHeart } from "react-icons/fa"


function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state) => state.user);

    const favorites = useSelector((state) => state.favs.favorites);
    const favoriteProductsCount = favorites ? favorites.length : 0;





    return (
        // <header className='header'>
        <div className="navbar-container">
            <ModalCart />
            <ModalUser />
            <div>
                <Link to="/">
                    <img src={logo2} alt='logo' />
                </Link>
            </div>
            <div className="links-container">
                <motion.div whileTap={{ scale: 0.97 }}>
                    <Link to="/">
                        {/* <div>
                            <HiHome />
                        </div> */}
                        Home
                    </Link>
                </motion.div>
                <motion.div whileTap={{ scale: 0.97 }}>
                    <Link to="/tienda">
                        {/* <div>
                            <FaShoppingCart />
                        </div> */}
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
                    }
                    }
                    >
                        <span className="span">
                            {
                                currentUser ?
                                    `${currentUser.nombre}` :
                                    "Iniciar Sesión"
                            }
                        </span>
                        <FaUserAlt />
                    </div>
                </div>
            </div>
        </div>
        // </header>
    );
}

export default Navbar;