// AGREGAR PRODUCTO AL CARRITO
export const addItemToCart = (cartItems, product) => {
    // BUSCO SI ESTA EL PRODUCTO EN EL CARRITO
    const productInCart = cartItems.find((item) => {
        return item.id === product.id
    })
    // SI ESTA:
    if (productInCart) {
        return cartItems.map((item) => {
            return item.id === productInCart.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        })
    }
    // SI NO ESTA:
    return [
        ...cartItems,
        {
            ...product,
            quantity: 1
        }
    ]
}

// REMOVER PRODUCTO DEL CARRITO
export const removeItemFromCart = (cartItems, id) => {
    // BUSCO EL PRODUCTO EN EL CARRITO:
    const productToRemove = cartItems.find((item) => {
        return item.id === id
    })
    // SI HAY MAS DE UNA UNIDAD DEL PRODUCTO EN EL CARRITO:
    if (productToRemove.quantity > 1) {
        return cartItems.map((item) => {
            return item.id === productToRemove.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        })
    }
    // SI HAY SOLO UNA UNIDAD DEL PRODUCTO EN EL CARRITO:
    return cartItems.filter((item) => {
        return item.id !== productToRemove.id
    })
}

// SI NO HAY PRODUCTOS, EL ENVIO ES 0
export const resetShippingCost = (cartItems, shippingCost) => {
    if (cartItems.length === 1 && cartItems[0].quantity === 1) {
        return 0
    }
    return shippingCost
}