// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // PSEUDO:

  // I: {STRING} class to search for
  // O: {ARRAY} tags with class `className`

  // make array to hold the tags
  var elementsWithClass = [];

  // recursively search the DOM for className
  var getElementsFrom = function (node) {
    // if current tag has class `className` ~> push to the array
    if (node.classList && node.classList.contains(className)) {
      elementsWithClass.push(node);
    }

    // search each of the child nodes of current tag
    node.children.forEach(function (childNode) {
      getElementsFrom(childNode);
    });
  };

  // start with document.body
  getElementsFrom(document.body);

  // return array of tags
  return elementsWithClass;
};
