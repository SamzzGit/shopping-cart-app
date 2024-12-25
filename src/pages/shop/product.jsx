import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItems[id] > 0 && <>({cartItems[id]})</>}
        </button>
      </div>
    </div>
  );
};
