var fs = require("fs");

class Tokenizer {

    constructor(filename, literalsList){
        this.literals = literalsList;
        try{
            this.program = fs.readFileSync(filename,  `utf8`)
        } catch(err){
            throw new Error("Didn't find file")
        }
        this.spaceKillingTokenize();
    }

    /**
     * Returns a list of tokens stored in this.tokens with no spaces within tokens
     */
    spaceKillingTokenize(){
        var tokenizedProgram = this.program;
        tokenizedProgram = tokenizedProgram.replace(/\n/g, " ");
        this.literals.forEach(element => {
            tokenizedProgram = tokenizedProgram.replace(/:/g, "");
            tokenizedProgram = tokenizedProgram.replace(new RegExp(element, "g"), "_"+element+"_");
        });
        tokenizedProgram = tokenizedProgram.replace(new RegExp("[ ]+", "g"), "")
        var tempArray = tokenizedProgram.split(new RegExp("[_/,]+"))
        this.tokens = tempArray.splice(1, tempArray.length);
        console.log(this.tokens);
    }

    /**
     * Return the next token in this.tokens if it exists
     */
    checkNext(){
        var token = "";
        if (this.currentToken<this.tokens.length){
            token = this.tokens[currentToken];
        } else {
            token = "NO MORE TOKENS";
        }
        return token;
    }

    /**
     * Swallows the current token and return the next token in the list
     */
    getNext(){
        var token = "";
        if (this.currentToken<this.tokens.length){
            token = this.tokens[currentToken];
            this.currentToken++;
        } else {
            token = "NULLTOKEN";
        }
        return token;
    }

    /**
     * Given a regexp, check if token matches the regexp
     */
    checkToken(regexp){
        var s = this.checkNext();
        return (s.match(regexp));
    }

    /**
     * Swallows the current token and check the next one in the list
     */
    getAndCheckNext(regexp){
        var s = this.getNext();
        if (!s.match(regexp)){
            throw new Error("Regexp does not match");
        } 
        return s
    }

    moreTokens(){
        return this.currentToken < this.tokens.length;
    }

    makeTokenizer(filename, literalsList){
        if (this.theTokenizer == null){
            this.theTokenizer = new Tokenizer(filename, literalsList);
        }
    }

    getTokenizer(){
        return this.theTokenizer;
    }
}


tokenizer = new Tokenizer("input.txt", ["Entity", "Unique attributes", "Non-unique attributes"])