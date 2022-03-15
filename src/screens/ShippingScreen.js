import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddressAction } from "../redux/Action/cartAction";
const ShippingScreen = () => {
  window.scrollTo(0, 0);
  let navigate = useNavigate();
  const cart = useSelector((state) => state.cart)
  const {shippingAddress}  = cart

  const [address, setAddress] = useState(Object.keys(shippingAddress).length !== 0 ? shippingAddress.address : "")
  const [city, setCity] = useState(Object.keys(shippingAddress).length !== 0 ? shippingAddress.city : "")
  const [postalCode, setPostalCode] = useState(Object.keys(shippingAddress).length !== 0 ? shippingAddress.postalCode : "")
  const [country, setCountry] = useState(Object.keys(shippingAddress).length !== 0 ? shippingAddress.country : "")

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddressAction({address,city,postalCode,country}))
    navigate("/payment")
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>DELIVERY ADDRESS</h6>
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit"> Continue </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
