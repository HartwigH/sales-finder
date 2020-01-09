import React from 'react';

import ProductTable from '../Tables/ProductTable.jsx';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



import {data} from '../data/Data.js';

/**stateful component */
export default class Content extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="col-lg-9">
        <ProductTable data={data}/>
      </div>


    );
  }
}