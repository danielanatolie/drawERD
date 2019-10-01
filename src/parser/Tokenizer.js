const fs = require('fs');
const path = require('path');
const ParserError = require('../error/ParserError.js');

class Tokenizer {
    constructor(fileName) {
        try {
            this.program = fs.readFileSync(path.join("./src/resources", fileName), 'utf-8');
        } catch (err) {
            // throw new ParserError("Unable to load source: ${filename}");
            console.log("File not found")
        }
        this.tokenize();
    }

    tokenize() {
        const lines = this.program.split('\n') || [];
        this.token = []
        lines.forEach(line => {
            if (line.indexOf(':') > 0) {
                const temp = line.split(":");
                this.token.push(temp[0], temp[1].trim());
            } else {
                this.token.push(line.trim());
            }
        })
        this.currentTokenIdx = 0;
    }

    top() {
        if (this.currentTokenIdx < this.tokens.length) {
            // ignore blank lines
            while ("NEW_LINE" === this.tokens[this.currentTokenIdx]) {
                this.currentTokenIdx += 1;
                this.line += 1;
                this.column = 0;
            }

            return this.tokens[this.currentTokenIdx];
        }

        return null;
    }

    pop() {
        if (this.top() != null) {
            let token = this.tokens[this.currentTokenIdx];
            this.currentTokenIdx += 1;
            this.column += 1;
            return token;
        }
        return null;
    }

    hasNext() {
        return this.top() !== null;
    }

    getLine() {
        return this.line;
    }
}

new Tokenizer("sample.txt")