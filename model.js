const fs = require('fs')
var list = fs.readFileSync('./data.json')
var listJSON = JSON.parse(list)
class Model{
    constructor(){
        this.file = listJSON
    }
    add(){
        let add = JSON.stringify(this.file)
        fs.writeFileSync('./data.json',add)
    }
    delete(){
        let hapus = process.argv.slice(3)
        console.log(`you just delete ${this.file[hapus]}`)
        // this.file[hapus] = undefined
        var remove = this.file.splice(hapus,1)
        let add = JSON.stringify(this.file)
        fs.writeFileSync('./data.json',add)
        
    }
    complete(){
        let complete = JSON.stringify(this.file)
        fs.writeFileSync('./data.json',complete)
    }
    uncomplete(){
        let uncomplete = JSON.stringify(this.file)
        fs.writeFileSync('./data.json',uncomplete)
    }
}

module.exports = Model
