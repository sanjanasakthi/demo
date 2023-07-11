import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, colors } from '@mui/material';
import './Admin.css'
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Grid from '@mui/material/Grid';
import { useState } from 'react';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';

import MainLogo from '../Images/MainLogo.png'
import { useNavigate } from 'react-router-dom';
import DashBoard from './DashBoard';
import AddOperatorDetails from './AddOperatorDetails';
import ViewOperator from './ViewOperator';
import AddOperator from './AddOperator';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminNavigationBar from './AdminNavBar';



function Admin() {

    
    const navigate = useNavigate();

    
    axios.get(`http://localhost:4000/astitvasignup`)
    .then((getData) => {
        setChemistCount(getData.data);
    })

    axios.get(`http://localhost:4000/userlogin`)
    .then((getData) => {
        setOperatorCount(getData.data);
    })

    const [ChemistCount, setChemistCount] = useState([]);

const [OperatorCount, setOperatorCount] = useState([]);



  

    // const [Dashboard, setDashboard] = useState(true)

    // const [operatotbtn, setoperatotbtn] = useState(true)

    // const [viewoperatorbtn, setviewoperatorbtn] = useState(true)

    // const [addoperatotbtn, setaddoperatotbtn] = useState(true)


    return (
        <>
            <div id='Adminnav' className='mt-3' >

                <AdminNavigationBar/>

                {/* <Box  >
                    <AppBar
                        position="static"
                        sx={{ backgroundColor: 'white', color: '#8DCAC6' }}
                            className='container-fluid p- '>
                            
                            <div className='row'>

                            <div className='col-sm-4'>
                            <div >
                                        <button className='btn'>
                                        <img src={MainLogo} alt="Avatar" className="Loginavatar" onClick={() => navigate("/")} />
                                    </button>
                                    <span    className=' mt-2  h3' >
                                        WELCOME ADMIN
                                    </span>
                                    </div>
                                </div>
                                <div className='col-sm-8'>
                                <div className='row'>
                                <div className='col-sm-2'>
                                        <div className='mt-5'>
                                            
                                            <a href='#DASHBOADRD'> 
                                                   
                                            <b className='h9  fw-bolder'> DASHBOADRD</b>
                                            </a>

                                           

                                            
                                    </div>
                                </div>

                                <div className='col-sm-2 ms-3'>
                                        <div className='mt-5'>

                                        <a href='#ADDOPERATORDETAILS'> 
                                                   
                                                   <b className='h9  fw-bolder'> ADD OPERATOR DETAILS</b>
                                        </a>
                                            
                                      
                                    </div>
                                </div>

                                <div className='col-sm-2 ms-5'>
                                    
                                        <div className='mt-5'>
                                            

                                        <a href='#VIEWOPERATOR'> 
                                                   
                                                   <b className='h9  fw-bolder'> VIEW OPERATOR DETAILS</b>
                                                   </a>
                                          
                                    </div>
                                </div>

                                <div className='col-sm-2 ms-5'>
                                        <div className='mt-5 '>

                                        <a href='#ADDOPERATOR'> 
                                                   
                                                   <b className='h9  fw-bolder'> ADD OPERATOR</b>
                                                   </a>
                                            
                                          
                                    </div>
                                    </div>
                                    
                                    <div className='col-sm-2 mt-5 ms-5'>
                                        <button onClick={() => navigate("/login")} className='btn'>
                                            <span>
                                                LOGOUT <LogoutIcon/>
                                           </span>
                                           </button>
                                    </div>
                                
                            </div>
                               
                                    </div>

                            </div>
                        </AppBar>
                    </Box> */}
            </div>


            <div className='mt-5'>
                <div id='DASHBOADRD' className='mt-5'>
                    {/* {Dashboard && ( */}
                    <div id='dashboard' >
                        <div className='text-center' style={{color:'#8DCAC6'}}>
                            <b className=' mt-2 display-1'> DASHBOARD</b>
                        </div>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className=''>
                                        <Grid item xs={4} className='d-flex justify-content-center'>
                                        <Card sx={{ maxWidth: 345 }} className=''>
                                            <div  className=' d-flex justify-content-center'>
                                            <PersonIcon                               
                                                sx={{
                                                    fontSize: 200,
                                                    color: '#8DCAC6',
                                                    justifyItems:"center"
                                                }} />
                                            </div>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                     OPERATOR
                                </Typography>
                                <Typography variant="h5" color="text.secondary" className='text-center'>
                                   {OperatorCount.length}
                                </Typography>
                            </CardContent>
                                   
                            </Card>

                    </Grid>

                    <Grid item xs={4} className='d-flex justify-content-center '>
                        <Card sx={{ maxWidth: 345 }}>
                            <div  className=' d-flex justify-content-center'>
                            <PersonIcon                               
                                sx={{
                                    fontSize: 200,
                                    color: '#8DCAC6',
                                    justifyItems:"center"
                                }} />
                            </div>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                     CHEMIST
                                </Typography>
                                <Typography variant="h5" color="text.secondary" className='text-center'>
                                {ChemistCount.length}
                                </Typography>
                            </CardContent>
                                   
                            </Card>

                    </Grid>

                    <Grid item xs={4} className='d-flex justify-content-center '>
                        <Card sx={{ maxWidth: 345 }}>
                            <div  className=' d-flex justify-content-center'>
                            <PersonIcon                               
                                sx={{
                                    fontSize: 200,
                                    color: '#8DCAC6',
                                    justifyItems:"center"
                                }} />
                            </div>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                     PAYMENT
                                </Typography>
                                <Typography variant="h5" color="text.secondary" className='text-center'>
                                    10
                                </Typography>
                            </CardContent>
                                  
                            </Card>

                    </Grid>
                    

                      
                        
                </Grid>

                
                

            </div>
            
        
                    {/* )} */}
                </div>

                <div id='ADDOPERATORDETAILS'>
                    {/* {operatotbtn && ( */}
                        <AddOperatorDetails />
        
                    {/* )} */}
                </div>

                <div id='VIEWOPERATOR'>
                    {/* {viewoperatorbtn && ( */}
                        <ViewOperator />
        
                    {/* )} */}
                </div>

                <div id='ADDOPERATOR'>
                    {/* {addoperatotbtn && ( */}
                        <AddOperator />
        
                    {/* )} */}
                </div>
            </div>

        </>
    )
}

export default Admin;