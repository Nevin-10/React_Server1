import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Student = ({value}) => {
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
                    <TableRow>
                        {/* <TableCell>{value}</TableCell> */}
                    </TableRow>


                </TableBody>


            </Table>




        </TableContainer>



    </div>
  )
}

export default Student