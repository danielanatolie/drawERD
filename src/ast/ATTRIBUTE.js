const Node = require('../parser/Node')

class ATTRIBUTE extends Node {
    constructor(entity, isUnique) {
        super();
        this.entity = entity;
        this.isUnique = isUnique;
    }

    parse() {
        this.name = this.tokenizer.getNext();
    }

    evaluate() {
        const edge = new EDGE(this.entity, this, "attribute");
        // TODO: need to pass isUnique in
        edge.evaluate();
    }

    typeCheck() {
        // phase 2
    }
}

const x = new ATTRIBUTE();
x.parse();