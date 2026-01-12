import React, { useState } from 'react'
import TodoListMiniProjectEx from './TodoListMiniProjectEx'
import TodoFormMiniProjectEx from './TodoFormMiniProjectEx';


export default function TodoAppMiniProjectEx() {
  // Parent - state and logic

  // let date = new Date.now();

  const [todoList, setTodoList] = useState([
    // {id: Date.now(), text: 'todoText', isComplete: false},
  ]);

  const toggleIsComplete = (TaskId) => {
    const updatedToDoList = todoList.map((task) => {
      if(task.id === TaskId){
        return{...task, isComplete: !task.isComplete}
      } else{
        return task;
      }
    })

    setTodoList(updatedToDoList);
  }

  const deleteTodo = (TaskId) => {
    const filteredToDoList = todoList.filter((task) => {
        return task.id !== TaskId
    })

    setTodoList(filteredToDoList);
  }

  // Parameter: Receives the text for the new todo
  // What it does: Creates new todo object and adds to array
  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      isComplete: false,
    }
    // add to the array
    setTodoList([...todoList, newTodo])
  }

  return (
    <div>
      TodoAppMiniProjectEx

      <TodoFormMiniProjectEx addTodo = {addTodo}/>

      <TodoListMiniProjectEx 
        todoList = {todoList} 
        toggleIsComplete = {toggleIsComplete} 
        deleteTodo = {deleteTodo}
      />
    </div>
  )
}
