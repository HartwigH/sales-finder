import React from 'react';

import ProductTable from '../Tables/ProductTable.jsx';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



import {dataMonton} from '../data/DataMonton.js';

/**stateful component */
export default class ContentMonton extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
      return (
        <div className="col-lg-9">
          <ProductTable data={dataMonton}/>
        </div>
  
  
      );
    }
}