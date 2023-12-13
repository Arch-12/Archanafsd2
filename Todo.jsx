
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

const Todo = () => {
    const [names, setNames] = useState();
    const [data, setData] = useState([]);

    const inputHandler = (e)=>{
        setNames(e.target.value)
    }

    const addHandler =()=>{
        setData((data=>[...data,names]))
        setNames("")
    }

  return (
    <div>
        <TextField variant='outlined' placeholder='Enter text' onChange={inputHandler}></TextField><br/><br/>
        <Button variant='contained' onClick={addHandler}>Submit</Button><br/><br/>
        
        {data.map((value,index)=>{
        return(
        <li>{value}</li>
    )})}
    </div>
  )
}

export default Todo

