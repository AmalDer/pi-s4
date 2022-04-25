import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { user, logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <button class="btn btn-primary rounded-pill px-3 me-4 mb-2 mb-lg-0" onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
    )
  )
}

export default LogoutButton
