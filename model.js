const Controller = require("./controller.js")
const fs=require('fs')

class Model {

	static list() {	
		let data=fs.readFileSync('./data.json')
		return JSON.parse(data)
	}

	static writeData(result){
		var data=fs.writeFileSync('./data.json',JSON.stringify(result),"utf-8")
	}

	static addTask(task) {
		let result=Model.list()
		let new_obj = {
			id: result.length+1,
			task: task,
			sign:'[]'
		}
		result.push(new_obj)
		Model.writeData(result)	
	} 

	static findById(id) {
		let result=Model.list()
		for(let i=0;i<result.length;i++) {
			if(result[i].id === id) {
				return `${result[i].id}: ${result[i].task}`
				 
			}
		}
		return 'ID not exist'
	}

	static deleteId(id) {
		let result=Model.list()
		for(let i =0;i<result.length;i++) {
			if(result[i].id === id) {
				var temp=result[i].task
				result.splice(i,1)
				Model.writeData(result)
				
			}
		}	
		return temp
	}


}



module.exports= Model