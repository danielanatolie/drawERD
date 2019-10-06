const Node = require('../parser/Node')
const Tokenizer = require('../parser/Tokenizer')
const ATTRIBUTE = require('./ATTRIBUTE')

class ENTITY extends Node {
    constructor() {
        super();
        this.name = "";
        this.uniqueAttributes = [];
        this.nonUniqueAttributes = [];
    }

    parse() {
        try {
            this.tokenizer.getAndCheck("Entity");
            this.name = this.tokenizer.getNext();
            this.tokenizer.getAndCheck("Unique attributes");
            let cur = this.tokenizer.getNext();
            while (cur !== "Non-unique attributes" && cur !== "end") {
                this.uniqueAttributes.push(cur);
                cur = this.tokenizer.getNext();
            }
            if (cur === "end") return;
            // this means that non unique attributes are optional 
            cur = this.tokenizer.getNext();
            while (cur !== "end") {
                this.nonUniqueAttributes.push (cur);
                cur = this.tokenizer.getNext();
            }
        }
        catch (err) {
            throw new Error("Unable to build AST");
        }
    }

    evaluate() {
        if (this.uniqueAttributes.length != 0) {
            for (let i = 0; i < this.uniqueAttributes.length; i++) {
                const attribute = new ATTRIBUTE(this.name, true);
                attribute.evaluate();
            }
        }
        
        if (this.nonUniqueAttributes.length != 0) {
            for (let i = 0; i < this.nonUniqueAttributes.length; i++) {
                const attribute = new ATTRIBUTE(this.name, false);
                attribute.evaluate();
            }
        }  
    }
}

//Tokenizer.makeTokenizer("entity.txt")
//const x = new ENTITY();
//x.parse();

module.exports = ENTITY;