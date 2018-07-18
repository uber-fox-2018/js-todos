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
                status: ' ',
                created_at: new Date(),
                completed_at: '',
                tag: null
            }
        } else {
            taskObj = {
                id: Number(dataList[dataList.length - 1].id) + 1,
                task: task,
                status: ' ',
                created_at: new Date(),
                completed_at: '',
                tag: null
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
                data[i].completed_at = new Date()
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

    addTag(id, tag) {
        let data = this.data
        let result = ''
        for(let i = 0; i < data.length; i++) {
            if(data[i].id === id) {
                data[i].tag = tag
                result += `Tagged Task "${data[i].task}" with tags: ${tag.join(', ')}`
            }
        }
        fs.writeFileSync('data.json', JSON.stringify(data))
        return result
    }

    filterTag(tag) {
        let datas = this.data
        let result = ''
        let dataFilter = datas.filter(data => {
            // console.log(data);
            let rgx = new RegExp(tag, 'g')
            let regex = data.tag.join('').match(rgx)
            // console.log('===>',typeof String(regex), typeof tag);
            return String(regex) === tag
            // console.log('===>',regex.length);
            // console.log(data.tag.join('').match(rgx), [tag]);
            
            // return data.tag.join('').match(rgx) == [tag]
        })
        // console.log('=============');
        return dataFilter
        // console.log(dataFilter);
        
        // console.log(`${filter.id}. "${filter.task}"`);
        
    }
}

module.exports = Model
// console.log(model.data);
