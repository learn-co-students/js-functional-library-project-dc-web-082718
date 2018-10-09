fi = (function() {
 return {
   libraryMethod: function() {
     return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
   },

   each: function(collection, callback) {
     for (const keyOrIndex in collection){
       callback(collection[keyOrIndex], keyOrIndex, collection);
     }
     return collection
   },

   map: function(collection, callback) {
     let newArray = []
     for (const keyOrIndex in collection){
       newArray.push(callback(collection[keyOrIndex], keyOrIndex, collection));
     }
     return newArray
   },

   reduce: function(collection, callback, accumulator=0) {
     for (const keyOrIndex in collection){
       accumulator = callback(accumulator, collection[keyOrIndex], collection)
     }
     return accumulator;
   },

   find: function(collection, predicate) {
     for (const keyOrIndex in collection) {
       if (predicate(collection[keyOrIndex])){
         return collection[keyOrIndex]
       }
     }
   },

  filter: function(collection, predicate){
    let newArray = []
      for (const keyOrIndex in collection){
        if (predicate(collection[keyOrIndex])){
          newArray.push(collection[keyOrIndex])
        }
      }
    return newArray
  },

  size: function(collection){
    let counter = 0
    for (const keyOrIndex in collection){
      counter++
    }
    return counter
  },

  first: function(array, n = 1){
    if (n == 1){
      return array[0]
    }
    else {
      newArray = []
      let index = 0
      while (index < n){
        newArray.push(array[index])
        index++
      }
      return newArray
    }
  },

  last: function(array, n = 1){
    if (n == 1){
      return array[array.length-1]
    }
    else {
      newArray = []
      let index = 0
      while (index < n){
        newArray.unshift(array[array.length - 1 - index])
        index++
      }
      return newArray
    }
  },

  compact: function(array){
    newArray = []
    for (const index in array){
      if (!array[index]){
      }
      else {
        newArray.push(array[index])
      }
    }
    return newArray
  },

  sortBy: function(array, callback){
    for (const keyOrIndex in array){
      return array.slice().sort(function(a,b) {
        if (typeof callback(a) == "string"){
          let callbackA = callback(a)
          let callbackB = callback(b)
          return callbackA.localeCompare(callbackB)
        }
        else {
          return callback(a) - callback(b)
        }
      })
    }
  },

  flatten: function(array, shallow = false){
       let newArr = [];
       function innerFlat(element, depth = 0){
         if (!Array.isArray(element)){
           newArr.push(element);
         }
         else{
           for (innerElement of element){
            if (shallow){
              if (depth <= 2){
                depth++
                innerFlat(innerElement, depth)
              }
              else{
                newArr.push(innerElement)
              }
            }
            else {
              innerFlat(innerElement)
            }
          }
         }
       }
     innerFlat(array)
     return newArr;
     },


  uniq: function(array, isSorted = false, callback){
    let newArray = []
    let callbackCases = []
    for(const index in array){
      let value = array[index]
      if (!newArray.includes(value)){
        if (callback){
          if(!callbackCases.includes(callback(value))){
            callbackCases.push(callback(value))
            newArray.push(value)
          }
        }
        else{
        newArray.push(value)
        }
      }
    }
    return newArray
  },

  keys: function(object){
    let newArray = []
    for(const keys in object){
      newArray.push(keys)
    }
    return newArray
  },

  values: function(object){
    let newArray = []
    for(const keys in object){
      newArray.push(object[keys])
    }
    return newArray
  },

  functions: function(object){
    let newArray = []
    for(key in object){
      if (typeof object[key] === "function"){
        newArray.push(key)
      }
    }
    return newArray
  }


 }
})()

fi.libraryMethod()
