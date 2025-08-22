import './Payment.css'
// import React from "react";

export default function CheckoutForm() {
    return (
        <div className="checkout-container">
            <div className="form-section">
                <h3>Billing Center</h3>
                <label>Name :</label>
                <input type="text" placeholder="Enter  name" />

                <label>Surname :</label>
                <input type="text" placeholder="Enter surname" />

                <label>Email Address :</label>
                <input type="email" placeholder="Enter email" />

                <label>Amount :</label>
                <input type="text" placeholder="Enter full Amount" />
            </div>

            <div className="form-section">
                <h3>Payment</h3>
                <label>Accepted Cards :</label>
                <div className="card-icons">
                    <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" />
                    <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" />
                    <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
                    <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
                </div>

                <label>Name On Card :</label>
                <input type="text" placeholder="Enter Name On Card" />

                <label>Credit Card Number :</label>
                <input type="text" placeholder="1111-2222-3333-4444" />

                <div className="inline-fields">
                    <div>
                        <label>Exp Year :</label>
                        <input type="text" placeholder="2022" />
                    </div>
                    <div>
                        <label>CVV :</label>
                        <input type="text" placeholder="1234" />
                    </div>
                </div>
            </div>

            <button className="checkout-btn">Proceed To Make Payment</button>
        </div>
    );
}
