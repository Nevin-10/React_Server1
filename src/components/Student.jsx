import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const Student = () => {


    var [students,setStudents] = useState([])
    var [update,setUpdate] = useState(false)
    var [singleValue,setSingleValue] = useState()
   useEffect(() =>{

        axios.get("http://localhost:8080/see") //Here axios used as testing already done by postman, axios used in front end of http requests
        //Similar to postman and get together
        .then((response) =>{  //res.json(data) not going to postman but here
            setStudents(response.data);
            console.log(response.data);

        })
        .catch()
    
  },[])

  const theChange = (id) =>{
    // const {id} = e.target
  
    
    axios.delete(`http://localhost:8080/delete/${id}`) 
    .then((response)=>{
        console.log(response)
        alert("Deleted")
        window.location.reload(false)
        
    })
    .catch(err => {console.log(err)})

  }

  const updateValue = (val) =>{

    console.log(val) //Update value also need to go to update, not only id.
    //on clicking call add and put the datas in the add component

    setSingleValue(val)
    setUpdate(true) //When clicking update value changes to true
  }

//   const theUpdate = () => {
   


//   }

var finalJSX =  <div>
<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell style={{color:"red"}}>Name</TableCell>
                <TableCell style={{color:"darkblue"}}>Grade</TableCell>


            </TableRow>


        </TableHead>

        <TableBody>
            {students.map((val,index) => {

                return(

                   <TableRow key={index}>

                        <TableCell>{val.sname}</TableCell>
                        <TableCell>{val.sgrade}</TableCell>
                        {console.log(val._id)}
                        <TableCell><Button  onClick={()=>theChange(val._id)}>Delete</Button></TableCell>
                        {/* Not direct function call, call through passing parameters, Can't directly pass paramters as function call inside function so call back function */}
                        <TableCell><Button onClick={()=>updateValue(val)}>Update</Button></TableCell>
                    
                    
                    </TableRow>
                )


                
                })}

        </TableBody>


    </Table>




</TableContainer>



</div>





if(update){ 
    finalJSX = <Add  data = {singleValue} method = 'put' /> //Calling Add component, pass data and method singleValue 
    
}
  return (

    finalJSX

   
  )
}

export default Student