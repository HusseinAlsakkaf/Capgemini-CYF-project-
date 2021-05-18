import React from "react";

function Login() {

    return (
        <div className="page-container">
            <form id="login-form">
                <div className="mb-3">
                    <label for="login-email" className="form-label">Email</label>
                    <input id="login-email" type="email" class="form-control" />
                </div>

                <div className="mb-3">
                    <label for="login-password" className="form-label">Password</label>
                    <input id="login-password" type="password" class="form-control"  />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;