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
            this.deleteDataAktifitas()
        } else if(this.todo[0] === 'findById'){
            this.findById()
        } else if(this.todo[0] === 'complete'){
            this.completed()
        } else if(this.todo[0] === 'uncomplete'){
            this.uncompleted()
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
            "aktifitas" : this.todo[1],
            "status" : false
        }
        this.data = getData
        this.data.push(obj)
        models.write(this.data)
        this.data = []
    }

    deleteDataAktifitas(){
        let getData = models.read()
        let deleteData = []
        for(let i = 0; i < getData.length; i++){
            if(getData[i].id != this.todo[1]){
                deleteData.push(getData[i])
            }
        }
        this.data = deleteData
        models.write(this.data)
        this.data = []
        this.lists()
    }

    findById(){
        let findData = models.find(this.todo[1])
        views.displayFindId(findData)
    }

    completed(){
        let list = models.read()
        // console.log("list ", list[1].status)
        let dataList = []
        for(let i = 0; i < list.length; i++){
            if(list[i].id == this.todo[1]){
                list[i].status = false
                dataList.push(list[i])
            } else {
                dataList.push(list[i])
            }
        }

        this.data = dataList
        models.write(this.data)
        this.data = []
        this.lists()
    }

    uncompleted(){
        let list = models.read()
        console.log("list ", list[1].status)
        let dataList = []
        for(let i = 0; i < list.length; i++){
            if(list[i].id == this.todo[1]){
                list[i].status = true
                dataList.push(list[i])
            } else {
                dataList.push(list[i])
            }
        }

        this.data = dataList
        models.write(this.data)
        this.data = []
        this.lists()
    }

}

module.exports = Controller