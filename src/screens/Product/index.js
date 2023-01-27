import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../layouts/Header";

function Product() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const params = useParams();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + params.id)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <Header />

      <div className="container">
        {loading ? (
          <div className="row my-3">
            <div className="col-md-6 my-3">
              <img
                src={product.image}
                className="img-fluid"
                alt={product.title}
              />
            </div>
            <div className="col-md-6 my-3">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <p className="text-danger">${product.price}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-md align-items-center justify-content-center d-flex">
              <div
                className="spinner-border text-center mt-5 mx-auto text-primary"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
