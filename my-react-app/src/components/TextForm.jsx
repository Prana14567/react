import React,{useState} from 'react'

export default function TextForm(props) {
const handleClick=()=>{
    let newName=name.toUpperCase();
setName(newName);
}
const handleChange=()=>{
setName(event.target.value);
}

    const [name,setName]=useState('ente the textanme');
    
  return (
    
    <div>
    <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
    <textarea value={name}className="form-control"onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button className='btn btn-primary'onClick={handleClick}>covert to uppercase</button>
  <div className="container my-2 ">
    <h1>here is my paragraph
    </h1>
    <p>{name.split(" ").length} and {name.length}</p>
    <p>{0.008 * name.split(" ").length} minutes to read</p>
  </div>
  </div>
  
  );
}