// const fs = require('fs');

// class Model {

//     static readData() {
//         const data = JSON.parse(fs.readFileSync('data.JSON', 'utf8'));
//         return data;
//     }

//     static writeData(data) {
//         fs.writeFileSync('./data.json', JSON.stringify(data));
//     }

//     static addToList(newTask) {
//         var dataList = this.readData();
//         let newInput = {
//             id: dataList.length + 1,
//             check: '[ ]',
//             task: newTask,
//             tag: [],
//             created: new Date()
//         }
//         dataList.push(newInput);
//         this.writeData(dataList);
//         return true;
//     }

//     static findById(id) {
//         let dataList = this.readData();
//         for (let i = 0; i < dataList.length; i++) {
//             if(dataList[i].id == id) {
//                 return dataList[i];
//             }
//         }
//         return false;
//     }

//     static delete(id) {
//         let dataList = this.readData();
//         let toBeDeleted = {};
//         for (let i = 0; i < dataList.length; i++) {
//             if(dataList[i].id == Number(id)) {
//                 toBeDeleted = dataList[i];
//                 dataList.splice(i, 1);
//                 this.writeData(dataList);
//             }
//         }
//         return toBeDeleted;
//     }
// }

// module.exports = Model;