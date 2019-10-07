const Tokenizer = require('./Tokenizer');
const MermaidInput = require('./MermaidInput');

class Node {
    constructor() {
        this.tokenizer = Tokenizer.getTokenizer();
        this.mermaidInput = new MermaidInput();
    }

    parse() {
        console.log("running form super class method")
    }

    evaluate() {
        console.log("running form super class method")
    }
}

module.exports = Node;