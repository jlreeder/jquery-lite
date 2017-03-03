class DOMNodeCollection {
  constructor (nodes) {
    this.nodes = nodes;
  }

  html (string) {
    if (!string) {
      return this.nodes[0].innerHTML;
    } else {
      this.nodes.forEach( node => {
        node.innerHTML = string;
      });

      return this.nodes;
    }
  }

  empty () {
    this.nodes.forEach( node => {
      node.innerHTML = "";
    });

    return this.nodes;
  }

  // TODO: Make sure this works with jQuery-Lite objects
  // TODO: What should this return?
  append (addendum) {
    // if (addendum instanceof DOMNodeCollection) {
    //   addendum = addendum.html();
    // }

    this.nodes.forEach( node => {
      node.innerHTML += addendum;
    });
  }

  children () {
    const childObjects = [];

    this.nodes.forEach( node => {
      childObjects.push(new DOMNodeCollection(node));
    });

    return childObjects;
  }
}

module.exports = DOMNodeCollection;
