import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Form = () => {


    
    const [inputs,setInputs] = useState({Name:"",Designation:"",Location:"",Salary:""})
    const inputHandler = (e) => {
        const {name , value} = e.target
        setInputs((inputs) => ({
            ...inputs,
            [name]:value
        })) 
    }

  return (
    <div>

<br/>
        <br/>
            <Typography variant='h3'>Employee Form </Typography>


        <br/>
        <br/>
        <TextField label='Name' name={"Name"} value={inputs.Name} onChange={inputHandler}></TextField>
        <br/>
        <br/>
        <TextField label='Designation' name={"Designation"} value={inputs.Designation} onChange={inputHandler}></TextField>
        <br/>
        <br/>
        <TextField label='Location' name={"Location"} value={inputs.Location} onChange={inputHandler}></TextField>
        <br/>
        <br/>
        <TextField label='Salary' name={"Salary"} value={inputs.Salary} onChange={inputHandler}></TextField>

        <br/>
        <br/>
        <h2>{JSON.stringify(inputs)}</h2>

    </div>
  )
}

export default Form