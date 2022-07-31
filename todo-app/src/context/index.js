import React, { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyContext = React.createContext();

toast.configure()
class MyProvider extends Component {
    state = {
        stage: 1,
        todo_text: []
    }
    addLists = (text) => {
        this.setState((prevState) => ({
            todo_text: [
                ...prevState.todo_text,
                text
            ]
        }))
    }
    deletListHandeler = (i) => {
        let newA = this.state.todo_text;
        newA.splice(i, 1);
        this.setState({ todo_text: newA });
        toast.warning('Deleted !', { autoClose: 3000 })
    }
    countLiHandeler = () => {
        const lngth = this.state.todo_text.length;
        return lngth;
    }
    rest = () => {
        const a = [];
        this.setState({ todo_text: a });
    }
    render() {
        return (
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    addListHandeler: this.addLists,
                    deletList: this.deletListHandeler,
                    countLi: this.countLiHandeler,
                    resetHandeler: this.rest
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }
}
export { MyContext, MyProvider }
