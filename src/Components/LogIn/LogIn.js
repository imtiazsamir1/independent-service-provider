import React from "react";
import { Button, Form, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div>
      <div className="container w-50 mx-auto">
        <h2 className="text-primary text-center mt-2">Please Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              // ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
            Login
          </Button>
        </Form>
        {/* {errorElement} */}
        <p>
          New to SPORTS PHOTOGRAPHY?{" "}
          <Link
            to="/register"
            className="text-primary pe-auto text-decoration-none"
            // onClick={navigateRegister}
          >
            Please Register
          </Link>{" "}
        </p>
        {/* <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p> */}

        <ToastContainer />
      </div>
    </div>
  );
};

export default LogIn;
