import React from "react";
import CartItem from "./CartItem";
class Header extends React.Component {

  render() {
    const {
      cart,
      toggleCart,
      increaseCartItem,
      decreaseCartItem
    } = this.props;

    const subTotal = Object.values(cart).reduce((acc, cv) =>
      acc + cv.value.price * cv.count, 0);

    return (
      <>
        {
          this.props.isVisible &&
          <div className="heading">
            <button onClick={toggleCart}>X
            </button>
            <h5>Cart
            </h5>
            <hr className="hr"
            />
            <div className="cart-container">
              {Object.values(cart).map((item) =>
                <CartItem
                  item={item}
                  increaseCartItem={increaseCartItem}
                  decreaseCartItem={decreaseCartItem}
                />)}

            </div>
            <div className="ttl-btn-container">
              <p
                className="total-btn">
                SUBTOTAL :
                <span className="total-amt">
                  $ {subTotal}
                </span>
              </p>
            </div>
            <div>
              <button
                className="check-btn"
                onClick={() =>
                  alert(`Your Total Amount is $ ${subTotal}`)}>
                CHECKOUT
              </button>
            </div>
          </div>
        }

      </>
    )
  }
}

export default Header;


