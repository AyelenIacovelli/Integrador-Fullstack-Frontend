import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import ModalUser from "./ModalUser/ModalUser";
import "./navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/slices/userSlice";

import logo2 from "../../assets/images/logogg.png"




function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state) => state.user);





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
                        <div>
                            <HiHome />
                        </div>
                        Home
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