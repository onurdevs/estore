import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product";
import Header from "../../layouts/Header";

function Category() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + params.category)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(true);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {loading ? (
            products.map((product) => (
              <div className="col-md-3 my-3" key={product.id}>
                <Product product={product} />
              </div>
            ))
          ) : (
            <div className="col-md align-items-center justify-content-center d-flex">
              <div
                className="spinner-border text-center mt-5 mx-auto text-primary"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
