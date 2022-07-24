import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import products_reducer from '../reducers/products_reducer'
const initialState = {
    products:[],
    productsLoading:false,
    productsError:false,

    isSidebarOpen:false,
    isSearchbarOpen:false,

    /*
      3x3 - the default, 3 product cards per row & image on top info on bottom

      2x2 - like 3x3 but only 2 product cards in a row instead of 3

      1x1-alt - 1 product card per row w/ an alternative layout
      where the image is on the left side & info is on the right 
      instead of the usual image on top info on bottom
    */
    gridLayoutType:"3x3",
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



  const changeGridLayoutType = layoutType => {
    dispatch({type:"CHANGE_GRID_LAYOUT_TYPE", payload:layoutType})
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
          changeGridLayoutType,
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