import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import { useState } from 'react';

const Product = (props) => {

  const [data, setData] = useState([]);
  const [selectOrder, setSelectOrder] = useState("");
  const [selectedSize, setSelectedSize] = useState([]);
  const [cart, setCart] = useState({});
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () =>
    setIsCartVisible(!isCartVisible);

  const increaseCartItem = ({ id }) => {
    const { value, count } = cart[id];
    setCart({ ...cart, [id]: { value, count: count + 1 } })
  };

  const decreaseCartItem = ({ id }) => {
    const { value, count } = cart[id];
    if (count <= 1) return;
    setCart({ ...cart, [id]: { value, count: count - 1 } })
  };

  const handleProductOrder = (event) => {
    const order = event.target.value;
    setSelectOrder(order);
    let productShort = [...props.data];
    if (order === "highest") {
      productShort = productShort.sort((a, b) =>
        b.price - a.price);
    }
    if (order === "lowest") {
      productShort = productShort.sort((a, b) =>
        a.price - b.price);
    }
    setData(productShort);
  };

  const handleSizeSelect = (selectedSize) => {
    setSelectedSize(selectedSize)
  };

  const filteredData = () => {
    const d =
      data.length ?
        [...data] :
        [...props.data];
    const filters = selectedSize;
    if (filters.length) {
      return d.filter(item =>
        filters.some(f =>
          item.availableSizes.includes(f))) || [];
    }
    return d;
  };

  const handleProductCart = (value) => {
    setCart(
      {
        ...cart,
        [value.id]: { value, count: 1 }
      }
    )
  };

  return (
    <>
      <div className='drop-box'>
        <p>
          {`${props.data.length}
           Products found. `}
        </p>
        <div className='drop'>
          <label htmlFor='order'>Order by
          </label>
          <select
            name='order'
            id='order'
            value={selectOrder}
            onChange={handleProductOrder}
            className='select-drop'>
            <option value=''>Select
            </option>
            <option value="lowest">Lowest to highest
            </option>
            <option value="highest">Highest to lowest
            </option>
          </select>
        </div>
      </div>
      <div className="cart-icon">
        <img className="cart-img" src={"/static/bag-icon.png"} alt=""
          onClick={toggleCart} />
        {Object.keys(cart).length}
      </div>
      <Header
        cart={cart}
        isVisible={isCartVisible}
        increaseCartItem={increaseCartItem}
        decreaseCartItem={decreaseCartItem}
        toggleCart={toggleCart}
      />

      <div className='prod-container'>
        <div>
          <Aside
            data={props.data}
            setSelectedSize={handleSizeSelect}
          />
        </div>
        <div className='all-products'>
          {filteredData().map((product) => (
            <div key={product.id}>
              <button className="free-ship" > Free Shipping
              </button>
              <div className="img-container">
                <img className="img-total"
                  src={`/static/products/${product.sku}_1.jpg`}
                  alt={product.title} />
              </div>
              <div className="price-container">
                <p>{product.title}</p>
                <h3>
                  {product.currencyFormat + product.price}
                </h3>
                <button
                  className='add-cart'
                  onClick={() => handleProductCart(product)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


export default Product;
