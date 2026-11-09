

function Product(props) {
  return (
    <div className = "product-cart">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.id}</p>
      <p className = "price">{props.price}</p>
      <p>{props.category}</p>
        <button className = "Add__Cart" onClick={props.addToCart}>
        Add to Cart
      </button>
     
    </div>
  );
}
export default Product;