const Node = require('../parser/Node')


class EDGE extends Node {
  constructor(node1, node2, type) {
    super(); // TODO: Seems like Edge shouldn't be extending Node, it is more of a helper
    this.node1 = node1;
    this.node2 = node2;
    this.type = type;
  }

  evaluate() {
    switch (this.type) {
      case "attribute":
        var data  = this.node1 + " -- " + this.node2
        break;
      case "1-1":
        var data = this.node1 + " -- " + this.node2;
        break;
      case "1-M":
        var data = this.node1 + " --> " + this.node2;
        break;
      case "M-1":
        var data = this.node1 + " <-- " + this.node2;
      default:
        throw new Error("Invalid type, could not generate graph edge.")
    }
    this.mermaidInput.push(data)
  }
}

module.exports = EDGE;
