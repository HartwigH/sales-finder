import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

/**stateful component */
export default class InnerMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-3 inner-menu">
                <div className="inner-menu-style">
                <h5 className="my-4 text-center" data-toggle="collapse" data-target="#stores" aria-expanded="false" aria-controls="stores">                     
                    Deals by store
                </h5>

                <ul id="stores" className="list-group list-group-flush">

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to="/deals/all">All</Link>
                        <span className="badge badge-primary badge-danger">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to="/deals/monton">Monton</Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to="/deals/mosaic">Mosaic</Link>
                        <span className="badge badge-primary badge-danger">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="#">Baltman</a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="#">H&amp;M</a>
                        <span className="badge badge-primary badge-danger">1</span>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}