import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from './logo_shop.png';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Link to='/' className="navbar-brand" >
            <img src={logo} alt="Logo" className="logoStyle img-fluid" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className="nav-link "  >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/category' className="nav-link " >
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/register' className="nav-link">
                  SignUp
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/login' className="nav-link" >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/carte' className="nav-link" >
                  shoie {0}
                </NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header