import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const [ispending,setIspending]=useState(false);
    const navigate=useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setIspending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            //console.log("blog added");
            navigate('/');
            setIspending(false);
            
        })
    }

    return (  
        <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label >Blog title: </label>
        <input 
        type="text" 
        required
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <label >Blog details: </label>
        <textarea 
        required
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        ></textarea>
        <label >Author: </label>
        <input 
        type="text" 
        required
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        />
        {!ispending && <button>Add Blog</button>}
        {ispending && <button disabled>Adding blog....</button>}
      </form>
    </div>
    );
}
 
export default Create;