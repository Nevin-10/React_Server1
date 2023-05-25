import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Student from './Student'

const Add = () => {

  var [val,setVal] = useState("")
  var [val1,setVal1] = useState("")
  var [tabval,setTab] = useState("")
  var [tabval1,setTab1] = useState("")

  const inputHandler1 = (event) =>

  {
  setVal(event.target.value)
  }
  const inputHandler2 = (event) =>

  {
  setVal1(event.target.value)
  }


  const buttonChange = () =>
  {
    setTab(val)
    setTab1(val1)
    console.log(tabval)
    console.log(tabval1)
    

    
  }



  return (
    <div>
      
      <h1>Name:<TextField id="filled-basic" label="Enter Name" variant="filled" onChange={inputHandler1}/></h1> <br />
      <h1>Grade:<TextField id="filled-basic" label="Enter Grade" variant="filled" onChange={inputHandler2}/></h1> <br />
      <Button variant="contained" color="success" onClick={buttonChange}>Submit</Button>
      
      

    </div>
  )
}

export default Add