const argv = process.argv.slice(2)
const Model = require('./model.js')
const Display = require('./view.js')
var model = new Model
var view = new Display

class Controller{
    constructor(){

    }
    add(){
        var add = process.argv.slice(3)
        var nomor = model.file.length
        model.file.push(add)
        model.add()
        view.displayAdd()
    }
    complete(){
        var sudah = model.file[argv[1]][0].split(' ')[0]
        if(sudah === '[X]'){
            view.sudahComplete()
        }else{
            var potong = model.file[argv[1]][0].split(' ').length
            var namaTask = model.file[argv[1]][0].split(' ').splice(2,potong-1).join(' ')
            var sudah = model.file[argv[1]][0].split(' ').splice(0,2).join('X')
            model.file[argv[1]][0] = sudah +' '+ namaTask
            model.complete()
        }
    }
    uncomplete(){
        var sudah = model.file[argv[1]][0].split('',3).join('')
        if(sudah === '[ ]'){
            view.sudahUncomplete()
        }else{
            var potong = model.file[argv[1]][0].split(' ').length
            var belum = model.file[argv[1]][0].split(' ').splice(0,1)[0].split('X').join(' ')
            var nama = model.file[argv[1]][0].split(' ').splice(2,potong-1).join(' ')
            model.file[argv[1]][0] = belum + ' '+ nama
            model.uncomplete()
        }
        
    }
}
var controller = new Controller

if(argv[0] === 'help'){
    view.displayHelp()
}else if(argv[0] === 'list'){
    view.displayList()
}else if(argv[0] === 'add'){
    controller.add()
}else if(argv[0] === 'findById'){
    view.findById()
}else if(argv[0] === 'delete'){
    model.delete()
}else if(argv[0] === 'complete'){
    controller.complete()
}else if(argv[0] === 'uncomplete'){
    controller.uncomplete()
}

module.exports = Controller