
let fs = require('fs')

class Model {
    constructor(){
        // this.data = this.readData()

    }
   
    readData(){
        let data = JSON.parse(fs.readFileSync('./data.json'))
        return data
    }

    // writeFile(){
        
    // }

     m_list(){
        let dataList = this.readData()
        let output = ''
        
        for (let i = 0; i < dataList.length; i++) {
        output += `${i+1}. ${dataList[i].status} ${dataList[i].task} \n` //tas dari data.json
        }
        return output
    }

     m_add(input){
        let data = this.readData()
        var objData = {
            id: data.length+1,
            task: input,
            status: '[ ]',
            createdAt: new Date(),
            completedDate: new Date()
        }

        data.push(objData)
        fs.writeFileSync('./data.json', JSON.stringify(data))

        return objData
    }

     m_findById(input){

        let data = this.readData()

        for (let i = 0; i < data.length; i++) {
            if(Number(input) === data[i].id){
                return `${data[i].id}. ${data[i].task}`
            }
            
        }
    }

     m_delete(input){

        let data = this.readData()
        // console.log(data);
        

        for (let i = 0; i < data.length; i++){
            if(Number(input) === data[i].id){ //pakai number karena data yg masuk argv yaitu STRING("")
                var tmp = data[i].task
                data.splice(i,1);
                fs.writeFileSync('./data.json',JSON.stringify(data))
                return tmp
            
            }
        } 
                // fs.writeFileSync('./data.json',JSON.stringify(data))
                // return tmp
    }

    m_complete(input){
        let data = this.readData()

        for( let i = 0; i< data.length;i++){
            if(Number(input) === data[i].id){
               data[i].status = '[X]'
               fs.writeFileSync('./data.json',JSON.stringify(data))  
            }
        }
        return this.m_list()
    }

    m_uncomplete(input) {
        let data = this.readData()

        for(let i =0; i<data.length;i++){
            if(Number(input) === data[i].id){
                data[i].status = '[ ]'
                fs.writeFileSync('./data.json',JSON.stringify(data))  

            }
        }
        return this.m_list()
    }

    m_listCreated(input){
        let data = this.readData()

        data.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)
        } )
        return this.m_list()
    }

    m_listOutStanding(input){
        let data = this.readData()
        let ascDesc = ''

        if(input === 'ASC'){
            data.sort(function(a,b){
                return new Date(a.date) - new Date(b.date)
            })
        } else if (input === 'DESC'){
            data.sort(function(a,b){
                return new Date(b.date) - new Date(a.date)
            } )
        }

        for(let i = 0; i<data.length; i++){
            ascDesc += `${data[i].id}. ${data[i].status} ${data[i].task}\n`
        }

        return ascDesc

    }



}

// console.log(Model.m_findById(3))
// console.log(Model.m_delete(5))



module.exports = Model