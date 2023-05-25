import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Student from './Student'

const Add = () => {

  var [val,setVal] = useState("")
  var [tabval,setTab] = useState("")

  const inputHandler = (event) =>

  {
  setVal(event.target.value)
  }

  const buttonChange = () =>
  {
    setTab(val)
    

    
  }



  return (
    <div>
      
      <h1>Name:<TextField id="filled-basic" label="Enter Name" variant="filled" onChange={inputHandler}/></h1> <br />
      <h1>Grade:<TextField id="filled-basic" label="Enter Grade" variant="filled" /></h1> <br />
      <Button variant="contained" color="success" onClick={buttonChange}>Submit</Button>
      
      

    </div>
  )
}

export default Add