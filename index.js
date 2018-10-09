fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback){
      for (const keyOrIndex in collection){
        callback(collection[keyOrIndex], keyOrIndex, collection);
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArr = [];
      for (const keyOrIndex in collection){
        newArr.push(callback(collection[keyOrIndex], keyOrIndex, collection))
      }
      return newArr;
    },

    reduce: function(collection, callback, accumulator = 0) {
      for (const keyOrIndex in collection){
        accumulator = callback(accumulator,collection[keyOrIndex], collection)
      }
      return accumulator;
    },

    find: function(collection, predicate){
      for (const keyOrIndex in collection){
        if (predicate(collection[keyOrIndex])){
          return collection[keyOrIndex]
        }
      }
    },

    filter: function(collection, predicate){
      let newArr = []
      for (const keyOrIndex in collection){
        if (predicate(collection[keyOrIndex])){
          newArr.push(collection[keyOrIndex])
        }
      }
      return newArr;
    },

    size: function(collection){
      let counter = 0;
      for (const keyOrIndex in collection){
        counter++;
      }
      return counter;
    },

    first: function(array, n = 1){
      if (n ==1){
        return array[0];
      }
      else {
        newArr = []
        let index = 0
        while (index < n){
          newArr.push(array[index]);
          index++;
        }
        return newArr;
      }
    },
    last: function(array, n =1){
      if (n==1){
        return array[array.length -1]
      }
      else {
        newArr = []
        let index = 0;
        while (index < n){
          newArr.unshift(array[array.length-1 -index])
          index++
        }
        return newArr;
      }
    },

    compact: function(array){
      let newArr = [];
      for(const index in array){
        if (!array[index]){
        }
        else {
          newArr.push(array[index]);

        }
      }
      return newArr;
    },

    sortBy: function(array, callback){
      let newArr = array.slice().sort(function(a,b){
         if (typeof callback(a) == "string"){
           let aCallback = callback(a)
           let bCallback = callback(b)
           return aCallback.localeCompare(bCallback);
         }
         else{
           return callback(a) - callback(b);
         }
         });
      return newArr;
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
      let newArr = []
      let callbackCases = []
      for (index in array){
        debugger
        let value = array[index]
        if (!newArr.includes(value)){
          if (callback) {
            if(!callbackCases.includes(callback(value))){
              callbackCases.push(callback(value))
              newArr.push(value)
            }
          }
          else{
          newArr.push(value)
          }
        }
      }
      return newArr;
    },
    keys: function(obj){
      let newArr = [];
      for (key in obj){
        newArr.push(key);
      }
      return newArr;
    },

    values: function(obj){
      let newArr = [];
      for (key in obj){
        newArr.push(obj[key]);
      }
      return newArr;
    },

    functions: function(obj) {
      newArr = []
      for (key in obj){
        if (typeof obj[key] === 'function' ){
          newArr.push(key)
        }
      }
      return newArr;
    },



  }
})()

fi.libraryMethod()
