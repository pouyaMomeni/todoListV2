import React from "react";
import Stage from "./stage"
import Footer from "./footer"
import '../style/style.css'
const TodoList = () => {
    return (
        <>
            <div id="body-total">
                <Stage />
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default TodoList;