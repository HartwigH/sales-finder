import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

import './ProductTableWishlist.css';

const { SearchBar } = Search;

//custom search
const TableSearchBar = (props) => {
  let input;
  const handleChange = () => {
    props.onSearch(input.value); //eslint-disable-line
  };
  return (
    <div className="form-label-group">
      <span className="fa fa-search form-control-feedback"></span>
      <input
        id="table-search-bar"
        className="form-control form-control-sm"
        ref={n => input = n} //eslint-disable-line
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

const productDetails = (e) => {
  //console.log(e.target);
  var { id } = e.target;
  console.log("See Details for Id: " + id);
  //hashHistory.push('/contacts/details/'+id);
}

const formatProductDetailsButtonCell = (cell, row) => {
  let clickHandler = productDetails;
  var emptyContent = React.createElement('i', { id: row.id, onClick: clickHandler });
  var addBtn = React.createElement('a', { id: row.id, className: "fas fa-minus-circle fa-lg text-danger action-style", onClick: clickHandler }, emptyContent);
  var logBtn = React.createElement('a', { id: row.id, className: "fas fa-search-dollar fa-lg text-info action-style", onClick: clickHandler }, emptyContent);
  var goBtn = React.createElement('a', { id: row.id, className: "fas fa-chevron-circle-right fa-lg text-primary action-style", onClick: clickHandler }, emptyContent);
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
  sortCaret: (order, column) => {
    if (!order) return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
    else if (order === 'asc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-alpha-up"></i></span>);
    else if (order === 'desc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-alpha-down-alt"></i></span>);
    return null;
  }
}, {
  dataField: 'price',
  text: 'Price',
  sort: true,
  sortCaret: (order, column) => {
    if (!order) return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
    else if (order === 'asc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-numeric-up"></i></span>);
    else if (order === 'desc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-numeric-down-alt"></i></span>);
    return null;
  }
}, {
  dataField: 'precentage',
  text: 'Save',
  sort: true,
  sortCaret: (order, column) => {
    if (!order) return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort"></i></span>);
    else if (order === 'asc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-numeric-down"></i></span>);
    else if (order === 'desc') return (<span className="sort-caret">&nbsp;&nbsp;<i className="fas fa-sort-numeric-up-alt"></i></span>);
    return null;
  }
}, {
  dataField: '',
  text: 'Action',
  formatter: formatProductDetailsButtonCell
}];

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size} Results
    </span>
);

const pageButtonRenderer = ({
  page,
  active,
  disable,
  title,
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

  // A numeric array is also available. the purpose of above example is custom the text
};



/**stateful component */
export default class ProductTableWishlist extends React.Component {

  constructor(props) {
    super(props);

  }



  render() {
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
        </div>
      );
    }

    return (

      <div className="product-table-wishlist">
        <PaginationProvider pagination={paginationFactory(paginationConfig)} >
          {contentTable}
        </PaginationProvider >
      </div>
    );
  }
}