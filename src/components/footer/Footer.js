import React from "react";

import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function Footer() {
    return(
            <footer>
                <div>
                    <div>
                    <div>©Secretary Assistant. All Rights Reserved.</div>
                    <Routes>
                        <Route path="/" element={
                            <>
                            <li>
                                <Link to="/Privacy">Privacy</Link>
                            </li>
                            <li>
                                <Link to="/Terms">Terms</Link>
                            </li>
                            <li>
                                <Link to="/FAQ">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/features">Our features</Link>
                            </li>
                            <li>
                                <Link to="/about">About us</Link>
                            </li>
                            </>
                        }
                        />
                    </Routes>
                    </div>
                </div>
            </footer>
    )
}
