const fs = require('fs')

class Model {
    constructor() {
        this.data = this.readFile()
    }

    readFile() {

        let jsondata = fs.readFileSync('./data.json')
        let data = JSON.parse(jsondata)
        return data
    }

    writeFile() {
        
        fs.writeFileSync('./data.json',JSON.stringify(this.data))
    }

    listData() {

        let tmpList = [];
        let id = 1
        for(let i=0; i<this.data.length; i++){
            tmpList.push(`${id++}. ${this.data[i].status} ${this.data[i].task} ${this.data[i].tag}`)            
        }

        return tmpList.join('\n')
    }

    addData(nextCommand) {
        
        let newData = {
            task: nextCommand,
            status: '[ ]',
            createdAt: new Date(),
            completedDate: new Date(),
            tag: []
        }

        this.data.push(newData)          
        this.writeFile(this.data)
        console.log(this.data);
        return newData
    }

    findById(nextCommand){

        for(let i=0; i<this.data.length; i++){
            if(Number(nextCommand) === i+1){

                console.log(this.data[i]);
                return `${i+1}. ${this.data[i].task} ${this.data[i].tag}`
            }
        }
    }

    deleteById(nextCommand){
        
        for(let i=0; i<this.data.length; i++){
            if(Number(nextCommand) === i+1){

                var tmp = this.data[i]
                this.data.splice(i,1)
                this.writeFile(this.data)
            }
        }

        console.log(tmp);
        return tmp

    }

    completeById(nextCommand){
    
        for(let i=0; i<this.data.length; i++){
            if(Number(nextCommand) === i+1){

                var tmp = this.data[i]
                this.data[i].status = '[X]'
                this.data[i].completedDate = new Date()
                this.writeFile(this.data)
            }
        }
        
        console.log(tmp);
        return this.listData()    
    }

    uncompleteById(nextCommand){
    
        for(let i=0; i<this.data.length; i++){
            if(Number(nextCommand) === i+1){

                var tmp = this.data[i]
                this.data[i].status = '[ ]'
                this.writeFile(this.data)
            }
        }
        
        console.log(tmp);
        return this.listData()
    }

    listCreatedAll(nextCommand){

        if(nextCommand === 'asc'){
            this.data.sort(function(a,b){
              return new Date(a.createdAt) - new Date(b.createdAt);
            });
            return this.listData()
        }else if (nextCommand === 'desc'){
            this.data.sort(function(a,b){
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
              return this.listData()
        }
    
    }

    listCompletedAll(nextCommand){

        this.data.sort(function(a,b){
            return new Date(b.completedDate) - new Date(a.completedDate);
        });

        let tmpList = [];
        let id = 1
        for(let i=0; i<this.data.length; i++){

            if(nextCommand === "completed" && this.data[i].status === '[X]'){
                tmpList.push(`${id++}. ${this.data[i].status} ${this.data[i].task} ${this.data[i].tag}`)   
            }else if(nextCommand === "uncompleted" && this.data[i].status === '[ ]'){
                tmpList.push(`${id++}. ${this.data[i].status} ${this.data[i].task} ${this.data[i].tag}`)   
            }
                     
        }

        return tmpList.join('\n')
    }

    addTagNew(nextCommand, nextCommand2){

        for(let i=0; i<this.data.length; i++){
            if(Number(nextCommand) === i+1){

                var tmp = this.data[i]
                this.data[i].tag.push(nextCommand2)
                this.writeFile(this.data)
            }
        }
        
        console.log(tmp);
        return tmp

    }
}



module.exports = Model;