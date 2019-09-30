export class Tokenizer {
  constructor(input) {
    this.input = input;
    this.literals = [
      'Entity',
      'Name:',
      'Unique attributes',
      'Non-unique attributes',
      'end'
    ];
    this.tokens = [];
  }

  tokenize() {
    let tempInput = this.input;
    // TODO: replace new lines with an empty string
    tempInput = tempInput.replace(':', '');
    console.log('after removing colons');

    for (let lit of this.literals) {
      tempInput = tempInput.replace(lit, lit + '$');
    }

    tempInput = tempInput.replace(/\s/g, '');
    console.log('this.input', tempInput);

    this.tokens = tempInput.split('$');
    console.log('my tokens', this.tokens);
  }
  checkNext() {}
  getNext() {}
  checkToken() {}
  getAndCheckNext() {}
}

var input =
  'Entity Name: Rental Unique attributes: Phone number Non-unique attributes: Name, dates end';
