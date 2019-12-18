import React from 'react';
import ProductModal from '../widgets/ProductModal.jsx';

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
                <a className="nav-link active bg-danger " href="#"><img src="media/hot.png" width="20" height="20" className="d-inline-block align-middle" alt=""/> Hot</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">New</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Others are watching</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <div className="dropdown p-3 float-right">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Highest discount %
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Lowest discount %</a>
                <a className="dropdown-item" href="#">Lowest price</a>
                <a className="dropdown-item" href="#">Highest price</a>
                <a className="dropdown-item" href="#">Latest</a>
              </div>
            </div>
          </div>

        </div>


        <div className="row">

          <table className="table">
            <tbody>
              <tr>
                <td><img src="https://monton.andmorefashion.com/media/catalog/product/cache/1/image/288x355/17f82f742ffe127f42dca9de82fb58b1/9/5/95129_262839" alt="Monton o-neck top" className="active" height="150"/></td>
                <td>O-neck top</td>
                <td><a href="#" data-toggle="modal" data-target={<ProductModal/>}>Price over time <img src="media/search.png" width="30" height="30" className="d-inline-block align-middle" alt=""/></a></td>
                <td className="text-danger" title="price up">▲</td>
                <td className="text-danger">€39.95</td>                
              </tr>
              <tr>
                <td><img src="https://monton.andmorefashion.com/media/catalog/product/cache/1/image/288x355/17f82f742ffe127f42dca9de82fb58b1/9/5/95131_263189" alt="Monton o-neck top" className="active" height="150"/></td>
                <td>O-neck top</td>
                <td><a href="#" data-toggle="modal" data-target="#exampleModalCenter">Price over time <img src="media/search.png" width="30" height="30" className="d-inline-block align-middle" alt=""/></a></td>
                <td title="no price change">▬</td>
                <td>€39.95</td>                
              </tr>
              <tr>
                <td><img src="https://monton.andmorefashion.com/media/catalog/product/cache/1/image/288x355/17f82f742ffe127f42dca9de82fb58b1/9/5/95128_262808" alt="Monton hooded top" className="active" height="150"/></td>
                <td>Hooded top</td>
                <td><a href="#" data-toggle="modal" data-target="#exampleModalCenter">Price over time <img src="media/search.png" width="30" height="30" className="d-inline-block align-middle" alt=""/></a></td>
                <td className="text-success" title="price down">▼</td>
                <td className="text-success">€35.00</td>                
              </tr>
              <tr>
                <td><img src="https://monton.andmorefashion.com/media/catalog/product/cache/1/image/288x355/17f82f742ffe127f42dca9de82fb58b1/9/4/94800" alt="Monton o-neck top" className="hover" height="150"/></td>
                <td>O-neck top</td>
                <td><a href="#" data-toggle="modal" data-target="#exampleModalCenter">Price over time <img src="media/search.png" width="30" height="30" className="d-inline-block align-middle" alt=""/></a></td>
                <td className="text-success" title="price down">▼</td>
                <td className="text-success">€25.00</td>                
              </tr>
            </tbody>
          </table>

        </div>



        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1">Previous</a>
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