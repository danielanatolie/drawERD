const Node = require('../parser/Node')

class ATTRIBUTE extends Node {
    constructor(entity, isUnique, filename) {
        super(filename);
        this.entity = entity;
        this.isUnique = isUnique;
    }

    parse() {
        if (this.isUnique) {
            this.tokenizer.checkToken("Unique attribute");
        } else {
            this.tokenizer.checkToken("Non-unique atribute");
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

const x = new ATTRIBUTE(undefined, true, "attribute.txt");
x.parse();