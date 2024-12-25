import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const CartItems = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    updateCartItemCount,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount;
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(event) =>
              updateCartItemCount(Number(event.target.value), id)
            }
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
