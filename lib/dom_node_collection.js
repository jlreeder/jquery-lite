class DOMNodeCollection {
  constructor (nodes) {
    this.nodes = nodes;
  }

  html (string) {
    if (!string) {
      return this.nodes[0];
    }
    // this.innerHTML = string;
  }
}

module.exports = DOMNodeCollection;
