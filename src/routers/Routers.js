import React from 'react'
import { Routes as ReactDomRoutes, Route } from "react-router-dom"

import Home from "../pages/Home/Home"
// import Carrito from "../pages/Carrito/Carrito"
import ProductDetails from "../pages/ProductDetails/ProductDetails"
import Checkout from "../pages/Checkout/Checkout"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"
import Tienda from "../pages/Tienda/Tienda"
import Felicitaciones from "../pages/Felicitaciones/Felicitaciones"
// import Favoritos from '../pages/Favoritos/Favoritos'
import MisOrdenes from "../pages/MisOrdenes/MisOrdenes"
import ProtectedRoute from "./ProtectedRoute"
import Resumen from '../pages/Resumen/Resumen'
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import Validate from "../pages/Validate/Validate"
import Validation from "../pages/Validation/Validation"

const Routers = () => {
    return (
        <ReactDomRoutes>

            <Route path='/' element={<Home />} />

            <Route path='tienda' element={<Tienda />} />
            <Route path='tienda/:id' element={<ProductDetails />} />

            {/* <Route path='favoritos' element={<Favoritos />} /> */}
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />

            <Route path='felicitaciones' element={<Felicitaciones />} />

            <Route path="/mis-ordenes" element={<MisOrdenes />} />
            <Route path="/resumen/:orderId" element={<Resumen />} />
            <Route path='/validate' element={<Validate />} />
            <Route path='/validation' element={<Validation />} />

            <Route
                path="/checkout"
                element={
                    <ProtectedRoute redirectTo='/login' >
                        <Checkout />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<PageNotFound />} />



        </ReactDomRoutes>
    )
}

export default Routers