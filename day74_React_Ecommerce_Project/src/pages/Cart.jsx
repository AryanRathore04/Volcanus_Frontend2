import React from "react";
import { Link } from "react-router-dom";


const Cart = ({ cart }) => {
  let totalPrice = 0;
  for(let i = 0; i < cart.length; i++){
    totalPrice += cart[i].price;
  }
  console.log(totalPrice);
  console.log(cart);
  return (
    <>
      <div className="container d-flex justify-content-center flex-wrap">
        {cart.map((product) => (
          <div key={product.id} className="col-md-4 my-3">
            <div className="card bg-dark text-light" style={{ width: "18rem" }}>
              <Link
                to={`/product/${product.id}`}
                className="d-flex justify-content-center align-items-center p-3"
              >
                <img
                  src={product.imgSrc}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                    height: "220px",
                    borderRadius: "10px",
                    border: "5px solid tan",
                  }}
                />
              </Link>
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary mx-3">
                  {product.price}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => addTocart(product)}
                >
                  Remove
                </button>
              </div>
            </div>
            <h2>{product.price}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
