import React from 'react';

import ProductTable from '../Tables/ProductTable.jsx';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import './Content.css';

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

          <div className="col content-selector">
            <ul className="nav nav-pills p-3">
              <li className="nav-item">
                <a className="nav-link active bg-info" href="#"> Hot</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-info" href="#">New</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-info" href="#">Popular</a>
              </li>
            </ul>
          </div>

        </div>

       <ProductTable />

      </div>


    );
  }
}