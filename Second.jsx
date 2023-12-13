import { Button } from '@mui/material'
import axios from 'axios';
import React from 'react'

const Second = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) =>{
        console.log(res.data);
        setUsers(res.data);
    })
    .catch((err=>console.log(err)))

  return (
    <div>
        <Button variant='contained'> click here</Button>
    </div>
  )
}

export default Second  