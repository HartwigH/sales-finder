import React from 'react';
import { Link, NavLink,Route, Switch } from 'react-router-dom';

/**stateful component */
export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar  navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Sales Finder    
                        <img src="/media/logo.png" width="30" height="30" className="d-inline-block align-middle" alt="" />
                    </Link> 
                    <span className="navbar-text"><i>/ consume smart /</i></span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/deals/all">Deals</NavLink>                                
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/wishlist/all">Wishlist <span className="badge badge-primary badge-danger">1</span></NavLink>  
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/notifications">Settings</NavLink>         
                            </li>
                        </ul>
                        <button className="btn btn-outline-primary" type="button"> Logout <i className="fas fa-sign-out-alt"></i></button>
                    </div>
                </div>
            </nav>
        );
    }
}