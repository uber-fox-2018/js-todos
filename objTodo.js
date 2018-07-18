let fs = require("fs");

class Todo {
  constructor() {
    this.id = null;
    this.status = "inComplete";
    this.listName = null;
    this.createdAt = new Date();
    this.completedDate= null
    this.tag = [];
  }

  addTodo(data) {
    let database = JSON.parse(fs.readFileSync("./data.json"));
    // console.log(database);

    if (database.length === 0) {
      this.id = 1;
    } else {
      this.id = database[database.length - 1].id + 1;
    }
    this.listName = data;
  }
}

//  const todo = new Todo();
// console.log(todo);

module.exports = {
  Todo
};
