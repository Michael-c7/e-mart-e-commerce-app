const products_reducer = (state, action) => {
    if(action.type === "SIDEBAR_OPEN") {
      return {...state, isSidebarOpen: true}
    }

    if(action.type === "SIDEBAR_CLOSE") {
      return {...state, isSidebarOpen: false}
      
    }

    if(action.type === "SEARCHBAR_OPEN") {
      return {...state, isSearchbarOpen: true}
    }

    if(action.type === "SEARCHBAR_CLOSE") {
      return {...state, isSearchbarOpen: false}
      
    }



    if(action.type === "GET_PRODUCTS_DATA") {
      return {...state, products:action.payload}
    }


    if(action.type === "GET_PRODUCT_LOADING_START") {
      return {...state, productsLoading:true}
    }

    if(action.type === "GET_PRODUCT_LOADING_SUCCESS") {
      return {...state, productsLoading:false, productsError:false}
    }

    if(action.type === "GET_PRODUCT_LOADING_ERROR") {
      return {...state, productsLoading:false, productsError:true}
    }




    if(action.type === "SORT_PRODUCTS") {
      return {...state, sortFilter:action.payload}
    }



    
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default products_reducer