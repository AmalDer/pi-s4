import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import ChatRoom from './chatbot/ChatRoom';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      //here we can display chatbot component
      //our chatbot is visible only when we log in
      <>
        <div className="col-lg-6">
          <div className="masthead-device-mockup">
            <ChatRoom />
          </div>
        </div>
        <button class="btn btn-primary rounded-pill px-3 me-4 mb-2 mb-lg-0" onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button></>
    )
  )
}

export default LogoutButton