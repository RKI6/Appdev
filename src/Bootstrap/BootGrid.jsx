import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from "react";

function BootGrid() {
  return (
    <div className="container-fluid text-center">
      <div className="row bg-primary">
        <div className="col-lg-6 col-sm-4 col-xs-2">col1</div>
        <div className="col-lg-6 col-sm-4 col-xs-2">col2</div>
        <div className="col-lg-6 col-sm-4 col-xs-2">col3</div>
      </div>
      <div className="row bg-secondary">
        <div className="col-md-8">c4</div>
        <div className="col-md-8">c5</div>
      </div>
      <div className="row bg-light">
        <div className="col-lg-8">new</div>
        <div className="col-lg-8">new</div>
        <div className="col-lg-8">new</div>
        <div className="col-lg-8">new</div>
        <div className="col-lg-8">
          <blockquote className = "blockquote-footer text-white-50 bg-black">blockquote</blockquote>
          <footer className="blockquote-footer">bq-footer</footer>
          <p className="blockquote-footer">para</p>
          <p ><kbd>Albert</kbd> Dld</p>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default BootGrid;
