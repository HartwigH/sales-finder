import React from 'react';
import ProductModal from '../widgets/ProductModal.jsx';
import ProductTable from '../Tables/ProductTable.jsx';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {data} from '../data/Data.js';

const imageFormatter = (cell, row) => {
  let imgUrl = React.createElement('img',  {
    src: row.image,
    id:'product-img'
  });
  return  imgUrl;
}

const columns = [{
  dataField: 'product',
  text: 'Product name',
  sort: true
}, {
  dataField: 'image',
  text: 'image',
  sort: true,
  formatter: imageFormatter
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true
}];

/**stateful component */
export default class Content extends React.Component {

  constructor(props) {
    super(props);

  }



  render() {

  

    return (
      <div className="col-lg-9">

        <div className="row">

          <div className="col">
            <ul className="nav nav-pills p-3">
              <li className="nav-item">
                <a className="nav-link active bg-danger" href="#"> Hot</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">New</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Popular</a>
              </li>
            </ul>
          </div>

        </div>

       <ProductTable />

      </div>


    );
  }
}