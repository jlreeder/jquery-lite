const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = (arg) => {
  let arrayHTMLArg = [];

  if (arg instanceof HTMLElement ) {
    arrayHTMLArg = arg;
  } else {
    arrayHTMLArg = document.querySelectorAll(arg);
  }

  return new DOMNodeCollection(
    Array.from(
      arrayHTMLArg
    )
  );

};
