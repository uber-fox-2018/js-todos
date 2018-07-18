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
      id: this.data[0].idCounter + 1,
      status: '[ ]',
      task: newTask,
      dateCreated: new Date (),
      dateCompleted: '',
      tags: [],
    }
    this.data[0].idCounter += 1;
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
        task.status = '[X]';
        task.dateCompleted = new Date();
      }
    })

    this.write(this.data);
    return this.data;
  }

  uncompleteTask(id){
    this.data.forEach((task) =>{
      if(task.id == id){
        task.status = '[ ]';
        task.dateCompleted = '';
      }
    })

    this.write(this.data);
    return this.data;
  }

  sortCreatedDate(order){
    let dates = [];
    let newData = []
    this.data.forEach((task) => {
      dates.push(task.dateCreated);
    })
    dates.sort();

    for (let i in dates){
      for (let j in this.data){
        if(dates[i] === this.data[j].dateCreated){
          newData.push(this.data[j]);
        }
      }
    }
    newData.pop();
    if (order == 'DESC'){
      return newData.reverse();
    } else {
      return newData;
    }
  }

  sortCompletedDate(order){
    let dates = [];
    let newData = []
    this.data.filter(task => task.status == '[X]')
    .forEach((task) => {
      dates.push(task.dateCompleted);
    })
    dates.sort();

    for (let i in dates){
      for (let j in this.data){
        if(dates[i] === this.data[j].dateCompleted){
          newData.push(this.data[j]);
        }
      }
    }
    if (order == 'DESC'){
      return newData.reverse();
    } else {
      return newData;
    }
  }

  tagTask(id, tagArr){
    this.data.forEach((task) =>{
      if(task.id == id){
        tagArr.forEach((tag) => {
          task.tags.push(tag);
        })
      }
    })
    this.write(this.data);

    let taggedTask = this.data.filter(task => task.id == id);
    return taggedTask;
  }

  findTaggedTask (tagQuery){
    let theTasks = [];
    this.data.forEach((task) => {
      if (task.tags){
        task.tags.forEach((tag) =>{
          if(tag == tagQuery){
            theTasks.push(task)
          }
        })
      }
    })
    return theTasks;
  }
}



module.exports = ToDo;