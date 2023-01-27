import React from "react";
import "./mainbar.css";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

function Mainbar() {
  return (
    <div className="mainbar">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div onClick={() => window.location.href='/'} className="logo">estore</div>
          </div>
          <div className="col-md">
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Ara..."
              />
            </div>
          </div>
          <div className="col-md d-flex justify-content-end align-items-center">
            <div className="user">
              <ul className="user-menu">
                <li>
                  <a href="#">
                    <FaUserAlt />
                    <span className="mx-2">Giriş Yap</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="cart">
              <FaShoppingCart />
              <span className="mx-2">Sepet</span>
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
