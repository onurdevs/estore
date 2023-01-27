import { Carousel } from "bootstrap";
import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import Header from "../../layouts/Header";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(function (data) {
        setProducts(data);
        setIsLoading(true);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {isLoading ? (
            products.map((product) => (
              <div className="col-md-3 my-3" key={product.id}>
                <Product product={product} />
              </div>
            ))
          ) : (
            <div
              className="spinner-border text-center mt-5 mx-auto text-primary"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
