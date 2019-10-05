const Node = require('../parser/Node')

class PROGRAM extends Node {
    constructor() {
        super();
        //this.mermaidInput = "";
        this.entities = [];
        this.relationships = [];
    }

    parse() {
        try {
            while (this.tokenizer.moreToken()) {
                if (this.tokenizer.checkToken("Entity")) {
                    const e = new ENTITY();
                    e.parse();
                    this.entities.push(e);
                }
                if (this.tokenizer.checkToken("Relationship")) {
                    const r = new RELATIONSHIP();
                    r.parse();
                    this.relationships.push(r);
                }
            }  
        }
        catch (err) {
            throw new Error("Unable to build AST");
        }  
    }

    evaluate() {
        if (this.entities.length != 0) {
            for (let i = 0; i < this.entities.length; i++) {
                this.entities[i].evaluate();
            }
        }
        if (this.relationships.length != 0) {
            for (let i = 0; i < this.relationships.length; i++) {
                this.relationships[i].evaluate();
            }
        }
    }
}

const x = new PROGRAM();
x.parse();