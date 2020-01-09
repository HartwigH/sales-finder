import React from 'react';

import ProductTableWishlist from '../Tables/ProductTableWishlist';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


import {dataWishlist} from '../data/DataWishlist.js';

/**stateful component */
export default class ContentWishlist extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="col-lg-9">
        
        <ProductTableWishlist data={dataWishlist}/>
      </div>


    );
  }
}