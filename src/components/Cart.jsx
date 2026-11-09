function Cart(props) {
  return (
    <div className="cart-page">
      <h1>My Shopping Cart</h1>

    <div className="item-carts">
        {props.cart.map((item, index) => (
      <div className="cart-item" key={index}>
       <img src={item.image} alt={item.name} />
        <h2>{item.name}</h2>
<p>Price: ${item.price}</p>
<p>Quantity: {item.quantity}</p>
          <button onClick={() => props.removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>

      <h2>Total Cost: ${props.totalCost}</h2>
    </div>
  );
}

export default Cart;