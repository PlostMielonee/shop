import React from "react";
import ProductList from "./ProductList";
import ProductCard from './ProductCard';

console.log("main connected succesfully");

function Main(){
    return(
<div>
<ProductList />
<ProductCard />
</div>
    )
}



export default Main;