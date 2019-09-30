const LITERALS = [
  'Entity',
  'Name:',
  'Unique attributes',
  'Non-unique attributes',
  'end'
];
export class Tokenizer {
  constructor(input) {
    this.input = input;
    this.literals = LITERALS;
    this.tokens = [];
    this.currentToken = 0;
  }

  tokenize() {
    let tempInput = this.input;
    // TODO: replace new lines with an empty string
    tempInput = tempInput.replace(/:/g, '');

    for (let lit of this.literals) {
      tempInput = tempInput.replace(lit, '$' + lit + '$');
    }

    tempInput = tempInput.replace(/\s/g, '');
    this.tokens = tempInput.split('$').filter(s => s !== '');
    console.log('my tokens', this.tokens);
  }
  checkNext() {
    let token = '';
    if (this.currentToken < this.tokens.length) {
      token = this.tokens[currentToken];
    } else {
      token = 'NO_MORE_TOKENS';
    }
    return token;
  }
  getNext() {
    if (this.currentToken < this.tokens.length) {
      token = this.tokens[currentToken];
      this.currentToken++;
    } else {
      token = 'NULLTOKEN';
    }
    return token;
  }
  checkToken(regex) {
    let s = this.checkNext();
    console.log('comparing:' + s + 'to' + regex);
    return s.match(regex);
  }
  getAndCheckNext(regex) {
    let s = this.getNext();
    if (!s.match(regex)) throw new Error('something went wrong...');
    console.log('matched' + s + 'to' + regex);
    return s;
  }
}

var input =
  'Entity Name: Rental Unique attributes: Phone number Non-unique attributes: Name, dates end';
