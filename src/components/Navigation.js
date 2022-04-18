import React from 'react'
import LoginButton from './login/LoginButton'
import LogoutButton from './login/LogoutButton';
import Profile from './login/Profile';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Navigation() {
    return(
        <div>
            {/* Navigation*/}
              <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
                <div className="container px-5">
                  <a className="navbar-brand fw-bold" href="#page-top">Smart secretary</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                      <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Fonctionnalités</a></li>
                      <li className="nav-item"><a className="nav-link me-lg-3" href="#about">A propos</a></li>
                    </ul>
                    <LoginButton/>
                    <LogoutButton/>
                    <button class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                        <span class="d-flex align-items-center">
                            <i class="bi-chat-text-fill me-2"></i>
                            <span class="small">Contactez nous</span>
                        </span>
                    </button>
                  </div>
                </div>
              </nav>

        </div>
    )
}
