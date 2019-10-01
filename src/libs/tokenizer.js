var fs = require("fs");

class Tokenizer {
    constructor(fileName, literalsList) {
        this.literals = literalsList;
        try {
            this.program = fs.readFileSync(fileName, `utf8`);
        } catch (err) {
            throw new Error("Didn't find file");
        }
        this.tokenize();
    }

    tokenize() {
        var tokenizedProgram = this.program;
        tokenizedProgram = tokenizedProgram.replace(/\n/g, "");
        //console.log(this.program);
        this.literals.forEach(literal => {
            tokenizedProgram = tokenizedProgram.replace(/:/g, ",");
            tokenizedProgram = tokenizedProgram.replace(literal, "_" + literal + "_");
            //console.log(tokenizedProgram);
        });
        tokenizedProgram = tokenizedProgram.replace(/\s/g, " ");
        //console.log(tokenizedProgram);
        var temparray = tokenizedProgram.split("_");
        this.tokens = temparray.slice(1, temparray.length - 1);
        console.log(this.tokens);
    }

    checkNext() {
        var token = " ";
        if (this.currentToken < this.tokens.length) 
            token = this.tokens[currentToken];
        else 
            token = "NO_MORE_TOKENS";
        return token;
    }

    getNext() {
        var token = " ";
        if (this.currentToken < this.tokens.length) {
            token = this.tokens[currentToken];
            this.currentToken++;
        }
        else
            token = "NULLTOKEN";
        return token;
    }


    checkToken(regexp) {
        var s = this.checkNext();
        console.log("comparing: "+s+"  to  "+regexp);
        return (s.matches(regexp));
    }


    getAndCheckNext(regexp) {
        var s = this.getNext();
        if (!s.matches(regexp)) return;
        console.log("matched: "+s+"  to  "+regexp);
        return s;
    }

    moreTokens() {
        return this.currentToken < this.tokens.length;
    }

    makeTokenizer(filename, literalsList) {
        if (this.theTokenizer == null){
            theTokenizer = new Tokenizer(filename, literalsList);
        }
    }

    getTokenizer() {
        return this.theTokenizer;
    }
}

tokenizer = new Tokenizer("input.txt", ["Entity", "Unique attributes", "Non-unique attributes", "end"])