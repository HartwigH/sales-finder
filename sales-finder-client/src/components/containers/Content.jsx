import React from 'react';
import ProductModal from '../widgets/ProductModal.jsx';

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
                <a className="nav-link active btn-outline-danger" href="#"> Hot <i className="fas fa-fire"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">New</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Popular</a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <div className="dropdown p-3 float-right">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span>Highest discount %</span>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Highest discount %</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Lowest discount %</a>
                <a className="dropdown-item" href="#">Lowest price</a>
                <a className="dropdown-item" href="#">Highest price</a>
                <a className="dropdown-item" href="#">Latest</a>
              </div>
            </div>
          </div>

        </div>


        <div className="row">

        <BootstrapTable 
                    keyField='id' data={ data } columns={ columns }    
                    bordered={ false }                                    
                    />
                    {/* 
          <table className="table" id="product-table">
            <tbody>
              {products.map((products) => (
                <tr key={products.id}>
                  <td><img src={products.image} alt={products.product} className="active  " height="150"/></td>
                  <td>{products.product}</td>
                  <td><a href="#" className="pto-text" data-toggle="modal" data-target="#exampleModalCenter" >Price over time <i className="fas fa-search-dollar fa-lg"></i></a></td>
                  <td className="text-danger" title="price up"><i className="fas fa-angle-double-up"></i></td>
                  <td className="text-success">{products.price}</td>
                </tr>
              ))}

              <tr>
                <td><img src="https://monton.andmorefashion.com/media/catalog/product/cache/1/image/288x355/17f82f742ffe127f42dca9de82fb58b1/9/5/95129_262839" alt="Monton o-neck top" className="active  " height="150"/></td>
                <td>O-neck top</td>
                <td><a href="#" className="pto-text" data-toggle="modal" data-target="#exampleModalCenter" >Price over time <i className="fas fa-search-dollar fa-lg"></i></a></td>
                <td className="text-danger" title="price up"><i className="fas fa-angle-double-up"></i></td>
                <td className="text-danger">€39.95</td>                
              </tr>
              <tr>
                <td><img src="https://monton.andmorefashion.com/media/catalog/product/cache/1/image/288x355/17f82f742ffe127f42dca9de82fb58b1/9/5/95131_263189" alt="Monton o-neck top" className="active  " height="150"/></td>
                <td>O-neck top</td>
                <td><a href="#" className="pto-text" data-toggle="modal" data-target="#exampleModalCenter">Price over time <i className="fas fa-search-dollar fa-lg"></i></a></td>
                <td title="no price change"><i className="fas fa-minus"></i></td>
                <td>€39.95</td>                
              </tr>
              <tr>
                <td><img src="https://monton.andmorefashion.com/media/catalog/product/cache/1/image/288x355/17f82f742ffe127f42dca9de82fb58b1/9/5/95128_262808" alt="Monton hooded top" className="active  " height="150"/></td>
                <td>Hooded top</td>
                <td><a href="#"  className="pto-text" data-toggle="modal" data-target="#exampleModalCenter">Price over time <i className="fas fa-search-dollar fa-lg"></i></a></td>
                <td className="text-success" title="price down"><i className="fas fa-angle-double-down"></i></td>
                <td className="text-success">€35.00</td>                
              </tr>
              <tr>
                <td><img src="https://monton.andmorefashion.com/media/catalog/product/cache/1/image/288x355/17f82f742ffe127f42dca9de82fb58b1/9/4/94800" alt="Monton o-neck top" className="active  " height="150"/></td>
                <td>O-neck top</td>
                <td><a href="#" className="pto-text" data-toggle="modal" data-target="#exampleModalCenter">Price over time <i className="fas fa-search-dollar fa-lg"></i></a></td>
                <td className="text-success" title="price down"><i className="fas fa-angle-down"></i></td>
                <td className="text-success">€25.00</td>                
              </tr>
              
            </tbody>
          </table>
*/}
        </div>



        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>





      </div>


    );
  }
}