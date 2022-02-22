// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// I
// O
// C
// E

var stringifyJSON = function(obj) {
  // if the obj is number, boolean, null
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    // return '' + obj; (option: obj.toString())
    return '' + obj;
  }

  // if the obj is undefined
  if (obj === undefined) {
    // return "null"
    return 'null';
  }

  // if the obj is string
  if (typeof obj === 'string') {
    // return '"' + obj +'"'
    return '"' + obj + '"';
  }

  // if the obj is array
  if (Array.isArray(obj)) {
    // create result empty array
    var result = [];
    // iterate over the obj array
    for (var i = 0; i < obj.length; i++) {
      // call Stringify.JSON on each element and add to the result array
      result.push(stringifyJSON(obj[i]));
    }
    // wrap the result array []
    return '[' + result + ']';
  }



  // if the obj is object
  if (typeof obj === 'object') {
    // create result empty array
    var result = [];
    // iterate over the obj object
    for (var key in obj) {
      // call Stringify.JSON on each key and value and add to the result array
      if (obj[key] !== undefined && typeof(obj[key]) !== 'function') {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    // wrap the result array {}
    return '{' + result + '}';
  }


};
