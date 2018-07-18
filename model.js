const fs = require('fs')

class Model {
    constructor(){
        this.data = this.readFile()
    }

    readFile(){
        let jsonData = fs.readFileSync('./data.json','utf8')
        return JSON.parse(jsonData)
    }

    writeFile(data){
        fs.writeFileSync('./data.json',JSON.stringify(data))
    }

    listData(){
        let output = ''
        for (let i = 0; i < this.data.length; i++) {
            output += `${this.data[i].id}. ${this.data[i].status} ${this.data[i].task} \n`
        }
        return output
    }

    addData(input){
        let newId = 0
        if (this.data.length === 0) {
            newId = 1
        }else {
            newId = this.data[this.data.length-1].id+1
        }

        let obj = {
            id: newId,
            task: input,
            status: '[ ]',
            date: new Date(),
            completed_date: null,
            tag: [],
        }

        this.data.push(obj)
        this.writeFile(this.data)

        return obj
    }

    findById(input){
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === Number(input)) {
                return this.data[i]
            }
        }
    }

    removeById(input){
        let output = ''
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === Number(input)) {
                output += this.data[i].task
                this.data.splice(i,1)
                this.writeFile(this.data)
            }
        }
        return output
    }

    listCompleted(input){
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === Number(input)) {
                this.data[i].status = '[x]'
                this.data[i].completed_date = new Date()
                this.writeFile(this.data)
            }
        }
        return this.listData()
    }

    listUncompleted(input){
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === Number(input)) {
                this.data[i].status = '[ ]'
                this.writeFile(this.data)
            }
        }
        return this.listData()
    }

    sortByDate(){
        let output = ''
        this.data.sort((a,b) => {
            return new Date(a.date) - new Date(b.date);
        })

        for (let i = 0; i < this.data.length; i++) {
            output += `${this.data[i].id}. ${this.data[i].status} ${this.data[i].task} \n`
        }

        return output
    }

    sortOutstanding(input){
        let output = ''
        if (input === 'asc') {
            this.data.sort((a,b) => {
                return new Date(a.date) - new Date(b.date);
            })
        }else if (input === 'desc') {
            this.data.sort((a,b) => {
                return new Date(b.date) - new Date(a.date)
            })
        }

        for (let i = 0; i < this.data.length; i++) {
            output += `${this.data[i].id}. ${this.data[i].status} ${this.data[i].task} \n`
        }

        return output
    }

    sortByCompleted(){
        let output = ''
        this.data.sort((a,b) => {
            return new Date(a.completed_date) - new Date(b.completed_date);
        })

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].completed_date !== null) {
                output += `${this.data[i].id}. ${this.data[i].status} ${this.data[i].task} \n`
            }
        }

        return output
    }

    addTag(input,inputTag){
        for (let i = 0; i < inputTag.length; i++) {
            this.data[input-1].tag.push(inputTag[i])
        }

        this.writeFile(this.data)
        return `Tagged task ${this.data[input-1].task} with tags: ${this.data[input-1].tag}`
    }

    filterData(input){
        let output = ''
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].tag.length; j++) {
                if (this.data[i].tag[j] === input) {
                    output += `${this.data[i].id}. ${this.data[i].task} [${this.data[i].tag}] \n`
                } 
            }
        }
        return output
    }
}


module.exports = Model