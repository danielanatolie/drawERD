const fs = require("fs");
const path = require("path");

class Tokenizer {
    constructor(fileName) {
        try {
            this.program = fs.readFileSync(
                path.join("./src/resources", fileName),
                "utf-8"
            );
        } catch (err) {
            throw new Error("Unable to load source: ${filename}");
        }
        // initialize tokenizer's fields
        this.tokens = []
        this.currentTokenIdx = 0;

        this.tokenize();
    }

    tokenize() {
        const lines = this.program.split("\n") || [];
        lines.forEach(line => {
            if (line.indexOf(":") > 0) {
                const temp = line.split(":");
                this.tokens.push(temp[0], ...temp[1].trim().split(", "));
            } else {
                this.tokens.push(line.trim());
            }
        });
    }

    checkNext() {
        if (this.currentTokenIdx < this.tokens.length) {
            return this.tokens[this.currentTokenIdx];
        } else {
            return false;
        }
    }

    getNext() {
        if (this.currentTokenIdx < this.tokens.length) {
            this.currentTokenIdx++;
            return this.tokens[this.currentTokenIdx];
        } else {
            return false;
        }
    }

    checkToken(regex) {
        const cur = this.checkNext();
        console.log('comparing ' + cur + ' to ' + regex);
        const match = cur.match(regex);
        if (match === null) {
            throw new Error(cur + " and " + regex + " do not match");
        }

    }

    getAndCheck(regex) {
        const cur = this.getNext();
        const match = cur.match(regex);
        if (match === null) {
            throw new Error("something went wrong...");
        }
        console.log("matched: ${cur} to ${regex}");
        return cur;
    }

    moreToken() {
        return this.currentTokenIdx < this.tokens.length;
    }
}

module.exports = Tokenizer;