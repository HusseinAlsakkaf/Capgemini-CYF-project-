import React from "react";

function Registration () {

    return (
        <div className="page-container">
            <form id="registration-form">
                <div className="mb-3">
                    <label for="registration-name" className="form-label">Full Name</label>
                    <input id="registration-name" type="text" class="form-control" placeholder="John Doe" required />
                </div>

                <div className="mb-3">
                    <label for="registration-email" className="form-label">Email</label>
                    <input id="registration-email" type="email" class="form-control" placeholder="name@example.com" />
                </div>

                <div className="mb-3">
                    <label for="registration-password" className="form-label">Password</label>
                    <input id="registration-password" type="password" class="form-control" aria-describedby="passwordHelpBlock" />
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long.
                    </div>
                </div>

                <div className="mb-3">
                    <label for="registration-user" className="form-label">User Type</label>
                    <select id="registration-user" class="form-select">
                        <option value="trainee">Trainee</option>
                        <option value="volunteer">Volunteer</option>
                    </select>
                </div>
                    
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Registration;