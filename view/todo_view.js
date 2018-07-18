const chalk = require('chalk')
const Table = require('cli-table')

class ViewTodo {
  static showHelp() {
    const menuHelp = [
      "node todo.js",
      "node todo.js help",
      "node todo.js list",
      "node todo.js add <task_content>",
      "node todo.js findById <task_id>",
      "node todo.js delete <task_id>",
      "node todo.js complete <task_id>",
      "node todo.js uncomplete <task_id>",
      "node todo.js list:created",
      "node todo.js list:completed",
      "node todo.js tag <task_id> <tag_name>",
      "node todo.js filter:<task_id>"
    ];

    let table = new Table()
    for (let i = 0; i < menuHelp.length; i++) {
      var isiMenu = []
      
      isiMenu.push(i+1, menuHelp[i])
      table.push(isiMenu)
    }
    console.log(chalk.blue(table.toString()))
  }

  static messageAdd(task) {
    console.log(`Added "${task}" to your TODO List`)
  }

  static list(data) {
    const table = new Table()
    table.push(['No', 'Task', 'Complete Task', 'Date', 'Tag'])
    for (let i = 0; i < data.length; i++) {
      var isiTodo = []
      isiTodo.push(
        data[i].id, 
        data[i].task_content, 
        data[i].complete_task, 
        data[i].date, 
        data[i].tags
      )
      table.push(isiTodo)
    }
    console.log(chalk.blueBright.bgWhiteBright(table.toString()))
  }

  static showFind(data) {
    const table = new Table()
    const dataArr = []
    table.push(['No', 'Task Content', 'Complete Task'])
    data.map(data => {
      dataArr.push(
        data.id,
        data.task_content,
        data.complete_task,
      )
    })
    table.push(dataArr)
    console.log(chalk.green(table.toString()))
  }

  static deleteTodo(dataDelete) {
    dataDelete.map(data => {
      console.log(`Deleted "${data.task_content}" from your TODO List`)
    })
  }

  static showFilter(dataFilter) {
    console.log(dataFilter)
  }
}

module.exports = ViewTodo
