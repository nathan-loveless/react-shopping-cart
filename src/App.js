import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { productContext } from './contexts/ProductContext';
import { cartContext } from './contexts/cartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = product => {
		// add the given item to the cart
		
		const filterArray = cart.filter(item => {
			if(product.id === item.id)
			return item;
		})
		setCart([...cart, filterArray]);
	};

	console.log(products);

	return (
		<div className="App">
			<productContext.Provider value={{products, addItem, removeItem}}>
				<cartContext.Provider value={{cart}}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products} />

					<Route
						path="/cart" component={ShoppingCart} />
				</cartContext.Provider>
			</productContext.Provider>
		</div>
	);
}

export default App;
