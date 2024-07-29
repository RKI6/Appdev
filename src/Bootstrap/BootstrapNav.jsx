import React from "react";
import { Link } from "react-router-dom";

function BootstrapNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow">
    <div className="container-fluid bg-dark">
      <a className="navbar-brand mt-30" href="#">
        <img
          src="https://th.bing.com/th/id/OIP.Cha-judzIJHqSp745CFqIAAAAA?w=196&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt = "E-Court"className="rounded-pill"
          style={{ height: "40px", width: "40px" }}
        ></img>
      </a>

      <p className="text-warning fw-light mt-2 fs-3 rounded-pill">E COURT</p>
      <Link to={"/login"}style={{textDecoration : 'none'}}>
      <button className="btn btn-outline-warning d-sm-block d-lg-none ms-auto me-2">LOGIN</button>
      </Link>
      <button className="navbar-toggler" data-bs-toggle = "collapse" data-bs-target = "#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id = "navbarNav">

     
      <ul className="navbar-nav nav justify-content-end ms-auto">
        <li className="nav-item me-3 ">
          <a href="#" className="nav-link text-white border border-warning-subtle">
            Filings
          </a>
        </li>
        <li className="nav-item me-3">
          <a href="#" className="nav-link text-white">
            Laws
          </a>
        </li>
        <li className="nav-item me-3">
          <a href="#" className="nav-link text-white">
            Trial
          </a>
        </li>
        <li className="nav-item me-3">
          <a href="#" className="nav-link text-white">
            Resources
          </a>
        </li>
        <li className="nav-item me-3">
          <a href="#" className="nav-link text-white">
            Status
          </a>
        </li>
        <li className="nav-item me-3">
        <Link to={"/login"} style={{textDecoration : 'none'}}>
          <button className="btn btn-outline-warning d-sm-none d-lg-block">LOGIN</button>
          
        </Link>
        </li>
      </ul>
      </div>
    </div>
      </nav>
  );
}

export default BootstrapNav;
