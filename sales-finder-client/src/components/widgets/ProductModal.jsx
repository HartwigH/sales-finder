import React from 'react';


/**stateful component */
export default class ProductModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const data = this.props.data;
        const productId = this.props.productId;

        function filterId(data, productId) {
            let id = 0;
            for (let i = 0; i < data.length; i++) {
                if(productId == data[i].id) {
                    id = i;
                }
            }
            return id;
        }

        let correctId = filterId(data, productId);

        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{display: "none"}}>
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{data[correctId].product}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-3">
                                    <a href="#"><img src={data[correctId].url} alt="Monton hooded top" className="active" height="290" /></a>
                                </div>
                                <div className="col-9">
                                    <div className="card-header">
                                        <i className="fas fa-chart-area"></i>
                                        product price over time</div>
                                    <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                        <canvas id="myAreaChart" width="527" height="158" style={{display: "block", width: "527px", height: "158px"}} className="chartjs-render-monitor"></canvas>
                                    </div>
                                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>

                                </div>
                                <div className="col-12">
                                    <hr />
                                    <p className="text-center align-middle">Product starting price: <b className="text-danger">€55.00</b> - Product price now: <b className="text-success">{data[correctId].price}</b> - Total % drop: <b className="text-success">{data[correctId].precentage}</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add to wishlist +</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}