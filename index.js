fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    //arrays and objects
    each: function(coll,cb) {

            let coll2 = [];
            if(coll instanceof Array){
                coll2 = coll.slice(0);
            }
            else{
                coll2 = Object.values(coll);
            }

            for(const key in coll2){
                cb(coll2[key]);
                // {"a": 1, "b": {"1":[1,2,3]}}
            }
            return coll;
    },

    //array of objects
    map: function(coll,cb) {
        const newColl = [];
        for(const key in coll){
            newColl.push(cb(coll[key]));
        }
        return newColl;
    },

    reduce: function(coll,cb,acc) {

        let acc2 = 0;
        // any acc passed in ?
        if (acc){
            acc2 = acc
        }

        for(const key in coll){
            acc2 = cb(acc2,coll[key],coll);
        }

        return acc2;
    },

    find: function(coll,pred) {
        for(const key in coll){
            if(pred(coll[key])){
                return coll[key];
            }
        }

    },

    filter: function(coll,pred){
        let filtered = [];
        for(const key in coll){
            if(pred(coll[key])){
                filtered.push(coll[key]);
            }
        }
        return filtered;
    },
    size: function(coll){
        return Object.keys(coll).length;
    },
    //array
    first: function(coll,n){

        return n ? coll.slice(0,n) : coll[0] ;
    },

    last: function(coll,n){

        return n ? coll.slice(-n) : coll.slice(-1)[0] ;
    },

    compact: function(arr){

        return this.filter(arr, function(val) { return !!val === true});
    },

    sortBy: function(arr,cb){

        return arr.slice(0).sort(function(val1,val2){
            return cb(val1) - cb(val2);
        });



    },

    flatten: function(arr,shallow,acc=[]){
        if(!Array.isArray(arr)){
            acc.push(arr);
        }
        // all levels so recursive
        else{
            if(shallow){
                for(let val of arr){
                    if(Array.isArray(val)){
                        for(let inner of val){
                            acc.push(inner);
                        }
                    }
                    else{
                        acc.push(val);
                    }
                }
            }
            else{
                for(let val of arr){
                    this.flatten(val,shallow,acc);
                }
            }


        }


        return acc;


    },

    uniq: function(array, issorted, callback){

        let array2 = []
        if (issorted) {
            for (let i=0; i<array.length-1; i++){
                if (array[i]!=array[i+1]){
                    array2.push(array[i]);
                }

            }
        }
        else{
            if(callback){
                let temp = {};
                for(let val in array){
                    const changed = callback(array[val]);
                    if (!(changed in temp)) {
                        array2.push(array[val]);
                        temp[changed] = true;
                    }
                }
            }
            else{
                for(let val in array){
                    if (!array2.includes(array[val])) {
                        array2.push(array[val]);
                    }
                }
            }
        }
        console.log(array2);
        return array2;
    },
    keys: function(obj){
        let objKeys = [];

        for(const ky in obj){
            objKeys.push(ky);
        }

        return objKeys;

    },
    values: function(obj){
        let vals = [];

        for(const ky in obj){
            vals.push(obj[ky]);
        }

        return vals;

    },
    functions: function(obj){

        let ans = [];
        for(const k in obj){
            if (typeof obj[k] === "function"){
                ans.push(k);
            }
        }
        return ans;


    }





  }
})()

fi.libraryMethod()
// let isNested = {"b":1,"c": {"d":3}}
// let mainObj = {"a": isNested}
// let clone = Object.assign({}, mainObj)
