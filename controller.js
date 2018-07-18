// const View = require('./view.js');
// const Model = require('./model.js');

// class Controller {

//     static helpMenu() {
//         View.helpMenu();
//     }

//     static printList() {
//         let listData = Model.readData();
//         if (listData !== []) {
//             View.showList(listData);
//         } else {
//             View.showListError();
//         }
//     }

//     static addToList(newTask) {
//         if (Model.addToList(newTask) === true) {
//             View.addSuccessful();
//         } else {
//             View.addFailed();
//         }
//     }
    
//     static findById(id) {
//         View.printById(Model.findById(id));
//     }

//     static delete(id) {
//         View.delete(Model.delete(id));
//     }
// }

// module.exports = Controller;