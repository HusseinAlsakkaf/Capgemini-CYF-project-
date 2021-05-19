import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";

function SignupConfirmation() {
    return (
      <div>
        <h2>Thank you for Registering </h2>
        <div className="w-100 text-center mt-2">
          <Link to="/login">
            <Button className="w-100" type="submit">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    );
}

export default SignupConfirmation
