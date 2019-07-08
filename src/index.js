import {createStore, combineReducers, applyMiddleware}  from 'redux'
import _ from "lodash"
import logger from "redux-logger"
import App from "./modules/APP/App"
import ReactDOM from "react-dom" 
import {Provider} from 'react-redux'
import React from "react"
import  thunks from "redux-thunk"


const initialState = {
    lastItem: {},
    items:[],
    orders:[],
    totalPrice: 0,
    lastOrderId: "O0000"
}

const orderReducer = (state = initialState, action) => {
   switch(action.type){
       case "ADD_ITEM_TO_ORDER":
           state = {
              ...state,
              lastItem: action.payload,
              totalPrice: state.totalPrice + (action.payload.numberOFItem * action.payload.unitPrice),
              items: [...state.items, action.payload]
           };
           break;
        case "REMOVE_ITEM_FROM_ORDER" :
           
                const index = _.findIndex(state.items, (item)=> { return item.id === action.payload.id; });
                state = {
                    ...state,
                    lastItem: action.payload,
                    totalPrice: state.totalPrice - (action.payload.numberOFItem * action.payload.unitPrice),
                    items: state.items.splice(index,1)
                 };
            break;
        case "PLACE_ORDER":
            state = {
                ...state,
                lastOrderId: action.payload,
                orders: [ {...state.lastOrderId, ...state.items, ...state.totalPrice}]
            }    
            break;
        case "SET_ORDER":
            console.log(action.payload)
               state = {
                   ...state,
                   orders: [...state.orders, action.payload]
               }
            break;    
        default:
                console.log("hi")
            break;          
   }
   return state;
}

const store = createStore( 
            combineReducers( {orders: orderReducer} ),
            {},
            applyMiddleware( logger, thunks)
    )

    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      )

// store.dispatch({
//     type: "ADD_ITEM_TO_ORDER",
//     payload: {
//         id: "I001",
//         name: "EGG" ,
//         numberOFItem: 1,
//         unitPrice: 15.00,
//     }
// });

// store.dispatch({
//     type: "ADD_ITEM_TO_ORDER",
//     payload: {
//         id: "I002",
//         name: "Banana" ,
//         numberOFItem: 2,
//         unitPrice: 20.00,
//     }
// });

// store.dispatch({
//     type: "ADD_ITEM_TO_ORDER",
//     payload: {
//         id: "I003",
//         name: "Mango" ,
//         numberOFItem: 5,
//         unitPrice: 60.00,
//     }
// });

// store.dispatch({
//     type: "REMOVE_ITEM_FROM_ORDER",
//     payload: {
//         id: "I001",
//         name: "EGG" ,
//         numberOFItem: 1,
//         unitPrice: 15.00,
//     }
// });

// store.dispatch({
//     type: "ADD_ITEM_TO_ORDER",
//     payload: {
//         id: "I004",
//         name: "APPLE" ,
//         numberOFItem: 10,
//         unitPrice: 15.00,
//     }
// });

// store.dispatch({
//     type: "PLACE_ORDER",
//     payload:"OD0001",
// });