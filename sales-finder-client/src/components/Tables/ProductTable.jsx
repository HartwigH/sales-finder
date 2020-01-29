import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

import ProductModal from '../widgets/ProductModal.jsx';

import './ProductTable.css';



/**stateful component */
export default class ProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      selectId: 0
    }
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }


  render() {
    //custom search
    const TableSearchBar = (props) => {
      let input;
      const handleChange = () => {
        props.onSearch(input.value);
      };
      return (
        <div className="form-label-group">
          <span className="fa fa-search form-control-feedback"></span>
          <input
            id="table-search-bar"
            className="form-control form-control-sm"
            ref={n => input = n} 
            type="text"
            placeholder="Search..."
            onChange={handleChange}
          />
          <label htmlFor="table-search-bar">Search...</label>

        </div>
      );
    };

    // handle url
    const imageFormatter = (cell, row) => {
      let imgUrl = React.createElement('img', {
        src: row.url,
        id: 'product-img'
      });
      return imgUrl;
    }

    const addProductToWishlist = (e) => {
      var { id } = e.target;
      console.log("Adding to wishlist: " + id);
    }


    let productId = 0;
    const seeProductHistory = (e) => {
      var { id } = e.target;
      productId = id;
      this.setState({
        selectId: productId
      });
      console.log("I am sending id = " + productId);
    }

    const goToProduct = (e) => {
      //window.open(id, '_blank'); <- uncomment when using real data
      window.open('https://www.google.com', '_blank');
    }

    const precentageFormatter = (cell) => {
      return (
        <span>
          {cell}%
          </span>
      );
    }

    const formatProductDetailsButtonCell = (cell, row) => {
      let clickHandler = addProductToWishlist;
      let clickInfo = seeProductHistory;
      let clickToUrl = goToProduct;
      var emptyContent = React.createElement('i', { id: row.id, onClick: clickHandler });
      var addBtn = React.createElement('a', { id: row.id, className: "far fa-star fa-lg text-warning action-style", onClick: clickHandler, title: "Add to wishlist" }, emptyContent);
      var logBtn = React.createElement('a', { id: row.id, className: "fas fa-search-dollar fa-lg text-info action-style", 'data-toggle': "modal", 'data-target': "#exampleModalCenter", onClick: clickInfo }, emptyContent);
      var goBtn = React.createElement('a', { id: row.url, className: "fas fa-chevron-circle-right fa-lg text-primary action-style", onClick: clickToUrl, title: "See product in store" }, emptyContent);
      const container = React.createElement('div', {}, [addBtn, logBtn, goBtn]);
      return container;
    }

    const columns = [{
      dataField: 'url',
      text: 'Image',
      formatter: imageFormatter
    }, {
      dataField: 'product',
      text: 'Name',
      sort: true,
      sortCaret: (order) => {
        if (!order) return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
        else if (order === 'asc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-alpha-up"></i></span>);
        else if (order === 'desc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-alpha-down-alt"></i></span>);
        return null;
      }
    }, {
      dataField: 'price',
      text: 'Price',
      sort: true,
      sortCaret: (order) => {
        if (!order) return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
        else if (order === 'asc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-numeric-up"></i></span>);
        else if (order === 'desc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-numeric-down-alt"></i></span>);
        return null;
      }
    }, {
      dataField: 'precentage',
      text: 'Save',
      sort: true,
      sortCaret: (order) => {
        if (!order) return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
        else if (order === 'asc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-numeric-down"></i></span>);
        else if (order === 'desc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-numeric-up-alt"></i></span>);
        return null;
      },
      formatter: precentageFormatter
    }, {
      dataField: '',
      text: 'Action',
      formatter: formatProductDetailsButtonCell
    }];


    const pageButtonRenderer = ({
      page,
      active,
      onPageChange
    }) => {
      const handleClick = (e) => {
        e.preventDefault();
        onPageChange(page);
      };
      const activeStyle = {};
      if (active) {
        activeStyle.backgroundColor = '#17a2b8';
        activeStyle.color = 'white';
      } else {
        activeStyle.backgroundColor = 'white';
        activeStyle.color = '#17a2b8';
      }
      if (typeof page === 'string') {
        activeStyle.backgroundColor = 'white';
        activeStyle.color = '#17a2b8';
      }
      return (
        <li className="page-item">
          <a href="#" onClick={handleClick} style={activeStyle}>{page}</a>
        </li>
      );
    };

    const paginationConfig = {
      custom: true,
      pageButtonRenderer
    };

    const data = this.props.data;
    const contentTable = ({ paginationProps, paginationTableProps }) => {

      return (
        <div>
          <ToolkitProvider
            keyField="id"
            columns={columns}
            data={data}
            search
          >
            {
              (toolkitprops) => {

                return (
                  <div>
                    <div className="row">
                      <div className="col-sm-8">
                      </div>
                      <div className="col-sm-4">
                        <div className="product-search">
                          <TableSearchBar {...toolkitprops.searchProps} />
                        </div>
                      </div>
                    </div>
                    <br />

                    <BootstrapTable
                      {...toolkitprops.baseProps}
                      {...paginationTableProps}
                      bordered={false}
                    />

                  </div>);
              }
            }
          </ToolkitProvider>

          <SizePerPageDropdownStandalone {...paginationProps} />
          <PaginationListStandalone {...paginationProps} />


          <ProductModal data={data} productId={this.state.selectId}
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}>
          </ProductModal>
        </div>
      );
    }

    return (

      <div className="product-table">
        <PaginationProvider pagination={paginationFactory(paginationConfig)} >
          {contentTable}
        </PaginationProvider >

      </div>
    );
  }
}