const Tokenizer = require('./Tokenizer');

class Node {
    constructor() {
        this.tokenizer = Tokenizer.getTokenizer();
    }

    parse() {
        console.log("running form super class method")
    }

    evaluate() {
        console.log("running form super class method")
    }
}

module.exports = Node;