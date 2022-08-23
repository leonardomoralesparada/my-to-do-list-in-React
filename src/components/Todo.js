import React from "react";
import PropTypes  from "prop-types"

const Todo = ({todo,todoDelete,todoToogleCompleted,setTodoEdit}) => (
        <div className="card mt-2">
                <div className="card-body">
                    <h3 className="card-title text-right">
                        {todo.title}
                        <button
                            onClick={() => todoToogleCompleted(todo.id)} 
                            className= {`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'}`}
                            >
                                {todo.completed ? 'terminado' : 'terminar'}
                            </button>
                    </h3>
                    <p className="card-text text-right">
                        {todo.description}
                    </p>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <button 
                            onClick={() => setTodoEdit(todo)}
                            className="btn btn-sm btn-outline-primary mr-2"
                        >
                            Editar
                        </button>
                        <button 
                            onClick={() => todoDelete(todo.id)}
                            className="btn btn-sm btn-outline-danger "
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
    )

    Todo.prototypes = {
        todo: PropTypes.string.isRequired,
        todoDelete: PropTypes.func.isRequired,
        todoToogleCompleted: PropTypes.func.isRequired,
        setTodoEdit: PropTypes.func.isRequired
    }

    Todo.defaultProps = {
        todo: "",
        todoDelete: () => {},
        todoToogleCompleted: () => {},
        setTodoEdit: () => {}
    }

export default Todo;