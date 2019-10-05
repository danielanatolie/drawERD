const Tokenizer = require('./Tokenizer');

class Node {
    constructor(filename) {
        this.tokenizer = new Tokenizer(filename);
    }

    parse() {
        console.log("running form super class method")
    }

    evaluate() {
        console.log("running form super class method")
    }
}

module.exports = Node;