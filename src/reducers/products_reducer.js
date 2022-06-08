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



    
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default products_reducer