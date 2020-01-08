import React from 'react';


/**stateful component */
export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar  navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"> <img src="media/logo.png" width="30" height="30" className="d-inline-block align-middle" alt="" />
                        Sales Finder</a>
                    <span className="navbar-text"><i>/ consume smart /</i></span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">  Deals
                                <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">
                                    Wishlist <span className="badge badge-primary badge-danger">1</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#"> Settings <img src="media/settings.png" width="20" height="20" className="d-inline-block align-middle" alt="" /></a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-danger" type="button"> Logout <img src="media/logout.png" width="20" height="20" className="d-inline-block align-middle" alt="" /></button>
                    </div>
                </div>
            </nav>
        );
    }
}