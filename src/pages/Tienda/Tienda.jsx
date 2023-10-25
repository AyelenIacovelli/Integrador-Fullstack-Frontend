import React, { useRef } from 'react'
import CommonSection from '../../components/UI/common/CommonSection'
import Helmet from "../../components/Helmet/Helmet"
import "../Tienda/tienda.css"
import ProductsList from "../../components/UI/products/ProductsList"
import Categorias from "../../components/Categorias/Categorias"

const Tienda = () => {

  const productsRef = useRef();

  return (
    <Helmet title="Tienda">
      <CommonSection title="Productos" />
      <section className='shop__section'>
        <div className='shop__container' ref={productsRef}>
          <Categorias />
        </div>
      </section>
      <section className="products__section">
        <div className="products__container">
          <ProductsList />
        </div>
      </section>
    </Helmet>
  )
}

export default Tienda