const Node = require('../parser/Node')

class ATTRIBUTE extends Node {
    constructor() {
        super();
        // this.isUnique = isUnique;
    }

    parse() {
        // this.name // attribute name
        console.log("running from the attribute classs")
        return;
    }

    evaluate() {
        // calls edge.evaluate()
    }

    typeCheck() {
        // phase 2
    }
}

const x = new ATTRIBUTE();
x.parse();