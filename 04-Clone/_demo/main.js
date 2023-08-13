const log = console.log;

log('Object Clone');

let todo = {
    task: 'Do Hw',
    complete: false,
    due_date: '13-08-2023'
};

// // const newTodo =todo;
// //newTodo.complete =true;
// //log(todo.complete);

// //Clone
// const newTodo = {}
// // เอาต้นแบบมา loop แล้ว assign ที่ลำ key value ให้ object ใฟม่

// for (let key in todo) {
//     //assign ที่ละ key:value ให้ newtodo
//     newTodo[key] = todo[key];
//     //newTodo['task] =todo['task'] => 'Do Hw'
//     //newTodo['complete'] =todo['complete'] =>false
//     //newTodo['due_date] = todo['due_date'] => 13-08-2023
// }

// log(newTodo);
// newTodo.complete = true;
// log(newTodo.complete);
// log(todo.complete);

//2. Objet assign 
// const newTodo = {
//     complete: true,

// };

//Merge/Oerride Diraction : Right ==>left
// Object.assign(newTodo, todo);
// 2B
const newtodo = Object.assign({}, todo);
log(newTodo);