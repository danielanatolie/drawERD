const Node = require('../parser/Node')

class ATTRIBUTE extends Node {
    constructor(isUnique) {
        super();
        this.isUnique = isUnique;
    }

    parse() {
        this.name = this.tokenizer.getNext();
        // TODO: need the entitiy name too..
    }

    evaluate() {
        const edge = new EDGE();
        // TODO: need to pass isUnique in
        edge.evaluate();
    }

    typeCheck() {
        // phase 2
    }
}

const x = new ATTRIBUTE();
x.parse();