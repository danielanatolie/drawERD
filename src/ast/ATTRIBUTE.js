const Node = require('../parser/Node')
const Tokenizer = require('../parser/Tokenizer')
const EDGE = require('./EDGE')

class ATTRIBUTE extends Node {
    constructor(entity, isUnique) {
        super();
        this.entity = entity;
        this.isUnique = isUnique;
    }

    parse() {
        try {
            
            if (this.isUnique) {
                this.tokenizer.getAndCheck("Unique attributes");
            } else {
                this.tokenizer.getAndCheck("Non-unique attributes");
            }
            this.name = this.tokenizer.getNext();
        }
        catch (err) {
            throw new Error("Unable to build AST");
        }
    }

    evaluate() {
        const edge = new EDGE(this.entity, this, "attribute");
        edge.evaluate();
    }

    typeCheck() {
        // phase 2
    }
}

// Tokenizer.makeTokenizer("attribute.txt")
// const x = new ATTRIBUTE(undefined, true);
// x.parse();

module.exports = ATTRIBUTE;