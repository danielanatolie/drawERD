const Node = require('../parser/Node')
const EDGE = require('../ast/EDGE')
const Tokenizer = require('../parser/Tokenizer')
const fs = require('fs') 

class RELATIONSHIP extends Node {
    constructor(){
        super();
        this.name = "";
        this.entity1 = "";
        this.entity2 = "";
        this.type = "";
    }

    parse(){
        try{
            this.tokenizer.getAndCheck("Relationship");
            this.name = this.tokenizer.getNext();
            this.tokenizer.getAndCheck("Entity1");
            this.entity1 = this.tokenizer.getNext();
            this.tokenizer.getAndCheck("Entity2");
            this.entity2 = this.tokenizer.getNext();
            this.tokenizer.getAndCheck("Type");
            this.type = this.tokenizer.getNext();
            this.tokenizer.getAndCheck("end");
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

// Tokenizer.makeTokenizer("relationship.txt");
// const x = new RELATIONSHIP();
// x.parse();

module.exports = RELATIONSHIP;
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