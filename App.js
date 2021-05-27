
import './App.css';
import {Todos} from'./MyComponets/Todos';
import {Footer}from'./MyComponets/Footer';
import {AddTodo} from './MyComponets/AddTodo';
import React, { useState, } from 'react';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo =JSON.parse(localStorage.getItem("todos"));
  }


  const addTodo=(title,desc)=>{
    console.log("i am adding this todo",title,desc)
    let sno;
    if(todos.length == 0){
      sno=0;
    }
    else{
     sno = todos [todos.length-1].sno + 1;
  }
    
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  
  const [todos, setTodos] = useState(initTodo);
   
  
  return (
    <>
    <AddTodo addTodo={addTodo}/>
    <Todos  todos = {todos} />
    
    <Footer/>
    </>
    
    
    
  );

  }
export default App;
