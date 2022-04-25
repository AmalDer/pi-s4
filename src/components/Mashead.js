import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ChatRoom from "./chatbot/ChatRoom";
import image from "../assets/robot.png";
import './chatbot/Chatbot.css';

function Mashead (){

  const { user, isAuthenticated } = useAuth0();

  return(
    <>
      {
      isAuthenticated && (
    <div>
          {/* Mashead header*/}
          <header className="masthead" id="page-top">
            <div className="container px-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="mb-5 mb-lg-0 text-center text-lg-start">
                    <p className="lead fw-normal mb-5">Bonjour, je suis votre secrétaire virtuel!<br />
                      Cliquez sur le micro et je vous répondrais.</p>
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="chatbot">
                    <ChatRoom/>
                  </div>
                </div> */}
              </div>
            </div>
          </header>
        </div>
    )
  }
{
  !isAuthenticated &&(

    <div>
          {/* Mashead header*/}
          <header className="masthead" id="page-top">
            <div className="container px-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="mb-5 mb-lg-0 text-center text-lg-start">
                    <h1 className="display-1 lh-1 mb-3">Je suis votre secrétaire virtuel</h1>
                    <p className="lead fw-normal mb-5">Bonjour, je suis votre secrétaire virtuel!<br />
                      Cliquez sur le micro et je vous répondrais.</p>
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* Masthead device mockup feature*/}
                  <div className="masthead-device-mockup">
                    <img src={image} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
  )
  }
    </>
  )
    
}

export default Mashead;
