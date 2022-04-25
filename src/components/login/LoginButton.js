import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import image from "../../assets/robot.png";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      //the robot image is visible only when we're logged out
      <>
      {/*<p className="lead fw-normal mb-5">Bonjour, je suis votre secrétaire virtuel!<br />
      Je suis là pour vous aider !</p>
      <div className="col-lg-6">
        <div className="masthead-device-mockup">
          <img src={image} className="img-fluid" />
        </div>
    </div>*/}
      <button class="btn btn-primary rounded-pill px-3 me-4 mb-2 mb-lg-0" onClick={() => loginWithRedirect()}>
          Log In
        </button></>
    )
  )
}

export default LoginButton
