const Node = require('../parser/Node');
const Tokenizer = require('../parser/Tokenizer');
const EDGE = require('./EDGE');

class ATTRIBUTE extends Node {
  constructor(entity, name, isUnique) {
    super();
    this.entity = entity;
    this.name = name;
    this.isUnique = isUnique;
  }

  parse() {
    try {
      if (this.isUnique) {
        this.tokenizer.getAndCheck('Unique attributes');
      } else {
        this.tokenizer.getAndCheck('Non-unique attributes');
      }
      this.name = this.tokenizer.getNext();
    } catch (err) {
      throw new Error('Unable to build AST');
    }
  }

  evaluate() {
    const edge = new EDGE(this.entity, this.name, 'attribute');
    edge.evaluate();
  }

  typeCheck() {
    // phase 2
  }
}

// Tokenizer.makeTokenizer("attribute.txt")
// const x = new ATTRIBUTE(undefined, "Phone", true);
// x.parse();
// x.evaluate();

module.exports = ATTRIBUTE;
