import React, { useContext, useRef } from "react";
import { MyContext } from "../context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const Stage = () => {
    const context = useContext(MyContext);
    const valuHandeler = useRef();
    const submitHandeler = (e) => {
        e.preventDefault();
        const value = valuHandeler.current.value;
        context.addListHandeler(value)
        valuHandeler.current.value = '';
        toast.success('Added !', { autoClose: 3000 })
    }
    return (
        <div >
            <h1>Todo List</h1>
            <input type='text' ref={valuHandeler} placeholder='Write here' id="input-1"></input>
            <button onClick={submitHandeler} id="but-1">+</button>
            <ul>
                {context.state.todo_text.map((list, index) => (
                    <li key={index}>
                        {list}
                        <button onClick={() => context.deletList(index)} id='but-li' className="fa fa-trash"></button>
                        <hr></hr>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Stage;