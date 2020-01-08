import React from 'react';
import ProductModal from '../widgets/ProductModal.jsx';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone  } from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';


import {data} from '../data/Data.js';

import './ProductTable.css';

const { SearchBar } = Search;

const TableSearchBar = (props) => {
  let input;
  const handleChange = () => {
    props.onSearch(input.value); //eslint-disable-line
  };
  return (
    <div className="form-label-group">
      <span class="fa fa-search form-control-feedback"></span>
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

const imageFormatter = (cell, row) => {
  let imgUrl = React.createElement('img',  {
    src: row.url,
    id:'product-img'
  });
  return  imgUrl;
}

const productDetails = (e)=> {   
    //console.log(e.target);
    var { id} = e.target;
    console.log("See Details for Id: "+id);
    //hashHistory.push('/contacts/details/'+id);
}

const formatProductDetailsButtonCell =(cell, row)=>{  
    let clickHandler=productDetails;
    var emptyContent = React.createElement('i',{id:row.id,onClick:clickHandler});			
    var aBtn = React.createElement('a',{id:row.id,className:"fas fa-cart-plus fa-lg text-success", onClick:clickHandler}, emptyContent);
    return aBtn;	
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
    text: 'Add to wishlist',
    formatter: formatProductDetailsButtonCell
  }];

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );

  const paginationConfig = {
    custom: true,
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    sizePerPageList: [{
      text: '10', value: 10
    }, {
      text: '25', value: 25
    }, {
        text: '50', value: 50
    }, {
        text: '100', value: 100
    }, {
      text: 'All', value: data.length
    }] // A numeric array is also available. the purpose of above example is custom the text
  };

/**stateful component */
export default class Content extends React.Component {

  constructor(props) {
    super(props);

  }



  render() {

    const contentTable = ({ paginationProps, paginationTableProps }) => {

        return (
          <div>
             
            <ToolkitProvider
              keyField="id"
              columns={ columns }
              data={ data }
              search
            >
             {
               (toolkitprops)=>{

                return   (
                <div>                
                    <div className="row">     
                        <div className="col-sm-8">
                        </div>             
                        <div className="col-sm-4">                          
                        <div className="product-search">                        
                          <TableSearchBar { ...toolkitprops.searchProps } />                          
                          </div>                                        
                        </div>
                    </div>                                  
                    <br/>

                    <BootstrapTable
                      { ...toolkitprops.baseProps }
                      { ...paginationTableProps }
                      bordered={ false } 
                    />

                </div>);  


               }
             }
            </ToolkitProvider>
               
            <SizePerPageDropdownStandalone { ...paginationProps } />
            <PaginationListStandalone { ...paginationProps } /> 
          </div>
        );
      }

    return (
         /*
        <div className="row">

        <BootstrapTable 
                    keyField='id' data={ data } columns={ columns }    
                    bordered={ false } pagination={ paginationFactory(paginationOptions) }                                   
                    />
                    
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

        </div>
*/


            <div className="product-table">
              <PaginationProvider pagination={paginationFactory(paginationConfig)} >
                  { contentTable }
              </PaginationProvider>              
            </div> 
    );
  }
}