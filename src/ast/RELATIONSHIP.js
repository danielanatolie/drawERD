const Node = require('../parser/Node')
const EDGE = require('../ast/EDGE')
const fs = require('fs') 

class RELATIONSHIP extends Node {
    constructor(filename){
        super(filename);
        this.name = "";
        this.entity1 = "";
        this.entity2 = "";
        this.type = "";
    }

    parse(){
        try{
            this.tokenizer.checkToken("Relationship");
            this.name = this.tokenizer.getNext();
            this.tokenizer.getNext();
            this.tokenizer.checkToken("Entity1");
            this.entity1 = this.tokenizer.getNext();
            this.tokenizer.getNext();
            this.tokenizer.checkToken("Entity2");
            this.entity2 = this.tokenizer.getNext();
            this.tokenizer.getNext();
            this.tokenizer.checkToken("Type");
            this.type = this.tokenizer.getNext();
            this.tokenizer.getNext();
        } catch(err){
            throw new Error("Unable to build AST.");
        }
    }

    evaluate(){
        var data = "Relationship{" + this.name + "}";
        fs.writeFile("src/resources/output.txt", data, (err) =>{
            if (err) throw err;
        });
        edge1 = new EDGE(this.entity1, this.name, this.type);
        edge1.evaluate()
        edge2 = new EDGE(this.name, this.entity2, this.type);
        edge2.evaluate()
    }
}

const x = new RELATIONSHIP("relationship.txt");
x.parse();


/**
 * Relationship: Has
Entity1: Rental
Entity2: Customer
Type: 1-MA
end

CC{has}		// Relationship’s evaluate()

AA --> CC	//Edge evaluate(Entity, Entity, type)
CC --> BB
 */