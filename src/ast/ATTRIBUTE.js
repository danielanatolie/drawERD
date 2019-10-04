const Node = require('../parser/Node')

class ATTRIBUTE extends Node {
    constructor(entity, isUnique) {
        super();
        this.entity = entity;
        this.isUnique = isUnique;
    }

    parse() {
        if (this.isUnique) {
            this.tokenizer.getAndCheck("Unique attribute");
        } else {
            this.tokenizer.getAndCheck("Non-unique atribute");
        }
        this.name = this.tokenizer.getNext();
    }

    evaluate() {
        const edge = new EDGE(this.entity, this, "attribute");
        edge.evaluate();
    }

    typeCheck() {
        // phase 2
    }
}

const x = new ATTRIBUTE();
x.parse();