const Model = require("./model.js")
const View = require("./view.js")


class Controller {


	static help() {
		View.showHelp()
	}

	static list() {
		let result = Model.list()
		View.showList(result)
	}

	static addTask(task) {
		Model.addTask(task)
		View.addTask(task)
	}

	static findById(id) {
		let result=Model.findById(id)
		View.showById()
	}

	static deleteId(id) {
		let result=Model.deleteId(id)
		View.deleteId(result)	
	}

	static complete(id) {
		let result = Model.complete(id)
		View.complete(result)
	}
}




module.exports= Controller