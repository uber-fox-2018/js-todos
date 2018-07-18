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
      this.add(input[0]);
    } else if (command == 'findById'){
      this.findById(input[0]);
    } else if (command == 'delete'){
      this.remove(input[0]);
    } else if (command == 'complete'){
      this.complete(input[0]);
    } else if (command == 'uncomplete'){
      this.uncomplete(input[0]);
    } else if (command == 'sortby'){
      if (input[0] == 'created'){
        this.sortByCreated(input[1]);
      } else if (input[0] == 'completed') {
        this.sortByCompleted(input[1]);
      }
    } else if (command == 'tag'){
      this.tag(input[0], input.slice(1));
    } else if (command == 'filter'){
      this.filterTag(input[0]);
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

  sortByCreated(order){
    let data = this.Model.sortCreatedDate(order);
    View.display(data);
  }

  sortByCompleted(order){
    let data = this.Model.sortCompletedDate(order);
    View.display(data);
  }

  tag (id, tagArr){
    let taggedTask = this.Model.tagTask(id, tagArr);
    View.tagged(taggedTask);
  }

  filterTag (tag){
    let theTasks = this.Model.findTaggedTask (tag);
    View.filtered(theTasks);
  }
}


module.exports = ToDo;