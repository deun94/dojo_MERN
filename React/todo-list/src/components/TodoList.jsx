import React, {useState} from 'react';
import "./TodoList.css"


const TodoList = () => {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    // //completed todos
    // const [todoDone, setTodoDone] = useState(false);

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        if (todo.length ===-0){
            return;
        }
        // //updating the list
        const todoItem = {
            text: todo, 
            complete : false
        }
        setTodoList([...todoList, todoItem])
        setTodo("");
    }

    const deleteTodo = (deleteIdx) => {
        const filteredTodoList = todoList.filter((todo, i)=>{
            return deleteIdx !== i;
        }) 
        setTodoList(filteredTodoList);
    }

    const updateTodo = (updateIdx) =>{

        let copyOfTodo = [...todoList]

        copyOfTodo[updateIdx].complete = !copyOfTodo[updateIdx].complete

        // if(todo.complete === true){
        //     todo.text
        // }

        setTodoList(copyOfTodo)
    } 

    return (
        <>
        <div>
            <form onSubmit = {(event) => {
                onSubmitHandler(event);
            }}>
                    <input onChange = {(event) => {
                        setTodo(event.target.value);
                    }} type = "text" value={todo}/>
                <input type = "submit" value ="Add Tasks" className = "btn btn-primary mt-3"></input>
            </form>
            <hr></hr>
{/* =========================show todos ===================*/}
            <h1>My Tasks</h1>
            {
                todoList.map((todo, i) => {

                    let todoClasses = ["italic"];

                    if(todo.complete){
                        todoClasses.push("line-through");
                    }

                    return (
                        <div key ={i} className = "">
                            
                            <input onChange = {()=>updateTodo(i)} type ="checkbox" checked ={todo.complete}></input>
                            <p className={todoClasses.join(" ")}>{todo.text}</p>
                            <button onClick ={()=>deleteTodo(i)} className ="btn-sm btn-danger">Done!</button>
                            <hr></hr>
                        </div>

                    )
                })
            }

        </div>
        </>
    )
}
export default TodoList