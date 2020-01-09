import React from 'react';

import ProductTable from '../Tables/ProductTable.jsx';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import {dataMosaic} from '../data/DataMosaic.js';
import { dataMonton } from '../data/DataMonton.js';

/**stateful component */
export default class ContentBaltman extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
      return (
        <div className="col-lg-9">

          <div className="mh-100" style={{'padding-top': "250px", 'padding-bottom': "250px", color: "#adb5bd"}}>  
          <h1 className="text-center align-middle">Coming soon <i class="fas fa-tools"></i></h1>
          </div>
          
        </div>
    
      ); 
    }
}