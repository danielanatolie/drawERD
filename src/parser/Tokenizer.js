const fs = require("fs");
const path = require("path");
const ParserError = require("../error/ParserError.js");

class Tokenizer {
  constructor(fileName) {
    try {
      this.program = fs.readFileSync(
        path.join("./src/resources", fileName),
        "utf-8"
      );
    } catch (err) {
      // throw new ParserError("Unable to load source: ${filename}");
      console.log("File not found");
    }
    this.tokenize();
  }

  tokenize() {
    const lines = this.program.split("\n") || [];
    this.tokens = [];
    lines.forEach(line => {
      if (line.indexOf(":") > 0) {
        const temp = line.split(":");
        this.tokens.push(temp[0]);
        let x = temp[1].trim().split(", ");
        x.forEach(val => {
          this.tokens.push(val);
        });
      } else {
        this.tokens.push(line.trim());
      }
    });
    this.currentTokenIdx = 0;
  }

  checkNext() {
    if (this.currentTokenIdx < this.tokens.length) {
      return this.tokens[this.currentTokenIdx];
    } else {
      return false;
    }
  }

  getNext() {
    // this "consumes" the token
    if (this.currentTokenIdx < this.tokens.length) {
      this.currentTokenIdx++;
      return this.tokens[this.currentTokenIdx];
    } else {
      return false;
    }
  }

  checkToken(regex) {
    const cur = this.checkNext();
    console.log("comparing ${cur} to ${regex}");
    return cur.match(regex);
  }

  getAndCheck(regex) {
    const cur = this.getNext();
    if (!s.match(regex)) {
      throw new Error("something went wrong...");
    }
    console.log("matched: ${cur} to ${regex}");
    return cur;
  }

  moreToken() {
    return this.currentTokenIdx < this.tokens.length;
  }
}

new Tokenizer("sample.txt");
