const fs = require('fs')

class ModelTodo {
  constructor() {
    this.data = this.readFile()
  }

  readFile() {
    const data = fs.readFileSync('data.json', 'utf-8')
    return JSON.parse(data)
  }

  writeFile(newData) {
    return fs.writeFileSync('data.json', JSON.stringify(newData))
  }

  list() {
    return this.data
  }

  add(task) {
    const date = new Date().toLocaleDateString()
    var id = 0
    if (this.data.length === 0) {
      id = 1
    } else {
      id = this.data[this.data.length-1].id + 1
    }

    let newTask = {
      id: id,
      task_content: task,
      complete_task: [],
      date: date,
      tags: []
    }
    this.data.push(newTask)
    this.writeFile(this.data)
    return this.data
  }

  findById(id) {
    const result = []
    this.data.map(dataFind => {
      if (dataFind.id === id) {
        result.push(dataFind)
      }
    })
    return result
  }

  deleteTodo(id) {
    var deleteTodoArr = []
    
    this.data.map((deleteData, i) => {
      if (deleteData.id === id) {
        deleteTodoArr.push(deleteData)
        data.splice(i, 1)
      }
    })
    this.writeFile(this.data)
    return deleteTodoArr
  }

  complete(id) {
    this.data.map(addComplete => {
      if (addComplete.id === id) {
        if (addComplete.complete_task.length > 0) {
          const message = 'Task has completed'
          return message
        } else {
          addComplete.complete_task.push('Completed')
        }
      }
    })
    this.writeFile(this.data)
    return this.data
  }

  uncomplete(id) {
    this.data.map(uncompleteTodo => {
      if (uncompleteTodo.id === id) {
        uncompleteTodo.complete_task.shift()
      }
    })

    this.writeFile(this.data)
    return data
  }

  listCreated(sortBy) {
    switch (sortBy) {
      case 'asc': {
        this.data.sort((a, b) => {
          return new Date(a.date) - new Date(b.date)
        })
        break
      }
      case 'desc': {
        this.data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date)
        })
        break
      }
    }
    return this.data
  }

  listCompleted() {
    let completeArr = []
    this.data.map(completeTodo => {
      if (completeTodo.complete_task[0] === 'Completed') {
        completeArr.push(completeTodo)
      }
    })
    return completeArr
  }

  tag(id, todoTag) {
    this.data.map(addTag => {
      if (addTag.id === id) {
        addTag.tags.push(todoTag)
      }
    })
    
    this.writeFile(this.data)
    return this.data
  }

  filters(filterByTag) {
    let resultFilter = []
    
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data[i].tags.length; j++) {
        if (this.data[i].tags[j] === filterByTag) {
          resultFilter.push(this.data[i])
        }
      }
    }

    return resultFilter

  }
}

module.exports = ModelTodo