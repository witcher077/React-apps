import React from 'react';
import { useState } from 'react';
import ShowTask from './priority';
// import Priority from './priority';

const AddTask = () => {
    const [tasks, setTasks] = useState([{ task: "asd", Priority: "Urgent" }]);

    const [inputVal, setInputVal] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');

    const FormSubmit = (e) => {
        e.preventDefault()
        let errors = formValidation(inputVal, selected);
        console.log(errors);
        const isValid = Object.keys(errors).length === 0 ? true : false;
        if (isValid) {
            setTasks((prev) => [...prev, { task: inputVal, Priority: selected }])
            setSelected("");
            setInputVal("")
        }
        else {
            if (errors.input !== "") {
                alert(errors.input)
            }
            else {
                alert(errors.priority)
            }
        }
    }
    const handleChange = (e) => {
        setInputVal(e.target.value)
    }
    const deleteTsk = (id) => {
        console.log("delete");
        const fiteredtask = tasks.filter((ele, index) => index !== id);
        setTasks(...fiteredtask);
    }

    const formValidation = (inputVal, selected) => {
        let error = {}
        if (inputVal === "") {
            error.input = "Enter your task"
        }
        if (selected === "") {
            error.priority = "Select the priority"
        }
        return error;
    }

    return (
        <div>
            <form className='taskForm' onSubmit={FormSubmit}>
                <input placeholder='Enter Your Task' onChange={handleChange} value={inputVal} />
                <div className='dropdown'>
                    <button onClick={() => { setIsOpen(!isOpen) }}> {selected === "" ? "Priority" : selected} {isOpen ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>}</button>
                    {
                        isOpen && <ul>
                            <li onClick={() => { setSelected("less"); setIsOpen(!isOpen) }}>less priority</li>
                            <li onClick={() => { setSelected("Medium"); setIsOpen(!isOpen) }}>Medium Priority</li>
                            <li onClick={() => { setSelected("Urgent"); setIsOpen(!isOpen) }}>Urgent</li>
                        </ul>
                    }
                </div>
                <button class="addbtn" type='submit'>Add Task</button>
            </form>
            <ShowTask tasks={tasks} deleteTsk={deleteTsk} />
        </div>
    )
}

export default AddTask;