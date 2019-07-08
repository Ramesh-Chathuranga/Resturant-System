import 'bootstrap/dist/css/bootstrap.css';
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import React from "react"

const main = (props)=>{
    return (
        <div className="container">
            <div className="row">
                <div col-sm-6>
                <PlaceOrder/>
               {/* {console.log(props.setOrder.name)}  */}
                <button className="btn btn-danger"  onClick ={()=> props.setOrder}>Place_Order</button>
                </div>
                <div col-sm-6>

                </div>
            </div>
        </div>

    )
}

export default main;