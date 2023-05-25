import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Student from './Student'
import axios from 'axios'

const Add = () => {

  
  var [datas,setDatas] = useState({sname:'',sgrade:''}) //Name of each textfield
  

  const inputHandler = (e) =>

  {
    const {name,value} = e.target
     //Input box type in target, ee name ulladath value save in setDatas
    setDatas((datas)=>({...datas,[name]:value})) //Datas multiple, onn add matteth povilla
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
      
      <h1>Name:<TextField id="filled-basic" name='namev' value={datas.sname} namelabel="Enter Name" variant="filled" onChange={inputHandler}/></h1> <br />
      <h1>Grade:<TextField id="filled-basic" name='namev' value={datas.sgrade} label="Enter Grade" variant="filled" onChange={inputHandler}/></h1> <br />
      <Button variant="contained" color="success" onClick={addValues} >Submit</Button>
      
      

    </div>
  )
}

export default Add