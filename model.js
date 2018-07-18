const fs = require('fs');

class ToDo {

  constructor (){
    this._data = this.read();
  }

  get data (){
    return this._data;
  }

  read(){
    let data = fs.readFileSync('data.json');
    return JSON.parse(data);
  }

  write(data){
    return fs.writeFileSync('data.json', JSON.stringify(data))
  }

  addTask(newTask){
    let taskObj = {
      id: this.data.length + 1,
      status: '[ ]',
      task: newTask,
      dateCreated: new Date (),
      tags: [],
    }
    this.data.push(taskObj);

    return this.write(this.data);
  }

  findTask (id){
    let theTask = this.data.filter(task => task.id == id);
    return theTask;
  }

  removeTask (id){
    let removedTask = this.data.filter(task => task.id == id);
    let newTasks = this.data.filter(task => task.id != id);
    this.write(newTasks);

    return removedTask;
  }

  completeTask(id){
    this.data.forEach((task) =>{
      if(task.id == id){
        task.status = '[X]'
      }
    })

    this.write(this.data);
    return this.data;
  }

  uncompleteTask(id){
    this.data.forEach((task) =>{
      if(task.id == id){
        task.status = '[ ]'
      }
    })

    this.write(this.data);
    return this.data;
  }
}


module.exports = ToDo;