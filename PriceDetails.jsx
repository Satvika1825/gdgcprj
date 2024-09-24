import React from 'react';

const PriceDetails = ({ cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const couponDiscount = 50;
  const platformFee = 10;
  const shippingCharges = 20;
  const totalAmount = totalPrice - couponDiscount + platformFee + shippingCharges;

  return (
    <div className="price-details">
      <h2>Price Details</h2>
      <p>Total MRP: ₹{totalPrice}</p>
      <p>Coupon Discount: ₹{couponDiscount}</p>
      <p>Platform Fee: ₹{platformFee}</p>
      <p>Shipping Charges: ₹{shippingCharges}</p>
      <p>Total Amount: ₹{totalAmount}</p>
      <button className="place-order">Place Order</button>
    </div>
  );
};

export default PriceDetails;
