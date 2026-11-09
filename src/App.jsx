import { useState } from 'react';
import './App.scss'
import phone from './img/phone.png';
import Product from './components/Product'
import Cart from './/components/Cart'
import iphone from './/img/iphone.jpg';
import huawei from './/img/huawei.jpg';
import hp from './/img/hp.jpg';
import samsung from './/img/samsung.jpg';
import macbook from './/img/macbook.jpg';
const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 800,
    category: "Phone",
    image: iphone
  },
  {
    id: 2,
    name: "Samsung S24",
    price: 700,
    category: "Phone",
    image: samsung
  },
  {
    id: 3,
    name: "Huawey 10s ultra",
    price: 300,
    category: "Phone",
    image: huawei
  },
  {
    id: 4,
    name: "MacBook",
    price: 1700,
    category: "nootbook",
    image: macbook
  },
  {
    id: 5,
    name: "HP",
    price: 1200,
    category: "nootbook",
    image: hp
  }
];
function App  (){
  const [cart, setCart] = useState([]);
 const addToCart = (product) => {
  const foundProduct = cart.find(item => item.id === product.id);

  if (foundProduct) {
    setCart(cart.map(item =>
  item.id === product.id
    ? { ...item, quantity: item.quantity + 1 }
    : item
));
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

const removeFromCart = (indexToRemove) => {
  setCart(cart.map((item, index) =>
    index === indexToRemove
      ? { ...item, quantity: item.quantity - 1 }
      : item
  ).filter(item => item.quantity > 0));
};
const totalCost = cart.reduce((sum, item) => {
return sum + item.price * item.quantity;
}, 0);
const totalQuantity = cart.reduce((sum, item) => {
  return sum + item.quantity;
}, 0);

const [isCartOpen, setIsCartOpen] = useState(false);
  return(
<div className="div">  
  <div className="header">
     <div className="logo">
 <h1>Mini<span>Shop</span></h1>

  </div>

  <div className="nav">
    <a href="#" onClick={() => setIsCartOpen(false)}>Home</a>
    <a href="#" onClick ={()=> setIsCartOpen(false)}>Products</a>
    <a href="#"  onClick ={()=> setIsCartOpen(false)}>About</a>
    <a href="#"  onClick ={()=> setIsCartOpen(false)}>Contact</a>
    </div>

  <div className="cart">
<button onClick={() => setIsCartOpen(true)}>
  🛒 Cart ({totalQuantity})
</button>
    

  </div>

  </div>
  <div className="hero">
    
  <div className="hero-content">
    <h3>BEST CHOICE FOR YOU</h3>
    <h1>Modern Tech. <span>Better Life.</span></h1>
    <p>Discover the latest technology and upgrade your everyday life.</p>
    <button>Shop Now</button>
  </div>

  <div className="hero-image">
<img src={phone} alt="Smartphone" />  </div>
  </div>
  
     <h1>Our Products</h1>
  
  {isCartOpen ? (
  <Cart
    cart={cart}
    removeFromCart={removeFromCart}
    totalCost={totalCost}
  />
) : (
  
  <div className="products">
  
    {products.map((item) => (
      <Product 
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        category={item.category}
        image={item.image}
        addToCart={() => addToCart(item)}
      />
    ))}
  </div>
)}

  
  <div className="footer">

  </div>
</div>
)
}

export default App
