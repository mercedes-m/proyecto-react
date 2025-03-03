//src/components/CartWidget.jsx
import React from "react";

const CartWidget = ({ itemCount }) => {
    return (
        <div className="cart-widget">
            <span>🛒</span>
            {itemCount > 0 && <span>{itemCount}</span>}
            </div>
    );
};

export default CartWidget;
