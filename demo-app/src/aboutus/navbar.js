import React from 'react'

export default function navbar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
    <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">About Center</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Our Staff</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Parents Blog</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
    </li>
</ul>
      <form className="d-flex offset-lg-4">
        <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success rounded-pill" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
