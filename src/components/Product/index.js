import React from "react";
import "./product.css";
function Product({ product }) {
  return (
    <div className="card h-100 border-0 shadow">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">
          <a
            className="text-decoration-none text-dark"
            href={"/product/" + product.id}
          >
            {product.title}
          </a>
        </h5>
        <p className="card-price">${product.price}</p>
      </div>
    </div>
  );
}

export default Product;
