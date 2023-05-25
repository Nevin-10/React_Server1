import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Student = ({value}) => {


    var [students,setStudents] = useState([])
   useEffect(() =>{

        axios.get("http://localhost:8080/see") //Database location
        .then((response) =>{
            setStudents(response.data);
            console.log(response.data);

        })
        .catch()
    
  },[])






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