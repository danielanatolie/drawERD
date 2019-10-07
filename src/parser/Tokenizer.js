const fs = require('fs');
const path = require('path');

class Tokenizer {
  constructor(fileName) {
    this.mermaidInput = [];
    this.mermaidInput.push('graph TD');
    // try {
    //     this.program = fs.readFileSync(
    //         path.join("./src/resources", fileName),
    //         "utf-8"
    //     );
    // } catch (err) {
    //     throw new Error("Unable to load source: ${filename}");
    // }
    // initialize tokenizer's fields
    this.program = fileName;
    this.tokens = [];
    this.currentTokenIdx = 0;

    this.tokenize();
  }

  tokenize() {
    const lines = this.program.split('\n') || [];
    lines.forEach(line => {
      if (line.indexOf(':') > 0) {
        const temp = line.split(':');
        this.tokens.push(temp[0], ...temp[1].trim().split(', '));
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
      return this.tokens[this.currentTokenIdx - 1];
    } else {
      return false;
    }
  }

  checkToken(regex) {
    const cur = this.checkNext();
    const match = cur.match(regex);
    if (match === null) {
      return false;
    }
    return true;
  }

  getAndCheck(regex) {
    const cur = this.getNext();
    const match = cur.match(regex);
    if (match === null) {
      throw new Error('something went wrong...');
    }
    return cur;
  }

  moreToken() {
    return this.currentTokenIdx < this.tokens.length;
  }

  static getTokenizer() {
    return this.instance;
  }

  static makeTokenizer(filename) {
    this.instance = new Tokenizer(filename);
  }

  convertMermaidInputToString() {
    return this.mermaidInput.join('\n');
  }
}

module.exports = Tokenizer;
