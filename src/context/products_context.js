import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import products_reducer from '../reducers/products_reducer'
const initialState = {
    products:[],
    productsLoading:false,
    productsError:false,

    isSidebarOpen:false,
    isSearchbarOpen:false,
}


const ProductsContext = React.createContext()


export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, initialState)
    const productsUrl = "/api/products"


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



    const fetchProducts = async () => {
        dispatch({type:"GET_PRODUCT_LOADING_START"})
      try {
        const { data } = await axios.get(productsUrl)
        dispatch({type:"GET_PRODUCT_LOADING_SUCCESS"})
        dispatch({type:"GET_PRODUCTS_DATA", payload:data})
      } catch(error) {
        dispatch({type:"GET_PRODUCTS_ERROR"})
      }
      
  }



    useEffect(() => {
      fetchProducts()
    }, [])
  
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