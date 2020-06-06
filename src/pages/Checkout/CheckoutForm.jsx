import React, { useState, useEffect } from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Col, Form } from 'react-bootstrap'
import { withRouter } from 'react-router'

function CheckoutForm(props) {
  const [validated, setValidated] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window.fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] })
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    const form = ev.currentTarget;
    ev.preventDefault();
    ev.stopPropagation();

    setValidated(true);

    if (form.checkValidity()) {
      setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement('card')
        }
      });

      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);

        props.history.push('/order-complete')
      }
    }
  };

  return (
    <Form className="w-100" noValidate validated={validated} onSubmit={handleSubmit}>
      <h6 className="text-center text-uppercase">Personal Details </h6><br />

      <Form.Row>
        <Form.Group as={Col} xs={12} lg={6}>
          <Form.Control placeholder="First Name" required value="Test" />
        </Form.Group>

        <Form.Group as={Col} xs={12} lg={6}>
          <Form.Control placeholder="Last Name" required value="User" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control placeholder="Email Address" required value="test@gmail.com" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <p>We will send your Premium Report PDF and <br />receipt to this email address within 24 hours.</p>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} xs={12} lg={6}>
          <Form.Control placeholder="Phone Number" required value="0123456789" />
        </Form.Group>
      </Form.Row>

      <br /><h6 className="text-center text-uppercase">Billing Address</h6><br />
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control placeholder="Street Address" required value="123 Main St" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control placeholder="City" required value="Los Angeles" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} xs={12} lg={6}>
          <Form.Control placeholder="State" required value="CA" />
        </Form.Group>

        <Form.Group as={Col} xs={12} lg={6}>
          <Form.Control placeholder="Zip" required value="90026" />
        </Form.Group>
      </Form.Row>

      <br /><h6 className="text-center text-uppercase">Credit Card</h6><br />

      <Form.Row>
        <Form.Group as={Col} className="text-center">
          <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
          <button
            disabled={processing || disabled || succeeded}
            id="submit"
          >
            <span id="button-text">
              {processing ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                  "Finalize & Pay"
                )}
            </span>
          </button>
          {/* Show any error that happens when processing the payment */}
          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
          {/* Show a success message upon completion */}
          <p className={succeeded ? "result-message" : "result-message hidden"}>
            Payment succeeded, see the result in your
              <a
              href={`https://dashboard.stripe.com/test/payments`}
            >
              {" "}
                Stripe dashboard.
              </a> Refresh the page to pay again.
            </p>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

export default withRouter(CheckoutForm)