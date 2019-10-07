const Node = require('../parser/Node');
const EDGE = require('../ast/EDGE');

class RELATIONSHIP extends Node {
  constructor() {
    super();
    this.name = '';
    this.entity1 = '';
    this.entity2 = '';
    this.type = '';
  }

  parse() {
    try {
      this.tokenizer.getAndCheck('Relationship');
      this.name = this.tokenizer.getNext();
      this.tokenizer.getAndCheck('Entity1');
      this.entity1 = this.tokenizer.getNext();
      this.tokenizer.getAndCheck('Entity2');
      this.entity2 = this.tokenizer.getNext();
      this.tokenizer.getAndCheck('Type');
      this.type = this.tokenizer.getNext();
      this.tokenizer.getAndCheck('end');
    } catch (err) {
      throw new Error('Unable to build AST.');
    }
  }
  evaluate() {
    var data = this.name + '{' + this.name + '}';
    this.tokenizer.mermaidInput.push(data);
    // console.log(data + '\n')
    var edge1 = new EDGE(this.entity1, this.name, this.type);
    edge1.evaluate();
    var edge2 = new EDGE(this.name, this.entity2, this.type);
    edge2.evaluate();
  }
}

// Tokenizer.makeTokenizer("relationship.txt");
// const x = new RELATIONSHIP();
// x.parse();

module.exports = RELATIONSHIP;
