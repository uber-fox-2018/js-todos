const fs = require('fs');

class Model {
    constructor() {
        this.data = this.readData();
    }

    readData() {
        const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
        this.data = data;
        return this.data;
    }

    writeData(){
        fs.writeFileSync('./data.json', JSON.stringify(this.data))
    }

    addList(param_addList){
        let param_id = 0
        let currentIndex = this.data.length-1
        
        if (this.data.length === 0){
            param_id = 1
        }else {
            param_id = this.data[currentIndex].id + 1
        }

        let addData = {
            id : param_id,
            status : '[ ]',
            list : param_addList,
            tag : [],
            created : new Date(),
            completed : true
        }
        this.data.push(addData)
        this.writeData(this.data)
        
        return true
    }

    findById(param_findById){
        let id = Number(param_findById)
        for (let i = 0 ; i < this.data.length ; i++){
            if (this.data[i].id === id){
                return this.data[i]
            }
        }
        return false
    }

    delete(param_delete){
        let id = Number(param_delete)
        let temp = null

        for (let i = 0 ; i < this.data.length ; i++){
            if (this.data[i].id === id){
                temp = this.data[i]
                this.data[i] = {}
                this.data.splice(i, 1)
                this.writeData(this.data)

                return temp
            }
        }
    }

    complete(param_complete){
        let completeStatus = false
        let id = Number(param_complete)
        
        let temp = null

        for (let i = 0 ; i < this.data.length ; i++){
            if (this.data[i].id === id && this.data[i].completed !== completeStatus){
                temp = this.data[i].id
                this.data[i].status = '[x]'
                this.data[i].completed = false
                this.writeData(this.data)
            }
        }
        
        return temp
    }

    uncomplete(param_uncomplete){
        let uncompleteStatus = true
        let id = Number(param_uncomplete)
        let temp = null

        for (let i = 0 ; i < this.data.length ; i++){
            if (this.data[i].id === id && this.data[i].completed !== uncompleteStatus){
                temp = this.data[i].id
                this.data[i].status = '[x]'
                this.data[i].completed = true
                this.writeData(this.data)
            }
        }
        return temp
    }

    sortDate(param_sortDate){
        
        if (this.data.length === 0){
            return undefined
        }else {
            let id = param_sortDate
            for (let i = 0 ; i < this.data.length ; i++){
                if (id == 'asc'){
                    this.data.sort(function (a, b){
                        let a_ = new Date(a.created).getTime()
                        let b_ = new Date(b.created).getTime()
                        return a_ - b_
                    })
                }else if (id == 'desc'){
                    this.data.sort(function (a, b){
                        let a_ = new Date(a.created).getTime()
                        let b_ = new Date(b.created).getTime()
                        return b_ - a_
                    })
                }
            }
            return this.data
        }
    }

    sortCompleted(){
        if (this.data.length === 0){
            return undefined
        }else {
            let rescompleted = []
            for (let i = 0 ; i < this.data.length ; i++){
                if (this.data[i].completed === false){
                    rescompleted.push(this.data[i])
                }
            }

            if (rescompleted.length !== undefined) {
                return rescompleted
            }else {
                return undefined
            }
        }
    }

    addTag(param_1, param_2){
        let id = param_1
        let tag = param_2
        
        for (let i = 0 ; i < this.data.length ; i++){
            if (this.data[i].id == id){
                this.data[i].tag = tag
                this.writeData(this.data)
                return this.data[i]
            }
        }
    }

    filter(param_filter){
        let tag = param_filter
        let result = []

        for (let i = 0 ; i < this.data.length ; i++){
            if (this.data[i].tag == tag){
                result.push(this.data[i])
            }
        }
        return result
    }
}
module.exports = Model