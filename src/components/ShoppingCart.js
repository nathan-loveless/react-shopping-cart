import React, { useContext } from 'react';
import { cartContext } from '../contexts/cartContext';
import { productContext } from '../contexts/ProductContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const { cart } = useContext(cartContext);
	const { product, removeItem } = useContext(productContext);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item 
				key={item.id}
				removeItem={removeItem} 
				{...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
