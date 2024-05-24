import React, {useState} from "react";
import styles from "./ToDoList.module.css";

function ToDoList(){

    const [todo, setTodo] = useState(["Go to gym", "Eat Breakfast", "Study"]);
    const [newTask, setNewTask] = useState("");


    function makeChange(event){
        setNewTask(event.target.value);
    }

    function add(){
        if(newTask.trim() !== ""){
            setTodo( t => [...t, newTask])
            document.getElementById("to-do-list").value = "";
        }
        
    }

    function remove(index){
        setTodo(todo.filter((_, i) => i!==index))
    }

    function up(index){
        if(index > 0){
            const updatedTask = [...todo];
            [updatedTask[index], updatedTask[index - 1]] = 
            [updatedTask[index - 1], updatedTask[index]];
            setTodo(updatedTask);
        }
    }

    function down(index){
        if(index < todo.length - 1 ){
            const updatedTask = [...todo];
            [updatedTask[index], updatedTask[index + 1]] = 
            [updatedTask[index + 1], updatedTask[index]];
            setTodo(updatedTask);
        }
    }

    return(
    <>  
        <div className={styles.container}>
            
            <h1>To Do List</h1>

            <input type="text" id="to-do-list" placeholder="Enter Your Tasks" onChange={makeChange}/>
            <button className="add" onClick={add}>Add</button>

            <ol>
                {todo.map((list, index) => 
                <li key={index}>
                    <span>{list}</span>   
                    <button onClick={() => down(index)} className={styles.down}>👇</button>
                    <button onClick={() => up(index)} className={styles.up}>☝️</button>
                    <button onClick={() => remove(index)} className={styles.delete}>🗑️</button>
                </li>)}
            </ol>
        </div>
    </>
    );
}

export default ToDoList;