import React from "react";
class CartItem extends React.Component {
  render() {
    const {
      item: { value, count },
      increaseCartItem,
      decreaseCartItem
    } = this.props;
    return (
      <>
        <div className="cart-item">
          <img className="cart-item-img"
            src={`/static/products/${value.sku}_1.jpg`}
            alt=""
          />
          <div>
            <h4>{value.title}
            </h4>
            <p className="crt-ttl">{value.style}
            </p>
            <p className="crt-ttl">Print Quantity :
              {count}
            </p>
          </div>
          <div>
            <p className="show-price"> $ {value.price}
            </p>
            <button className="inc-btn" onClick={() =>
              increaseCartItem(value)}> +
            </button>
            <button className="dec-btn" onClick={() =>
              decreaseCartItem(value)}> -
            </button>
          </div>
        </div>

      </>

    )
  }
}

export default CartItem;


