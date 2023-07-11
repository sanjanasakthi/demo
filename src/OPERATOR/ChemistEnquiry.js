import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import MainLogo from '../Images/MainLogo.png'
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import ChatBox from './Chatbox';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';






function ChemistEnquiry() {
    
    const [APIData, setAPIData] = useState([]);
    // const navigate = useNavigate();


    const getData = () => {
        
        axios.get(`http://localhost:4000/chemistenquiry`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const [enqId, setId] = useState("");
    // const [Enquirystatus, setStatuschange] = useState("");

    const navigate = useNavigate();

    // const updateAPIData = () => {



    //     axios.put(`http://localhost:4000/chemistenquiry/${enqId}`, 
    //         {
             
    //             Enquirystatus
            
    //         }).then(() => {
            
    //     })
    // }

    const [MessageBox, setMessageBox] = useState(false)

    const [StatusAvailabel, setStatusAvailabel] = useState("");



    const updateAvailabelStatus = () => {

      
       
        axios.put(`http://localhost:4000/availabel/${enqId}`, 
              {
                StatusAvailabel
               }).then(() => {
              alert("Done")
          })
  
          
     }

    
     const [NotAvailabelreason, setrejctreason] = useState("");
    const [NotAvailabelreasonrejstatus, setNotAvailabelreasonstatus] = useState("");
     const NotAvailabelReason = () => {
      

        axios.put(`http://localhost:4000/rejectreason/${enqId}`, 
            {
             
                NotAvailabelreason,
                NotAvailabelreasonrejstatus
            
        }).then(() => {
            navigate('/operator')
        })
    }

    const onChangeHandler = (fieldName, value) => {
        if (fieldName === "reason") {
            setrejctreason(value);
        } else {
            alert("Enter Reason")
        }

    }

 

    return (
        <>
           

            <div>

           
            <button
                onClick={getData}
                className='btn mt-5 ms-5'
                style={{backgroundColor:'#8DCAC6'}}
            >
              get data
                            
            </button>
                            
            </div>
           
            
            <div className=''>
                 <ChatBox/>
            </div>
            
            <TableContainer component={Paper} className='container mt-5'>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                        <TableRow> 
                            
                  
                            <TableCell align="center">set</TableCell>
                            
                            <TableCell align="center">ID</TableCell>
                            
                            <TableCell align="center">Product Name</TableCell>
                            
                            <TableCell align="center">Product Quantity</TableCell>
                            
                            <TableCell align="center">Product Photo</TableCell>

                            <TableCell align="center">Product Enquiry Date</TableCell>

                            <TableCell align="center">Status</TableCell>


                            {/* <TableCell align="center">Status</TableCell> */}
                            {/* <TableCell align="center">
                               ID <input type='number' onChange={e => setId(e.target.value)} />
                            </TableCell> */}
                                    </TableRow>
                                </TableHead>  
                        <TableBody>
                                        {APIData.map((APIData) => (
                                          
                                    <TableRow
                                    
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                
                                                <TableCell
                                                      align="center"
                                                      key={APIData.enqId}
                                                  
                                                  >
                                                   
                                                         <input type='checkbox' value={APIData.enq_product_id} onClick={e => setId(e.target.value)} />
                                                    
                                                   
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                      key={APIData.enqId}
                                                  
                                                  >
                                                      {APIData.enq_product_id}
                                                   
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                        
                                                  >
                                                              
                                                        {APIData.enq_product_name}
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                        
                                                >
                                                           {APIData.enq_product_quantity}
                                                           
                                                </TableCell>
                                                <TableCell
                                                      align="center"
                                                        
                                                >
                                                           {APIData.enq_product_photo}
                                                           
                                                </TableCell>
                                                <TableCell
                                                      align="center"
                                                        
                                                >
                                                    <Moment format="DD/MM/YYYY">
                                                        {APIData.enq_product_date}
                                                    </Moment>
                                                           
                                                           
                                                </TableCell>
                                                <TableCell
                                                      align="center"
                                                        
                                                >
                                                           {APIData.enq_status}
                                                           
                                                </TableCell>
                                                

                                    </TableRow>

                                    
                                    
                                 ))} 
                                </TableBody>
                            </Table>
            </TableContainer>
            
            <div className='container mt-5 d-flex justify-content-center mb-5'>
                                <button onClick={updateAvailabelStatus}>
                                    
                                    AVAILABEL
                                    
                                </button>

                                {MessageBox && (<div className='ms-5'>

                    <Card sx={{ minWidth: 275 }}>
                        <CardContent className='d-flex justify-content-center'>
                            
                            <textarea
                                onChange={(e) => { onChangeHandler("reason", e.target.value) }}
                            />
                            

                    </CardContent>
                    <CardActions className='d-flex justify-content-center'>
                            <button
                                onClick={NotAvailabelReason}
                                value={NotAvailabelreasonrejstatus}
                            >Send</button>
                            <button type='reset' >reset</button>
                    </CardActions>
                    </Card>





                    </div>)}

                    <button id='setstatus' className='ms-5' onClick={() => setMessageBox(!MessageBox)}>
                     NOT AVAILABEL
                    </button>
                
           </div>

        </>
    )
}

export default ChemistEnquiry