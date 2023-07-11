import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import { useState } from "react";
import './Operator.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import cn from 'classnames';
// import classNames from 'classnames';



function ApprovedData() {


    
    const [APIData, setAPIData] = useState([]);

 const getidData = () => {
        
        axios.get(`http://localhost:4000/approvechemist`)
            .then((getidData) => {
                setAPIData(getidData.data);
            })
    }




    return (
        <>
            
            <div style={{backgroundColor:'#8DCAC6'}} >
            <div className=' mt-5'>
          
             <button
                                                          
                  onClick={getidData}
                  className='btn display-1 mt-5 button'
              >
                  GET DATA
              </button>
          
     </div>
     
     
     
      <TableContainer component={Paper} className=' mt-5'>
          <Table
            //   sx={{ minWidth: 650 }}
              aria-label="simple table">
              <TableHead id="sethead">
                  
                  <TableRow> 
                      
                      <TableCell align="center">ID</TableCell>
                      <TableCell align="center">Pharamacy Name</TableCell>
                      <TableCell align="center">First Name</TableCell>
                      <TableCell align="center">Last Name</TableCell>
                      <TableCell align="center">Door Number</TableCell>
                      <TableCell align="center">Street</TableCell>
                      <TableCell align="center">Area</TableCell>
                      <TableCell align="center">City</TableCell>
                      <TableCell align="center">Pincode</TableCell>
                      <TableCell align="center">State</TableCell>
                      <TableCell align="center">Mobile Number</TableCell>
                      <TableCell align="center">Druglicence Number</TableCell>
                      <TableCell align="center">Chemist Photo</TableCell>
                      <TableCell align="center">Chemist Licence Photo</TableCell>
                      <TableCell align="center">Status</TableCell>

                    
                     
                  </TableRow>
                  
              </TableHead> 
              
              <TableBody>
                  
                  {APIData.map((data) => {
                                    
                      return (
                          <TableRow
                              
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                      
                              <TableCell
                                  align="center"
                                  key={data.id}
                                  
                                                
                              >
                                  {data.chemistid}
               
                              </TableCell>


                              <TableCell
                                  align="center"
                              >
                               {data.pharmacyname}
                                                    
                              </TableCell>


                              <TableCell
                                  align="center"
                                
                              >
                                  {data.firstname}  
                                  
                              </TableCell>

                              <TableCell>
                              {data.lastname} 
                              </TableCell>

                              <TableCell>
                              {data.doornum} 
                              </TableCell>

                              <TableCell>
                              {data.street} 
                              </TableCell>

                              <TableCell>
                              {data.area} 
                              </TableCell>

                              <TableCell>
                              {data.city} 
                              </TableCell>

                              <TableCell>
                              {data.pincode} 
                              </TableCell>


                              <TableCell>
                              {data.state} 
                              </TableCell>

                              <TableCell>
                              {data.mobilenumber} 
                              </TableCell>

                              <TableCell>
                              {data.email} 
                              </TableCell>

                              <TableCell>
                              {data.chemistphoto} 
                              </TableCell>

                              <TableCell>
                              {data.chemistlicencephoto} 
                              </TableCell>

                              <TableCell>
                              {data.status} 
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

export default ApprovedData;






{/* <TableCell>
                                        <button onClick={() => onDelete(data.id)}>Delete</button>
                                    </TableCell> */}
    