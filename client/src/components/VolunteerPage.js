import React from 'react'
import { useAuth } from "../contexts/AuthContext";

function VolunteerPage() {
    const { currentUser, logout } = useAuth();
    return (
      <div>
        <h2>This is the Volunteer Page</h2>
        <strong>Email:</strong> {currentUser.email}
      </div>
    );
}

export default VolunteerPage
