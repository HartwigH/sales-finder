import React from 'react';
import ProductModal from '../widgets/ProductModal.jsx';

/**stateful component */
export default class ContentMosaic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {modalShow:false}
    }

    render() {
        return (
            <div className="col-lg-9">

        <div className="row">

          <div className="col">
            <ul className="nav nav-pills p-3">
              <li className="nav-item">
                <a className="nav-link active bg-danger " href="#"> Hot <img src="../media/hot.png" width="20" height="20" className="d-inline-block align-middle" alt=""/></a>
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

          <h1 className="text-center">MOSAIC</h1>

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


      <ProductModal
      show={this.state.modalShow}
      /> 


      </div>

      
        );
    }
}