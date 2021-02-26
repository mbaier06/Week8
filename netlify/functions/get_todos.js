let firebase = require('./firebase')

exports.handler = async function(event) {
  // console.log('hello from the back-end!')
  //Step 3 - filter Todos by User ID
  let queryStringUserId =  event.queryStringParameters.userId
  

  let todosData = []
  //Step 1 form todos.js:
  let db = firebase.firestore()
  let querySnapshot = await db.collection('todos').where('userId', '==', queryStringUserId).get()
  // let querySnapshot = await db.collection('todos').get()
  // console.log(`Number of todos: ${querySnapshot.size}`)

  //Step 2: Fill up empty array with todos
  let todos = querySnapshot.docs
  for (let i=0; i < todos.length; i++){
    let todoId = todos[i].id
    let todo = todos[i].data()
    // console.log(todo)

    //Push to empty array
    todosData.push({
      id: todoId,
      text: todo.text
    })
  }


  return {
    statusCode: 200,
    body: JSON.stringify(todosData)
  }
}