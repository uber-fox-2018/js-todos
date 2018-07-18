let models = require('./model.js') 
let views = require('./view.js') 

class Controller {
    constructor(argv){
        this.todo = argv
        this.data = []
        this.perintah()
        
    }   

    perintah(){
        if(this.todo.length === 0 || this.todo[0] === 'help'){
            this.helps()
        } else if(this.todo[0] === 'list'){
            this.lists()
        } else if(this.todo[0] === 'add'){
            this.addDataAktifitas()
        } else if(this.todo[0] === 'delete'){
            this.addDataAktifitas()
        }
    }

    helps(){
        views.help()
    }

    lists(){
        views.displayList(models.read())
    }

    addDataAktifitas(){
        let getData = models.read()
        let idData = getData[getData.length-1].id + 1
        let obj = {
            "id" : idData,
            "aktifitas" : this.todo[1]
        }

        this.data = getData
        this.data.push(obj)
        models.write(this.data)
        this.data = []
    }

}

module.exports = Controller