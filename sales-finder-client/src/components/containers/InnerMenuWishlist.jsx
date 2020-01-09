import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import './InnerMenuWishlist.css';
/**stateful component */
export default class InnerMenuWishlist extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-3 inner-menu">
                <div className="inner-menu-style">
                <h5 className="store-title text-center">                     
                    Your Wishlist
                </h5>

                <ul id="stores" className="list-group list-group-flush">

                    <li className="list-group-item d-flex justify-content-between align-items-center imenu ">
                        <NavLink activeClassName='imenu-active'  to="/wishlist/all">All</NavLink>
                        <span className="badge badge-primary bg-danger">14</span>
                    </li>
                    
                </ul>
                </div>
            </div>
        );
    }
}