import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

/**stateful component */
export default class NavbarDefault extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                            <li className="nav-item active">
                                <Link className="nav-link" to="/deals/all">Deals</Link>                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sign-in">Sign In</Link>
                            </li>
                        </ul>
                        <Link className="btn btn-outline-primary" to="/register">Register</Link>
                    </div>
                </div>
            </nav>
        );
    }
}