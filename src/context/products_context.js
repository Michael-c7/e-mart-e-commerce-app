import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import products_reducer from '../reducers/products_reducer'
const initialState = {
    products:[],
    isSidebarOpen:false,
    isSearchbarOpen:false,
}


const ProductsContext = React.createContext()


export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, initialState)


    const sidebarOpen = _ => {
      dispatch({type: "SIDEBAR_OPEN"})
    }
  
    const sidebarClose = _ => {
      dispatch({type: "SIDEBAR_CLOSE"})
    }

    const searchbarOpen = _ => {
      dispatch({type: "SEARCHBAR_OPEN"})
    }
  
    const searchbarClose = _ => {
      dispatch({type: "SEARCHBAR_CLOSE"})
    }
  
    return (
      <ProductsContext.Provider
        value={{
          ...state,
          sidebarOpen,
          sidebarClose,
          searchbarOpen,
          searchbarClose,
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