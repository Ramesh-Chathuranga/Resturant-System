import 'bootstrap/dist/css/bootstrap.css';
import Item from "../Item/Item"
import React from "react"

const placeOrder = ()=>{
    return(
      <td>
            <table className = "table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>QtyOnHAnd</th>
                    </tr>
                </thead>
                <tbody>
                   <Item></Item>
                   <Item></Item>
                   <Item></Item>
                   <Item></Item>
                </tbody>
            </table>
      </td>
    )
}

export default placeOrder;