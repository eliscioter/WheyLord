import React, { useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import "./login.css"
import { useAuthStore } from "../stores/login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {auth} = useAuthStore();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth({username, password});
  };

  return (
    <div className="login-bg vh-100">
      <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
        <div className="fs-1 fw-bold">Login</div>
        <Form className="p-5 w-50" onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingEmail"
            label="Username"
            className="mb-3"
            >
            <Form.Control
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
            >
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
          </FloatingLabel>
          <div className="user-links d-flex justify-content-between">
            <a href="/forgot-pass">Forgot Password?</a>
            <a href="/register">Create an account</a>
          </div>
          <div className="py-3 d-flex justify-content-center">
            <Button className="w-25 p-2 fw-semibold" variant="dark" type="submit">
              Sign-In
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
