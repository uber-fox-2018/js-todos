const fs = require('fs')

class Model{
    constructor(){
        this.data = this.readData()
    }

    readData(){
        var parsing = fs.readFileSync('./data.json','utf8')
        var arr = JSON.parse(parsing)
        return arr
    }

    writeFile(AllTask){
        fs.writeFileSync('./data.json',JSON.stringify(AllTask))
    }


    listTugas(){        
        return this.data
    }

    addTask(newTask){
        var data = this.data
        var obj = {
            'id'            : data.length+1,
            'task'          : newTask,
            'status'        :false,
            'created_date'  : new Date(),
            'complete_date' : '',
            'tag'           : []

        } 

        data.push(obj)
        this.writeFile(data)
        return newTask
    }

    findById(id){
        var data = this.data
        for(var i = 0; i < data.length;i++){
            if(data[i].id === Number(id)){
                return data[i]
            }
        }
    }

    deleteById(id){
        var data = this.data
        var deletedTask = ''
        for(var i = 0; i <data.length;i++){
            if(data[i].id === Number(id)){
                deletedTask = data.splice(i,1)
            }
        }

        this.writeFile(data)
        return deletedTask
    }

    complete(id){
        var data = this.data
        for(var i = 0; i < data.length;i++){
            if(data[i].id === Number(id)){
                data[i].status = true
                data[i].complete_date = new Date()
                this.writeFile(data)
                return data
            }
        }
        return ''

    }

    uncomplete(id){
        var data = this.data
        for(var i = 0; i < data.length;i++){
            if(data[i].id === Number(id)){
                data[i].status = false
                data[i].complete_date = ''
                this.writeFile(data)
                return data
            }
        }
        return ''
    }

    sortCreated(sort){
        if(sort === undefined || sort === 'ASC'){
           this.data.sort((x,y) => {
               return x.created_date > y.created_date
           })
        }else if(sort === 'DESC'){
            this.data.sort((x,y) => {
                return x.created_date < y.created_date
            })
        }
        
        
        return this.data
    }

    sortCompleted(sort){
        var completedTask = []
        for(var i = 0; i < this.data.length;i++){
            if(this.data[i].status === true){
                completedTask.push(this.data[i])
            }
        }

        if(sort === undefined || sort === 'ASC'){
            completedTask.sort((x,y) => {
                return x.complete_date > y.complete_date
            })
         }else if(sort === 'DESC'){
            completedTask.sort((x,y) => {
                 return x.complete_date < y.complete_date
             })
         }         
         return completedTask
    }

    addTag(id, tag){
        var data = this.data
        console.log('aaaaaaaaaaaa');
        
        for(var i = 0; i < data.length;i++){
            if(data[i].id === Number(id)){
                tag.forEach(element => {
                    data[i].tag.push(element)
                });
                this.writeFile(data)
                return data[i]
            }
        }
    }

    filter(tag){
        var data = this.data
        var arr = []

        for(var i = 0; i < data.length;i++){
            if(data[i].tag !== ''){
                for(var j = 0; j < data[i].tag.length;j++){
                    if(tag === data[i].tag[j]){
                        return data[i]
                    }
                }
            }
        }

        // data.forEach(element => {
        //     console.log(element);
        //    if(element.tag !== ''){
        //       element.tag.forEach(tags => {
        //         //   if(tag ===)
        //         if(tag === tags){
        //             arr.push(element)
        //         }

        //       });

        //    }
        // });
        
        // return arr
       
    }


}

// let model= new Model()
module.exports = Model