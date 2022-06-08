import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import products_reducer from '../reducers/products_reducer'
const initialState = {
    products:[],
}


const ProductsContext = React.createContext()


export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, initialState)
  

  
    return (
      <ProductsContext.Provider
        value={{
          ...state,
        }}
      >
        {children}
      </ProductsContext.Provider>
    )
  }

  // make sure to use this when getting the data
export const useProductsContext = () => {
    return useContext(ProductsContext)
  }