import React from 'react';
import { NavLink } from 'react-router-dom';
import './InnerMenuSettings.css';
/**stateful component */
export default class InnerMenuSettings extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-3 inner-menu">
                <div className="inner-menu-style">
                <h5 className="store-title text-center">                     
                    Your Settings
                </h5>

                <ul id="stores" className="list-group list-group-flush">

                    <li className="list-group-item d-flex justify-content-between align-items-center imenu ">
                        <NavLink activeClassName='imenu-active'  to="/notifications">Notifications</NavLink>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center imenu">
                        <NavLink activeClassName='imenu-active' to="/account">Account settings</NavLink>
                    </li>
                   
                </ul>
                </div>
            </div>
        );
    }
}