let instance = null;
class MermaidInput{
  /**
   * A Singleton for the global variable mermaidInput
   */
  constructor() {
    if (!instance) { instance = this; }
    this.mermaidInput = [];

    return instance;
  }

  /**
   * push an element into the array
   */
  push(data){
    this.mermaidInput.push(data);
  }

  /**
   * Returns the length of the array
   */
  getLength() {
    return this.mermaidInput.length
  }

  /**
   * Converts the array into a string to be passed to the FE
   */
  getString(){
    return this.mermaidInput.join("\n")
  }
}
module.exports = MermaidInput;