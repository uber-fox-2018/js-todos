const Model = require('./model');
const View = require('./view');

class ToDo {

  constructor(){
    this._Model = new Model ();
  }

  get Model(){
    return this._Model;
  }

  do(command, input){
    if (command == 'help'){
      View.help();
    } else if (command == 'list'){
      this.list();
    } else if (command == 'add'){
      this.add(input);
    } else if (command == 'findById'){
      this.findById(input);
    } else if (command == 'delete'){
      this.remove(input);
    } else if (command == 'complete'){
      this.complete(input);
    } else if (command == 'uncomplete'){
      this.uncomplete(input);
    } else {
      View.help();
    }
  }

  list (){
    let data = this.Model.read();
    View.display(data);
  }

  add (newTask){
    this.Model.addTask(newTask);
    View.added(newTask);
  }

  findById (id){
    let theTask = this.Model.findTask (id);
    View.display(theTask);
  }

  remove (id){
    let removedTask = this.Model.removeTask(id);
    View.deleted(removedTask);
  }

  complete (id){
    let data = this.Model.completeTask(id);
    View.display(data);
  }

  uncomplete (id){
    let data = this.Model.uncompleteTask(id);
    View.display(data);
  }
}


module.exports = ToDo;