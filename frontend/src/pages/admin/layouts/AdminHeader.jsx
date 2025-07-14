import "../../../style/adminSideBar.css";
import React, { useState } from "react";
import headerLogo from "../../../assets/Blitz_LogoSmall.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

/**
 * Renders the admin header component.
 *
 * @param {function} handelUserLogout - The logout function.
 * @param {object} user - The user object.
 * @return {JSX.Element} The rendered admin header component.
 */
const AdminHeader = ({ handelUserLogout, user }) => {
  return (
    <>
      <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5">
        <Navbar bg="dark header  py-4 px-3 mx-auto" expand="lg">
          <Container fluid className="container-fluid">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={headerLogo}
                width="68"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
              <Nav className="me-auto ml-auto">
                <Nav.Link className="text-white">
                  <i className="bi bi-stack ml-2"></i>
                  <NavLink
                    to="/dashboard"
                    className="text-white btn btn-primary"
                  >
                    Dashboard
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="text-white">
                  <i className="bi bi-person-lines-fill ml-2"></i>
                  <Link to="/contacts" className="btn btn-primary">
                    Contacts
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-white">
                  <i className="bi bi-tropical-storm ml-2"></i>
                  <Link to="/pipeline" className="btn btn-primary">
                    Pipeline
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-white">
                  <i className="bi bi-chat-square ml-2"></i>
                  <Link to="/conversations" className="btn btn-primary">
                    Conversations
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-white">
                  <i className="bi bi-card-heading ml-2"></i>
                  <Link to="/campaigns" className="btn btn-primary">
                    Campaigns
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Nav className="">
                <Link to="/" className="">
                  <p>{user && user.name}</p>
                </Link>
                <Nav.Link className="text-white btn btn-primary">
                    <i class="bi bi-gear mr-3"></i>
                  <Link to="/dashboard" className="logout-item text-white ml-auto">
                    Setting
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-white btn btn-primary">
                  <Link
                    to="/"
                    onClick={handelUserLogout}
                    className="logout-item text-white "
                  >
                    <i className="bi bi-box-arrow-left ml-2"></i>
                    SignOut
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default AdminHeader;
