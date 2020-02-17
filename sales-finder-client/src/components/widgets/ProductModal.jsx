import React from 'react';
import { Line } from 'react-chartjs-2';

/**stateful component */
export default class ProductModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }


    render() {

        const productId = this.props.productId;
        const data = this.props.data;

        function filterId(data, productId) {
            
            for (let i = 0; i < data.length; i++) {
                if(productId == 0) {
                    return data[0];
                } else if(productId == data[i].id) {
                    return data[i];
                } 
            }
            return null;
        }

        let foundData = filterId(data, productId);

        let foundDataLabels = foundData.price.map(price => price.date);
        let foundDataSets = foundData.price.map(price => price.price);

        let test = {
            labels: foundDataLabels,
            datasets: [
                {
                    label:"Price over time",
                    data: foundDataSets,
                    fill: false,
                    borderColor: "#17a2b8"
                }
            ],            
        }

        let calculateSavePrecentage = (((foundData.price[0].price - foundData.price[(foundData.price.length -1)].price) 
        * 100) / foundData.price[0].price);


        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{display: "none"}}>
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{foundData.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-3">
                                    <a href="#"><img src={foundData.productImgUrl} alt="Monton hooded top" className="active" height="290" /></a>
                                </div>
                                <div className="col-9">
                                    <div className="card-body">
                                        <Line
                                            options={{responsive:true}}
                                            data={test}
                                        />
                                    </div>    
                                        <div className="card-footer small text-muted">Updated at {foundData.price[(foundData.price.length -1)].date}</div>

                                </div>
                                <div className="col-12">
                                    <hr />
                                    <p className="text-center align-middle">Product starting price: {foundData.price[0].price} - Product price now: {foundData.price[(foundData.price.length -1)].price}<b className="text-success"></b> - Total save: {calculateSavePrecentage} %<b className="text-success"></b></p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}