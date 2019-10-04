<<<<<<< HEAD
class EDGE extends Node {
    constructor() {
        super();
=======
const Node = require('../parser/Node')
const fs = require('fs') 


class EDGE extends Node {
    constructor(entity1, entity2, type){
        super();
        this.entity1 = entity1;
        this.entity2 = entity2;
        this.type = type;
    }

    evaluate(){
        switch(this.type) {
            case "1-1":
              var data = this.entity1 + " -- " + this.entity2; 
              break;
            case "1-M":
              var data  = this.entity1 + " --> " + this.entity2;
              break;
            case "M-1":
              var data = this.entity1 + " <-- " + this.entity2;
            default:
                throw new Error ("Invalid type, could not generate graph edge.")
          }
        fs.writeFile("src/resources/output.txt", data, (err) =>{
            if (err) throw err;
        });
>>>>>>> ellen_parse
    }
}