import React from "react"
import { connect } from "react-redux"
import Main from "../../components/Main/Main"
import  Promise from "redux-promise-middleware"

export class App extends React.Component{
   render(){
    return (
        <div>
            <h1>MAin Page</h1>
             <Main  setOrder= {()=>this.props.setOrder(orderData)} />
        </div>
    )
   }
}

  
const mapStateToProps = ( state )=> {
    return {
        orders: state.orders,
    }
}

const items = [
        {id: "I001", name: "Apple", unitPrice: 10, qty: 2},
        {id: "I001", name: "Chocolate", unitPrice: 100, qty: 4},
        {id: "I001", name: "Toffee", unitPrice: 15, qty: 20},
        {id: "I001", name: "Orange", unitPrice: 50, qty: 6},
         ];

const calculate = ()=> {
  
            let total = 0;
            for(let i=0; i<items.length;i++){
                total += (items[i].unitPrice * items[i].qty )

            }
     return total;
   }
 const orderData = { orderId: "OD001", items: items,total: calculate()};        

console.log("Order : ", orderData)


const mapDispatureToProps = ( dispatch )=> {
    return {
        setOrder: ( order )=>{
            dispatch({
                type: "SET_ORDER",
                payload: new Promise( ( resolve, reject) => {
                   setTimeout( () => {
                      resolve(order)
                    }, 2000)
                }),
            });
        }
    };
};

export default connect (mapStateToProps, mapDispatureToProps,)(App)