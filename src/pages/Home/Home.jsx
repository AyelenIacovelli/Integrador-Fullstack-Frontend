import React, { useEffect } from 'react'
import "./home.css"
import { Link, useNavigate } from "react-router-dom"
// import { products } from "../../data/Products"
import Helmet from '../../components/Helmet/Helmet'
import Services from '../../services/Services'
// import ProductsList from '../../components/UI/products/ProductsList'
import Clock from "../../components/UI/clock/Clock"
import ofertaok from "../../assets/images/ofertaok.png"
import { motion, useAnimation } from 'framer-motion';
import { BsArrowUpRight } from "react-icons/bs"
import { MdSwipeVertical } from "react-icons/md"
import { useSelector } from 'react-redux'
import CardsRecomendacion from "../../components/Recomendados/CardsRecomendacion"
import CardsOfertas from '../../components/Ofertas/CardsOfertas'

const Home = () => {

    const navigateToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // AÑO EN HERO
    const year = new Date().getFullYear()


    const controlsX = useAnimation();
    const controlsY = useAnimation();

    useEffect(() => {
        controlsX.start({ x: 0 });
    }, [controlsX]);

    useEffect(() => {
        controlsY.start({ y: 0 });
    }, [controlsY]);


    // const productsRef = useRef();

    // const doScroll = () => {    
    //   window.scrollTo(
    //     productsRef.current.getBoundingClientRect().x,
    //     productsRef.current.getBoundingClientRect().y - 25
    //   )
    // }

    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user.currentUser)


    useEffect(() => {
        if (!currentUser) {
            navigateToTop('/login')
        }
    }, [currentUser, navigate])



    return (
        // HELMET
        <Helmet title="Home">
            {/* HERO */}
            <section className='hero__section'>
                <div className='hero__section-titles'>
                    <h1>GREVERY STORE</h1>
                    <h2>Tienda de regalos</h2>
                </div>
                <div className='hero__content'>
                    <p className='hero__content-p'>¡Conoce lo nuevo del {year}!</p>
                </div>
            </section>
            {/* SERVICIOS */}
            <Services />
            {/* TENDENCIA */}
            <section className='trending__products'>
                <div className='trending__products-title-container'>
                    <h2 className='trending__products-title'>Productos recomendados</h2>
                </div>
                <div className='trending__content'>
                    <CardsRecomendacion />
                </div>
                <span className='swipe'><MdSwipeVertical /></span>
            </section>
            {/* SALE */}
            <section className='best_sales'>
                <div className='sales-title-container'>
                    <h2 className='best_sales-title'>Ofertas</h2>
                </div>
                <div className='sales__content'>
                    <CardsOfertas />
                </div>
                <span className='swipe'><MdSwipeVertical /></span>
            </section>
            {/* TIMER */}
            <section className='timer__count'>
                <div className="timer__overlay"></div>
                <div className='timer__content'>
                    <div className='clock__down'>
                        <h4 className='clock__down-title'>Ofertas por tiempo limitado</h4>
                        <Clock />
                        <motion.button whileTap={{ scale: 1.2 }} className='clock__btn'><Link to="/tienda" onClick={navigateToTop}>Tienda Online<BsArrowUpRight className='clock__btn-icon' /></Link></motion.button>
                    </div>
                    <div className='counter__img'>
                        <img src={ofertaok} alt="foto sale" />
                    </div>
                </div>
            </section>
        </Helmet>
    )
}

export default Home