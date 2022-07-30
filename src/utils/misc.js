
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
   * 
   * @param {array} arrayToSort an array with either number or strings
   * @param {string} direction high mean a-z biggest number - smallest number, low is the opposite of that
   * @param {string} type either "string" or "number" the data type of the items on the array you'll be sorting
   * @returns a sorted array of the data type that was originally there
   */
//   const sortArray = (arrayToSort, direction, type) => {
//     let directionLowerCase = direction.toLowerCase()
//     let typeLowerCase = direction.toLowerCase()
//     /*making sure the data type is correct */
//     if(Array.isArray(arrayToSort) &&  typeof direction === 'string' && typeof type === 'string') {
//       /*the actual sorting */
//       if(typeLowerCase === 'string' && directionLowerCase === 'high') {
//         return arrayToSort.sort()
//       } else if(typeLowerCase === 'string' && directionLowerCase === 'low') {
//         return arrayToSort.sort().reverse() 
//       } else if(typeLowerCase === 'number' && directionLowerCase === 'high') {
//         return arrayToSort.sort(function(a, b){return b-a});
//       } else if(typeLowerCase === 'number' && directionLowerCase === 'low') {
//         return arrayToSort.sort(function(a, b){return a-b});
//       } else {
//         throw new Error(`Error, did not provide the correct argument, direction must either be "high" or "low" and type be either "string" or "number". both are case insensitive`);
//       }
//     }
//     throw new Error(`Error, arrayToSort, direction and / or type are not the correct data type. arrayToSort must be an array with either strings or numbers in it and direction, type must be strings`);
//  }


 const sortArray = (arr, direction, type) => {
  if(type === 'string' && direction === 'high') {
    return arr.sort()
  } else if(type === 'string' && direction === 'low') {
    return arr.sort().reverse() 
  } else if(type === 'number' && direction === 'high') {
    return arr.sort(function(a, b){return b-a});
  } else if(type === 'number' && direction === 'low') {
    return arr.sort(function(a, b){return a-b});
  } else {
    return 'else'
  }
   return 'please supply args'
}


  export {
    filterProductsByTag,
    generateUniqueId,
    sortArray,
  }