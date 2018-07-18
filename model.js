const fs = require('fs');

class ToDo {

  static read(){
    let data = fs.readFileSync('data.json');
    return JSON.parse(data);
  }

  static write(data){
    return fs.writeFileSync('data.json', JSON.stringify(data))
  }
}


module.exports = ToDo;