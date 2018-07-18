
let fs = require('fs')


class Model {
    constructor(data,add){
        this.data = data
        this.add = add
        this.find;
        this.delete;
        this.data_after_delete;
        
    }

    readData (){
        let dataContent = fs.readFileSync(this.data,'utf8')
        let jsonObj = JSON.parse(dataContent)  
        let data = this.processDataObj(jsonObj)
        this.data = jsonObj
        return data
    }

    addData (){
        let addObj = {'task': this.add, 'id':this.data.length+1}
        this.data.push(addObj)
        let addStr = JSON.stringify(this.data,null,2)
        fs.writeFileSync('data.json',addStr)
    }

    deleteData(id){      
        this.data.forEach(element => {
            if(element.id == id){
                var data_delete = this.processDataObj([element])
                this.delete = data_delete.slice(8)
            }
        });
        this.data.splice(id-1,1)
        let deleteStr = JSON.stringify(this.data,null,2)
        fs.writeFileSync('data.json',deleteStr)
        return this.delete
    }

    findData(id){
        this.data.forEach(element => {
            if(element.id == id){
                this.find= element
            }
        });
        return this.find
    }

    processDataObj(data){
        let dataArr = []  
        let string = ''
        for (let i=0 ; i <data.length ; i++){
            string += data[i].id +' . '+data[i].status+ ' ' + data[i].task
            dataArr.push(string)
            string = ''
        }

        let dataString = dataArr.join('\n')
        return dataString
    }

    complete(id){
        const fs = require('fs')
        
        this.data.forEach(element => {
            if(element.id == id){
                element.status = "[X]"
                
            }
        });
        
        let completeStr = JSON.stringify(this.data,null,2)
        fs.writeFileSync('data.json',completeStr)
        
    }
    
    uncomplete(id){
        const fs = require('fs')
        
        this.data.forEach(element => {
            if(element.id == id){
                element.status = "[ ]"
                
            }
        });
        
        let completeStr = JSON.stringify(this.data,null,2)
        fs.writeFileSync('data.json',completeStr)
        
    }

}



module.exports = Model