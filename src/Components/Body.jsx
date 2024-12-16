import React from "react";
import ProductShowcase from "./ProductShowcase";
import FanFavorites from "./FanFavorites";
import CartIcon from "./CartIcon";

const Body = () => {
    return (
        <main className="Body">
            <ProductShowcase />
            <FanFavorites />
            <CartIcon />
        </main>
    );
};

export default Body;
