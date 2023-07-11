import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import { useState } from 'react';
import axios from 'axios';



function ViewOperator() {


    const [operatorData, setOperatorData] = useState([]);
    const [id, setId] = useState("");

    const getoperatorData = () => {
        
        axios.get(`http://localhost:4000/operatordetails/${id}`)
            .then((getData) => {
                setOperatorData(getData.data);
            })
    }
    return (
        <>
            
            <div id='viewoperatordetails' className='mt-5 ms-5'>
                            <div className='text-center' style={{ color: '#8DCAC6' }}>
                                
                            
                                <b className=' mt-2 display-2'> VIEW OPERATOR DETAILS</b>
                        
                            </div>

                            <div className='mt-5 ms-5'>
                            <input type='number' onChange={e => setId(e.target.value)} />
                            <button
                                                           
                                    onClick={getoperatorData}
                                    className='btn'
                                >
                                        get by id
                                </button>
                           </div>
                                            <TableContainer component={Paper} className='container mt-5'>
                                            <Table
                                                sx={{ minWidth: 650 }}
                                                aria-label="simple table">
                                                            <TableHead>
                                                    <TableRow> 
                                                                <TableCell align="center">ID</TableCell>
                                                                <TableCell align="center">First Name</TableCell>
                                                                <TableCell align="center">Last Name</TableCell>
                                                                <TableCell align="center">Date Of Birth</TableCell>
                                                                <TableCell align="center">Mobil Number</TableCell>
                                                                <TableCell align="center">E-Mail</TableCell>
                                                                <TableCell align="center">Date Of Joining</TableCell>
                                                    
                                                                </TableRow>
                                                            </TableHead>  
                                                    <TableBody>
                                                    {operatorData.map((operatorData) => {
                                                                    
                                                        return (
                                                            <TableRow   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                                <TableCell
                                                                    align="center"
                                                                    key={operatorData.id}
                                                                                
                                                                >
                                                                    {operatorData.id}

                                                                    
                                                                
                                                                                
                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                
                                                                                    
                                                                    {operatorData.first_name}
                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                    
                                                                    {operatorData.last_name}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                    
                                                                    {operatorData.date_of_birth}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                    
                                                                    {operatorData.mob_num}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                    
                                                                    {operatorData.email}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                    
                                                                    {operatorData.date_of_joining}

                                                                                    
                                                                </TableCell>
                                                            
                                                            </TableRow>
                                
                                                        )
                                                                
                                                                
                                                    })} 
                                                </TableBody>
                                            
                                                        </Table>
                                        </TableContainer>
                                    
                            
            
       
               </div>
            
        </>
    )
}

export default ViewOperator