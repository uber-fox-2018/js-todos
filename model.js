
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
            completedDate: null
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
               data[i].completedDate = new Date()
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
            return new Date(a.createdAt) - new Date(b.createdAt)
        } )
        return this.m_list()
    }

    m_listOutStanding(input){
        let data = this.readData()
        let ascDesc = ''

        if(input === 'asc'){
            data.sort(function(a,b){
                return new Date(a.createdAt) - new Date(b.createdAt)
            })
        } else if (input === 'desc'){
            data.sort(function(a,b){
                return new Date(b.createdAt) - new Date(a.createdAt)
            } )
        }

        for(let i = 0; i<data.length; i++){
            ascDesc += `${data[i].id}. ${data[i].status} ${data[i].task}\n`
        }

        return ascDesc

    }

    m_listCompleted(input){
        let data = this.readData()
        let completedSort = ''

        data.sort(function(a,b) {
            return new Date(b.completedDate) - new Date(a.completedDate)

        })

        for (let i = 0; i < data.length; i++) {
            if(data[i].completedDate !== null){
                completedSort += `${data[i].id}. ${data[i].status} ${data[i].task}\n`
            }
            
        }
        return completedSort

    }
}

let a = new Model()
console.log(a.m_listCompleted());


// console.log(Model.m_findById(3))
// console.log(Model.m_delete(5))



module.exports = Model