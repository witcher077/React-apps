import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'

function ShowTask({ tasks,deleteTsk }) {

    return (
        <div className='taskList'>
            <ul class="gradient-list">
                {tasks?.length !== 0 && tasks?.map((ele, index) => {
                    return (
                        <li key={index} className={`${ele.Priority === "less" ? "green" : ""} ${ele.Priority === "Urgent" ? "red" : ""} ${ele.Priority === "Medium" ? "yellow" : ""}`}>
                            {ele.task}
                            <div>
                                <span>{ele.Priority}</span>
                                <button><i class="fas fa-edit"></i></button><button onClick={()=>deleteTsk(index)}><i class="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    );
}

export default ShowTask;