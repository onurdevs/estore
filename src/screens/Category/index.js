import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product";
import Header from "../../layouts/Header";

function Category() {
  const [products, setProducts] = useState([]);
  
  const params = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/"+params.category)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 my-3" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
