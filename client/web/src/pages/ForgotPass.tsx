import React, { useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import "./login.css";

const ForgotPass = () => {
  const [useremail, setUserEmail] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitting user email: ${useremail}`);
  };

  return (
    <div className="login-bg vh-100">
      <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
        <div className="fs-1 fw-bold">Reset Your Password</div>
        <div className="fs-5">
          We'll send you an email to reset your password
        </div>
        <Form className="p-5 w-50" onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingEmail"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              value={useremail}
              onChange={handleUsernameChange}
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <div className="py-3 d-flex flex-column  align-items-center">
            <Button
              className="w-25 p-2 fw-semibold"
              variant="dark"
              type="submit"
            >
              SUBMIT
            </Button>
          <a href="/login" className="cancel pt-3">
            Cancel
          </a>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ForgotPass;
