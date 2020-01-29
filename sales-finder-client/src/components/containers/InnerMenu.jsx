import React from 'react';
import { NavLink } from 'react-router-dom';
import './InnerMenu.css';
/**stateful component */
export default class InnerMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-3 inner-menu">
                <div className="inner-menu-style">
                <h5 className="store-title text-center">                     
                    Deals by store
                </h5>

                <ul id="stores" className="list-group list-group-flush">

                    <li className="list-group-item d-flex justify-content-between align-items-center imenu ">
                        <NavLink activeClassName='imenu-active'  to="/deals/all">All</NavLink>
                        <span className="badge badge-primary bg-danger">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center imenu">
                        <NavLink activeClassName='imenu-active' to="/deals/monton">Monton</NavLink>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center imenu">
                        <NavLink activeClassName='imenu-active' to="/deals/mosaic">Mosaic</NavLink>
                        <span className="badge badge-primary bg-danger">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center imenu">
                        <NavLink activeClassName='imenu-active' to="/deals/baltman">Baltman</NavLink>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center imenu">
                        <NavLink activeClassName='imenu-active' to="/deals/hm">H&amp;M</NavLink>
                        <span className="badge badge-primary bg-danger">1</span>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}