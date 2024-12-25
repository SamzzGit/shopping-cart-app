import React, { useContext } from "react";
import { CartItems } from "./cart-items";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();
  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} key={product.id} />;
          }
        })}
        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h1>Your Shopping Cart is Empty!</h1>
        )}
      </div>
    </div>
  );
};
