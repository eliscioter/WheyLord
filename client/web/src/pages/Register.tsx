import React, { useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import "./login.css";
import { useAuthStore } from "../stores/login";
import { toast } from "sonner";

interface User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const { auth } = useAuthStore();
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    console.log(id, value);
    setUser((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.username === "" ||
      user.password === "" ||
      user.confirmPassword === ""
    ) {
      toast.error("Please fill up all the fields");
    } else {
      if (user.password === user.confirmPassword) {
        toast.success("Successfully registered");
        auth({ username: user.username, password: user.password });
      } else {
        toast.error("Password does not match");
      }
    }
  };

  return (
    <div className="login-bg vh-100">
      <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
        <div className="fs-1 fw-bold">Register a new account</div>
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
          <FloatingLabel controlId="username" label="Username" className="mb-3">
            <Form.Control
              type="text"
              placeholder="username"
              value={user.username}
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
            <Button
              className="w-25 p-2 fw-semibold"
              variant="danger"
              href="/login"
            >
              Back
            </Button>
            <Button
              className="w-25 p-2 fw-semibold"
              variant="dark"
              type="submit"
            >
              Sign-Up
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
