import React, { useRef, useState } from 'react'
import CommonSection from '../../components/UI/common/CommonSection'
import Helmet from "../../components/Helmet/Helmet"
import "../Tienda/tienda.css"
import ProductsList from "../../components/UI/products/ProductsList"
import Categorias from "../../components/Categorias/Categorias"

const Tienda = () => {

  const productsRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Helmet title="Tienda">
      <CommonSection title="Productos" />
      <section className='shop__section'>
        <div className='shop__container' ref={productsRef}>
          <Categorias />
          <div className='search-container'>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='input-search'
            />
          </div>
        </div>
      </section>
      <section className="products__section">
        <div className="products__container">
          <ProductsList searchTerm={searchTerm} />
        </div>
      </section>
    </Helmet>
  )
}

export default Tienda