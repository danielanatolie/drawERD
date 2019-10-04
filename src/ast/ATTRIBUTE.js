const Node = require('../parser/Node')

class ATTRIBUTE extends Node {
    constructor(isUnique) {
        super();
        this.isUnique = isUnique;
    }

    parse() {
        this.name = this.tokenizer.checkNext();
        console.log("running from the attribute classs")
        return;
    }

    evaluate() {
        const edge = new EDGE();
        edge.evaluate();
    }

    typeCheck() {
        // phase 2
    }
}

const x = new ATTRIBUTE();
x.parse();