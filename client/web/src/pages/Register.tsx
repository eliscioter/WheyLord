import React, { useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import "./login.css";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setUser((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user.password === user.confirmPassword) {
      console.log("Passwords match");
      // Add code to submit the form
    } else {
      console.log("Passwords do not match");
      // Add code to display an error message
    }
  };

  return (
    <div className="login-bg vh-100">
      <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
        <div className="fs-1 fw-bold">Register an new account</div>
        <Form className="p-5 w-50" onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="firstName"
            label="First Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="First Name"
              value={user.firstName}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="lastName"
            label="Last Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={user.lastName}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="email"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={user.email}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="password" label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="confirmPassword"
            label="Confirm Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <div className="py-3 d-flex justify-content-between">
            <Button className="w-25 p-2 fw-semibold" variant="danger" href="/login">
              Back
            </Button>
            <Button className="w-25 p-2 fw-semibold" variant="dark" type="submit">
              Sign-Up
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
