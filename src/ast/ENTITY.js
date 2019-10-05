const Node = require('../parser/Node')

class ENTITY extends Node {
    constructor(filename) {
        super(filename);
        this.name = "";
        this.uniqueAttributes = "";
        this.nonUniqueAttributes = "";
    }

    parse() {
        try {
            this.tokenizer.checkToken("Entity");
            this.name = this.tokenizer.getNext();
            this.tokenizer.checkToken("Unique attributes");
            this.uniqueAttributes = this.tokenizer.getNext();
            this.tokenizer.checkToken("Non-unique attributes");
            this.nonUniqueAttributes = this.tokenizer.getNext();
        }
        catch (err) {
            throw new Error("Unable to build AST");
        }
    }

    evaluate() {
        if (this.tokenizer.getNext() == "Unique attributes") {
            const attribute = new ATTRIBUTE(this.name, true);
            attribute.evaluate();
        }
        if (this.tokenizer.getNext() == "Non-unique attributes") {
            const attribute = new ATTRIBUTE(this.name, false);
            attribute.evaluate();
        }  
    }
}

const x = new ENTITY("entity.txt");
x.parse();