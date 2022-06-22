import React from "react";
import * as ReactBootstrap from "react-bootstrap";

function Nav() {
  return (
    <>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand href="#home">
            <img
              alt=""
              src="./logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Site
          </ReactBootstrap.Navbar.Brand>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
    </>
  );
}
export default Nav;
