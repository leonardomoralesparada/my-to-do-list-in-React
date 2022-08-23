import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types"


const TodoList = ({todos,todoDelete,todoToogleCompleted,setTodoEdit}) => (
       <div>
            <h1 className="text-right">Lista De Tareas</h1>
            { todos.length === 0 ? (
                    <div className="alert alert-primary">
                        No hay Tareas, por favor agrega una!
                    </div>):
                (todos.map(todo => (
                        <Todo 
                            todo={todo} 
                            key={todo.id} 
                            todoDelete={todoDelete}  
                            todoToogleCompleted={todoToogleCompleted}  
                            setTodoEdit={setTodoEdit}
                        />
                    ))
                )}

       </div>
    )

    TodoList.prototypes = {
        todos: PropTypes.object.isRequired,
        todoDelete: PropTypes.func.isRequired,
        todoToogleCompleted: PropTypes.func.isRequired,
        setTodoEdit: PropTypes.func.isRequired,
    }

    TodoList.defaultProps = {
        todos: {},
        todoDelete: () => {},
        todoToogleCompleted: () => {},
        setTodoEdit: () => {}
    }

export default TodoList;