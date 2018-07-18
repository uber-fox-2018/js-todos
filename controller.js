const Model = require('./model');
const View = require('./view');

class ToDo {

  static do(command, input){
    if (command == 'help'){
      View.help();
    } else if (command == 'list'){
      this.list();
    } else if (command == 'add'){
      this.add();
    } else if (command == 'findById'){
      this.findById();
    } else if (command == 'delete'){
      this.remove();
    } else if (command == 'complete'){
      this.complete();
    } else if (command == 'uncomplete'){
      this.uncomplete();
    } else {
      View.help();
    }
  }

  static list (){
    let data = Model.read();
    View.display(data);
  }

}


module.exports = ToDo;