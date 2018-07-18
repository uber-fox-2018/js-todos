const fs = require('fs')

class Model {  
    constructor() {
        this.data = this.readData()
    }

    readData() {
        return JSON.parse(fs.readFileSync('data.json', 'utf8'))
    }

    writeData(data) {
        fs.writeFileSync('data.json',JSON.stringify(data))
    }

    listData() {
        let all_Data_Listed = []
        let status = false

        for (let i in this.data) {
            if (this.data[i].status === false || this.data[i].status === undefined) {
                status = '[ ]'
            } else {
                status = '[X]'
            }
            all_Data_Listed.push(`${this.data[i].id}. ${status} ${this.data[i].task}`)
        }
        return all_Data_Listed.join('\n')
    }

    add(input) {
        let id = null

        if (this.data.length === 0) {
            id = 1
        } else {
            id = this.data[this.data.length-1].id+1
        }

        let addData = {
            id: id,
            task: input,
            status: false,
            tag: [],
            createdAt: new Date()
        }

        this.data.push(addData)
        this.writeData(this.data)
        return `added ${input} to your TO DO list...`
    }

    findById(input) {
        for (let i in this.data) {
            if(this.data[i].id === Number(input)) {
                return `${this.data[i].id}. ${this.data[i].task}`
            }
        }
    }

    delete(input) {
        let want_To_Delete = []
        for (let i in this.data) {
            if(this.data[i].id === Number(input)) {
                want_To_Delete = this.data[i]
                this.data.splice(i,1)
            }
        }
        this.writeData(this.data)
        return `Deleted ${want_To_Delete.task} from your TO DO list...`
    }

    complete(input) {
        for (let i in this.data) {
            if (Number(input) === this.data[i].id) {
                this.data[i].status = true
            }
        }
        this.writeData(this.data)
        return this.listData()
    }

    uncomplete(input) {
        for (let i in this.data) {
            if (Number(input) === this.data[i].id) {
                this.data[i].status = false
            }
        }
        this.writeData(this.data)
        return this.listData()
    }

    listCreated(input) {
        if (input[0] === 'asc') {
            this.data.sort((a, b) => {
                return new Date(a.createdAt) - new Date(b.createdAt)
            })
        } else if (input[0] === 'desc') {
            this.data.sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt)
            }) 
        }
        return this.listData()
    }

    listCompleted(input) {
        this.listCreated(input)
        for (let i in this.data) {
            if (this.data[i].status === false) {
                this.data.splice(i,1)
            }
        }
        return this.listData()
    }

    tag(input) {
        let newTag = input.slice(1)
        let inputId = Number(input[0])
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < newTag.length; j++) {
                if (this.data[i].id === inputId) {
                    this.data[i].tag.push(newTag[j])
                }
            }
        }
        this.writeData(this.data)
        return `${newTag} is added to tag data`
    }

    filter(input) {
        let output = ''
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].tag.length; j++) {
                if (this.data[i].tag[j] === input[0]) {
                    output += `${this.data[i].id}. ${this.data[i].task} [${this.data[i].tag}]`
                } 
            }
        }
        return output
    }

}

module.exports = Model