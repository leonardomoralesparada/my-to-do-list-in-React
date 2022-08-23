import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodoForm from "./hooks/useTodoForm";
import useTodo from "./hooks/useTodo";


const App = () => {

  const {todoAdd,todoDelete,todoToogleCompleted,todoUpdate,setTodoEdit,todoEdit,todos} = useTodo();
  const {title,description,cancel,error,handleInputChange,handleSubmit,successMessage} = useTodoForm({todoAdd,todoEdit,todoUpdate,setTodoEdit});

  return(
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
         <TodoList
          todos={todos}
          todoDelete={todoDelete}
          todoToogleCompleted={todoToogleCompleted}
          setTodoEdit={setTodoEdit}
         />
        </div>
        <div className="col-4">
         <TodoForm
          todoAdd={todoAdd}
          todoEdit={todoEdit}
          todoUpdate={todoUpdate}
          setTodoEdit={setTodoEdit}
          title={title}
          description={description}
          cancel={cancel}
          error={error}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          successMessage={successMessage}
         />
        </div>
      </div>
    </div>
  )
}

export default App;