import React from 'react';


/**stateful component */
export default class InnerMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-3">

                <h5 className="my-4">Deals by store ⭣</h5>

                <ul className="list-group list-group-flush">

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="#">All</a>
                        <span className="badge badge-primary badge-danger">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="#">Monton</a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="#">Mosaic</a>
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
        );
    }
}