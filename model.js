const fs = require('fs')

class ToDo{
    constructor(task){
        this.id = null
        this.mark = "[ ]"
        this.task = task
        this.dateCreate = new Date
        this.dateComplete = null
        this.tags = []
    }
}

class Model{
    constructor(){
        this.data = this.read()
    }

    read(){
        let dataString = fs.readFileSync('data.json','utf8')
        let data = JSON.parse(dataString)
        // console.log(typeof data)
        return data
    }

    write(){
        fs.writeFileSync('data.json',JSON.stringify(this.data))
    }

    add(task){
        let objToDo = new ToDo() 
        if(this.data.length === 0){
            objToDo.id = 1
            objToDo.task = task
        }else{
            objToDo.id = this.data[this.data.length-1].id +1
            objToDo.task = task
        }
        this.data.push(objToDo)
        this.write()
    }

    findById(id){
        let result;
        for(let i = 0; i<this.data.length; i++){
            if(id === this.data[i].id){
                result = (this.data[i])
            }
        }
        return result
    }

    delete(id){
        let result;
        for(let i = 0; i<this.data.length;i++){
            if(id === this.data[i].id){
                result = this.data.splice(i,1)
                this.write()
            }
        }
        return result
    }

    complete(id){
        let result;
        for(let i = 0; i<this.data.length;i++){
            if(id === this.data[i].id){
                this.data[i].mark = "[x]"
                this.data[i].dateComplete = new Date
                this.write()
            }
        }
    }

    uncomplete(id){
        let result;
        for(let i = 0; i<this.data.length;i++){
            if(id === this.data[i].id){
                this.data[i].mark = "[ ]"
                this.write()
            }
        }
    }

    sortBydate(input){
        for(let i = 0; i<this.data.length;i++){
            // console.log(this.data[i].date)
            if(input === 'asc'){
                this.data.sort(function(a,b){
                    let c = new Date(a.dateCreate).getTime();
                    let d = new Date(b.date).getTime();
                    return c-d
                })
            }else if(input === 'desc'){
                this.data.sort(function(a,b){
                    let c = new Date(a.dateCreate).getTime();
                    let d = new Date(b.dateCreate).getTime();
                    return d-c
                })
            }
        }
        return this.data
    }

    sortByComplete(input){
        for(let i = 0; i<this.data.length;i++){
            // console.log(this.data[i].date)
            if(input === 'asc'){
                this.data.sort(function(a,b){
                    let c = new Date(a.dateComplete).getTime();
                    let d = new Date(b.dateComplete).getTime();
                    return c-d
                })
            }else if(input === 'desc'){
                this.data.sort(function(a,b){
                    let c = new Date(a.dateComplete).getTime();
                    let d = new Date(b.dateComplete).getTime();
                    return d-c
                })
            }
        }
        return this.data
    }

    addTag(id,tag){
        for(let i = 0; i<this.data.length;i++){
            if(id === this.data[i].id){
                this.data[i].tags = tag
                this.write()
            }
        }        
    }

    filterTag(tag){
        for(let  i = 0; i<this.data.length; i++){
            if(this.data[i].tags !== '')
            for(let j = 0; j<this.data[i].tags.length; j++){
                if(tag === this.data[i].tags[j]){
                    return this.data[i]
                }
            }
        }
    }
}

// let model = new Model()

// model.addTag(4,'futsal')

module.exports = Model