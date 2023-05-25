import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Student from './Student'
import axios from 'axios'

const Add = () => {

  
  var [datas,setDatas] = useState({sname:'',sgrade:''}) 
  
  const inputHandler = (e) => 

  {
    const {name,value} = e.target  
   
    setDatas((datas)=>({...datas,[name]:value}))
   
    
    console.log(datas)

  }
  const addValues = () =>{
    console.log("Clicked")
    axios.post("http://localhost:8080/create",datas) 
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
      

      
      <h1>Grade:<TextField id="filled-basic" name='sgrade' value={datas.sgrade} label="Enter Grade" variant="filled" onChange={inputHandler}/></h1> <br />
      <Button variant="contained" color="success" onClick={addValues} >Submit</Button>
      
      

    </div>
  )
}

export default Add