import { useEffect, useState } from "react";

const initialTodos = [
    {
        id:1,
        title: 'todo#1',
        description: 'descrption1 ',
        completed: false
    },
    {
        id:2,
        title: 'todo#2',
        description: 'description2',
        completed: true
    }
  ];

const useTodo = () => {
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    const [todos, setTodos] = useState(localTodos || initialTodos);
    const [todoEdit,setTodoEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
      },[todos])
    
      const todoDelete = (todoId) => {
    
        if(todoEdit && todoId === todoEdit.id){
          setTodoEdit(null)
        }
    
        const changeTodos = todos.filter(todo => todo.id !== todoId)
         setTodos(changeTodos)
      }
    
      const todoToogleCompleted = (todoId) => {
    
        const changeTodos = todos.map(todo => {
    
          const todoEdit = {
            ...todo,
            completed: !todo.completed
          }

          if(todo.id === todoId){
            return todoEdit
          }else{
            return todo
          }
        })
    
        setTodos(changeTodos)
      }
    
      const todoAdd = (todo) => {
    
        const newTodo = {
          id: Date.now(),
          ...todo,
          completed: false
        }
    
        const changeTodos = [
          newTodo,
          ...todos
        ]
    
        setTodos(changeTodos)
      }
    
      const todoUpdate = (todoEdit) => {
    
        const changeTodos = todos.map(todo => (
          todo.id === todoEdit.id
          ? todoEdit
          : todo
        ))
    
        setTodos(changeTodos)
      }

      return {
        todoEdit,
        todos,
        setTodoEdit,
        todoDelete,
        todoToogleCompleted,
        todoAdd,
        todoUpdate
      }
  }

  export default useTodo;