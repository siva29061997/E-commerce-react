import React from "react";

//creating and exporting header component
const Header = () => {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Welcome To My Shop</h1>
          <p className="lead fw-normal text-white-50 mb-0">
          Having good product descriptions on your online shop
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;