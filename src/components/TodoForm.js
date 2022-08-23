import React from "react";
import Proptypes from "prop-types"


const TodoForm = ({todoEdit,handleSubmit,handleInputChange,cancel,description,title,error,successMessage}) => (
        <div>
            <h1>{todoEdit ? 'Editar Tarea' : 'Nueva Tarea'}</h1>
            { todoEdit &&
                <button 
                    onClick={cancel}
                    className="btm btn-warning mb-2"
                 >  Cancelar Editar Tarea
                 </button>
            }
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder="titulo" 
                    className="form-control"
                    onChange={handleInputChange}
                    value={title}
                    name='title'
                />
                <textarea 
                    placeholder="descripcion" 
                    className="form-control mt-2"
                    onChange={handleInputChange}
                    value={description}
                    name='description'
                ></textarea>
                <button 
                    className="btn btn-primary mt-2"
                >
                    {todoEdit ? 'Actualizar Tarea': 'Agregar Tarea'}
                </button>
            </form>
            {  error &&
                
                <div className="alert alert-danger mt-2">
                    {error}
                </div>
            
            }
            { successMessage &&
                    <div className="alert alert-success mt-2">
                        {successMessage}
                    </div> 
            
            }
        </div>
    
)

TodoForm.prototypes = {
    todoEdit: Proptypes.object.isRequired,
    handleSubmit: Proptypes.func.isRequired,
    handleInputChange: Proptypes.func.isRequired,
    cancel: Proptypes.func.isRequired,
    description: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    error: Proptypes.object.isRequired,
    successMessage: Proptypes.object.isRequired
}

TodoForm.defaultProps = {
    todoEdit: {},
    handleSubmit: () => {},
    handleInputChange: () => {},
    cancel: () => {},
    description: "",
    title: "",
    error: {},
    successMessage: {}
}

export default TodoForm;