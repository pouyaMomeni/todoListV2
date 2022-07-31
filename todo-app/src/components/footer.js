import React, { useContext } from "react";
import { MyContext } from "../context";
const Footer = () => {
    const context = useContext(MyContext);
    const lngth = context.countLi();
    const function_rest = () => {
        context.resetHandeler()
    }
    return (
        <>
            <p id="p-1">You have {lngth} Items</p>
            <button onClick={function_rest} id="but-2">Rest</button>
        </>
    )
}

export default Footer;