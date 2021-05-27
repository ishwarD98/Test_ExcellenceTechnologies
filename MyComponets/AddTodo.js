import React, { useState } from 'react';
export const AddTodo=({addTodo})=>{
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    
    const submit=(e)=>{
      e.preventDefault();
      if(!title || !desc){
        alert("Title & Description Canot Be Blank")
      }
      addTodo(title,desc);

    }

    return(
        <div className="container my-3">
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Desc</label >
    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button type="submit" className="btn btn-success">Add Todo</button>
</form>
</div>
    )
}