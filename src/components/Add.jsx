import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Student from './Student'
import axios from 'axios'

const Add = () => {

  
  var [datas,setDatas] = useState({sname:'',sgrade:''}) //Name of each textfield
  //Datas expected values in database, --sname-- obtained from event.target.name --sgrade-- from event.target.name of another text field

  //Input changes in both textfield "datas changes"(According to database schema) and value is posted to the database when button clicks through create api
  

  const inputHandler = (e) => //Extract name and value from event target at a time

  {
    const {name,value} = e.target //To  differentiate input fields, name is now e.target.name
   
    setDatas((datas)=>({...datas,[name]:value}))
    //[] only one name at a time, datas changwe according to database schema
    console.log(datas)

  }
  const addValues = () =>{
    console.log("Clicked")
    axios.post("http://localhost:8080/create",datas) // Axios instead of express, backend express
    .then((response)=>{
      console.log("data",response.data)
      alert("Successfully added data!")
    })
    .catch(err=>console.log(err))
  }

 



  return (
    <div style={{paddingTop:"100px"}}>
      
      <h1>Name:<TextField id="filled-basic" name='sname' value={datas.sname} namelabel="Enter Name" variant="filled" onChange={inputHandler}/></h1>
       <br />
       {/* //name means name of input field and value is value entered by user */}
       {/* Why value={data.sname}?? */}
      <h1>Grade:<TextField id="filled-basic" name='sgrade' value={datas.sgrade} label="Enter Grade" variant="filled" onChange={inputHandler}/></h1> <br />
      <Button variant="contained" color="success" onClick={addValues} >Submit</Button>
      
      

    </div>
  )
}

export default Add