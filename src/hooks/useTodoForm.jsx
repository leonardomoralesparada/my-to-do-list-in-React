import { useEffect, useState } from "react";
import {
    ADD_SUCCESSFULLY,
    INDICATE_DESCRIPTION,
    INDICATE_TITLE,
    UPDATE_SUCCESSFULLY
} from '../utils/constants'


const initialFormValues = {
    title:'',
    description:''
}

const useTodoForm = ({todoAdd, todoEdit, todoUpdate, setTodoEdit}) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const {title,description} = formValues;
    const [error,setError] = useState(null)
    const [successMessage,setSuccessMessage] = useState(null)

    useEffect(() => {
        if(todoEdit){
            setFormValues(todoEdit)
        }else{
            setFormValues(initialFormValues)
        }
    },[todoEdit])

    const handleInputChange = (e) => {

        const changeFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        }

        setFormValues(changeFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(title.trim() === ''){
            setError(INDICATE_TITLE)
            return;
        }

        if(description.trim() === ''){
            setError(INDICATE_DESCRIPTION)
            return;
        }

        if(todoEdit){
            //actualizando
            todoUpdate(formValues)
            setSuccessMessage(UPDATE_SUCCESSFULLY)
        }else{
            todoAdd(formValues)
            setSuccessMessage(ADD_SUCCESSFULLY)
            setFormValues(initialFormValues)
        }
        
        setError(null)

        setTimeout(() => {
            setSuccessMessage(null)
        },2000);

    }

    const cancel = () => {
        setTodoEdit(null)
    }

    return{
        title,
        description,
        error,
        successMessage,
        cancel,
        handleSubmit,
        handleInputChange
    }
}

export default useTodoForm;