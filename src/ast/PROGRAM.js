const Node = require('../parser/Node')

class PROGRAM extends Node {
    constructor() {
        super("sample.txt");
        //this.mermaidInput = "";
        this.entities = [];
        this.relationships = [];
    }

    parse() {
        try {
            while (this.tokenizer.moreToken()) {
                if (this.tokenizer.checkToken("ENTITY")) {
                    this.entity = new ENTITY();
                    this.entity.parse();
                    this.entities.push(entity);
                }
                if (this.tokenizer.checkToken("RELATIONSHIP")) {
                    this.relationship = new RELATIONSHIP();
                    this.relationship.parse();
                    this.relationships.push(relationship);
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