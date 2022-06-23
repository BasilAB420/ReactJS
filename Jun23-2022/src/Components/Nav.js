import React from "react";
import {NavLink} from "react-router-dom"

function Nav() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="site-title navbar-brand">Navbar</NavLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li>
                    <NavLink Class="active-link nav-link" to="/Home">Home</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink Class="active-link nav-link" to="/About">About</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink Class="active-link nav-link" to="/Contact">Contact</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
        </>
  );
}
export default Nav;