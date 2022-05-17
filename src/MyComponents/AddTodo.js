import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {

 const [title, setTitle]= useState("");
 const [desc, setDesc]= useState("");

 const submit=(e)=>{
   e.preventDefault();
   if(!title || !desc){
     alert("Title and Description is necessary!");
   }

   else{

    addTodo(title, desc);
    setTitle("");
    setDesc("");
   }
   

 }

  return (
  <div className="container my-2">
      <h3>Add Todo List</h3>
    <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" className="form-control"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" className="form-control"></textarea>
  </div>
  <button type="submit" className="btn btn-success btn-sm">Submit</button>
     </form>
   </div>
  )
}

export default AddTodo
