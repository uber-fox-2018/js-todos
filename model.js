const fs = require('fs')
const View = require('./view')

class TodoList {
  constructor(file) {
    this._file = file
    // this._activityList = []
    this.dataJson = []
  }

  readFile() {
    let fileStr = fs.readFileSync('./data.json', 'utf-8')
    this.dataJson = JSON.parse(fileStr)
  }

  write() {
    let jsonStr = JSON.stringify(this.dataJson, null, 2)
    fs.writeFileSync('./data.json', jsonStr)
  }

  add() {
    let obj = {"id" : 3, "task" : "Makan"}
    this.dataJson.push(obj)
  }

  listData() {
    let str = '';
    for (let i = 0; i < this.dataJson.length; i++) {
      str += `${this.dataJson[i]['id']} ${this.dataJson[i]['task']} \n`
    }
    return str
  }
}

let parser = new TodoList()
let result = parser.readFile()
parser.add()
console.log(parser.dataJson)
parser.write()
// console.log(parser.readFile())
module.exports = TodoList
