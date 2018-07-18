const fs = require('fs')
const Controller = require('../Controller/controllers')

class Model {
    constructor() {
        this.data = this.readData()
    }

    readData() {
        let data = fs.readFileSync('data.json', 'utf-8')
        // console.log(data);
        return JSON.parse(data)
    }

    writeFile(listData) {
        let newData = this.data
        newData.push(listData)
        fs.writeFileSync('data.json', JSON.stringify(newData))
    }

    // static getListToDo() {
    //     return this.data
    // }

    addList(task) {
        let dataList = this.readData()
        let taskObj = null
        if (dataList.length === 0) {
            taskObj = {
                id: 1,
                task: task,
                status: ' '
            }
        } else {
            taskObj = {
                id: Number(dataList[dataList.length - 1].id) + 1,
                task: task,
                status: ' '
            }
        }
        // console.log(dataList[dataList.length-1]);
        this.writeFile(taskObj)
        return `Added "${task}" to your TODO list. . .`
    }

    findById(id) {
        let data = this.data
        let result = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                result += `${data[i].id}. [${data[i].status}] ${data[i].task}`
            }
        }
        return result
    }

    deleteTask(id) {
        let data = this.data
        let result = ''
        let newData;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                result += `Deleted "${data[i].task}" from your TODO list...`
                // console.log(data[i].id-1, 1);
                data.splice(i, 1)
                // console.log(data);
            }
        }
        if (result === '') {
            return 'Your data has been deleted'
        }

        fs.writeFileSync('data.json', JSON.stringify(data))
        return result
    }

    completedTask(id) {
        let data = this.data
        let result = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i].status = 'V'
                result += ` Your "${data[i].task}" is Completed`
            }
        }
        fs.writeFileSync('data.json', JSON.stringify(data))
        return result
    }

    uncompletedTask(id) {
        let data = this.data
        let result = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i].status = ' '
                result += ` Your "${data[i].task}" is uncompleted`
            }
        }
        fs.writeFileSync('data.json', JSON.stringify(data))
        return result
    }
}

module.exports = Model
// console.log(model.data);
