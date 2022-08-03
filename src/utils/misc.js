
import { v4 as uuidv4 } from 'uuid';



/**
   * 
   * @param {array} products the products, an array of objects
   * @param {string} tagToFilterBy the tag to filter by eg: "mens"
   * @returns an array of objects(products)
   */
 const filterProductsByTag = (products, tagToFilterBy) => {
    let filteredProducts = products.filter((product) => {
      if(product?.fields?.tags.includes(tagToFilterBy)) {
        return product;
      }
    })
    return filteredProducts;
  }








  const generateUniqueId = _ => uuidv4()

  



/**
* @param {array} arrayToSort an array with either number or strings
* @param {string} directionToSort Either "high" or "low" , "high" mean a-z / biggest number to smallest number, "low" is the opposite of that
* @param {string} dataTypeOfItems either "string" or "number" the data type of the items in the array you'll be sorting
* @returns a sorted array
*/
const sortArray = (arrayToSort, directionToSort, dataTypeOfItems) => {
  if(dataTypeOfItems === 'string' && directionToSort === 'high') {
    return arrayToSort.sort()
  } else if(dataTypeOfItems === 'string' && directionToSort === 'low') {
    return arrayToSort.sort().reverse() 
  } else if(dataTypeOfItems === 'number' && directionToSort === 'high') {
    return arrayToSort.sort(function(a, b){return b-a});
  } else if(dataTypeOfItems === 'number' && directionToSort === 'low') {
    return arrayToSort.sort(function(a, b){return a-b});
  } else {
    throw new Error(`Error. you provided one or more invalid arguments`);
  }
}


  export {
    filterProductsByTag,
    generateUniqueId,
    sortArray,
  }