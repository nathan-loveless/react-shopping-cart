
import React from 'react';
// Import cartContext
// Create Hook with remoteItem
// App.js remoteItem, newCart then filter it with item and index

const Item = props => {
	
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => props.removeItem(props)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
