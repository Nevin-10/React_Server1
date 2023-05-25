import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const Student = () => {


    var [students,setStudents] = useState([])
   useEffect(() =>{

        axios.get("http://localhost:8080/see") //Database location
        .then((response) =>{
            setStudents(response.data);
            console.log(response.data);

        })
        .catch()
    
  },[])

  const theChange = (e) =>{
    const {id} = e.target
  
    
    axios.delete(`http://localhost:8080/delete/${id}`) //Instead of postman, after testing using urls use axios, for fetching url
    .then((response)=>{
        console.log(response)
        window.location.reload()
    })
    .catch()

  }






  return (

    <div>
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
                                <TableCell><Button id={val._id} onClick={theChange}>Delete</Button></TableCell>
                                <TableCell><Button>Update</Button></TableCell>
                            
                            
                            </TableRow>
                        )


                        
                        })}

                </TableBody>


            </Table>




        </TableContainer>



    </div>
  )
}

export default Student