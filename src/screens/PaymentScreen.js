import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/cartActions";
import Header from "./../components/Header";

const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [payment, setPayment] = useState("PayPal");
 

  const dispatch = useDispatch();


// const handlepayment = (e) => {
//     e.preventDefault();
//     setPayment(e.target.value);
//     dispatch(savePaymentMethod(payment));
//   }

const submitHandler = (e) => {
  e.preventDefault();
    setPayment(e.target.value);
    dispatch(savePaymentMethod(payment));
  history.push("/placeorder");
};


  
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>PHƯƠNG THỨC THANH TOÁN</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                onChange={(e) => setPayment('PayPal')}
              />
              <label className="form-check-label">PayPal or Credit Card</label>
            </div>

            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                // onChange={(e) => setPaymentMomo(e.target.value)}
                onChange={(e) => setPayment('Momo')}
              />
              <label className="form-check-label">MoMo</label>
            </div>

            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                // value={payment}
                // onChange={(e) => setPaymentCod(e.target.value)}
                onChange={(e) => setPayment('Thanh toán khi nhận hàng')}
              />
              <label className="form-check-label">Thanh toán khi nhận hàng</label>
            </div>
          </div>

          <button type="submit">Tiếp tục</button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
