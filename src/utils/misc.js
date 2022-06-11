/**
   * 
   * @param {array} products - the products, an array of objects
   * @param {string} tagToFilterBy the tag to filter by eg: "mens"
   * @returns - an array of objects(products)
   */
 const filterProductsByTag = (products, tagToFilterBy) => {
    let filteredProducts = products.filter((product) => {
      if(product?.fields?.tags.includes(tagToFilterBy)) {
        return product;
      }
    })
    return filteredProducts;
  }


  export {
    filterProductsByTag,
  }