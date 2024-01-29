import { useState, useEffect } from "react";
import Title from "./ui/Title";
import Products from "../Api/products.json";
import ProductItem from "./ui/ProductItem";
function Favorits() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <Title>Favoriler</Title>
      <div className=" md:grid-cols-4  grid grid-cols-3  lg:grid-cols-6  xl:grid-cols-8  2xl:grid-cols-9 gap-0.1 rounded-lg overflow-hidden">
        {products.map((product) => (
          <ProductItem product={product} key={products.id} />
        ))}
      </div>
    </div>
  );
}

export default Favorits;
