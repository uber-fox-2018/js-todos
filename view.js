class View {

	static showHelp() {
        console.log('$ node todo.js help')
        console.log('$ node todo.js list')
        console.log('$ node todo.js add <task_content>')
        console.log('$ node todo.js findById <task_id>')
        console.log('$ node todo.js delete <task_id>')
        console.log('$ node todo.js complete <task_id>')
        console.log('$ node todo.js uncomplete <task_id>')
	}

	static showList(arr_data) {
		for(let i=0;i<arr_data.length;i++) {
			console.log((i+1)+'. '+arr_data[i]['sign']+arr_data[i]["task"])
		}
	}

	static addTask(task) {
		console.log(`Add ${task} into TO DO List`)
	}

	static showById(idAndTask){
		console.log(idAndTask)
	}

	static deleteId(task) {
		console.log(`Delete ${task} from TO DO List`)
	}
}

module.exports=View