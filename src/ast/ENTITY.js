const Node = require('../parser/Node')

class ENTITY extends Node {
    constructor() {
        super();
    }

    parse() {
        console.log("ENTERED ENTITY PARSE");
    }

    evaluate() {
        console.log("ENTERED ENTITY EVALUATE");
    }
}