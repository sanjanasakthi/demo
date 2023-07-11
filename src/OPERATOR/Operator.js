import { Box, colors } from '@mui/material';
import './Operator.css'
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Grid from '@mui/material/Grid';
import { useState } from 'react';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import MainLogo from '../Images/MainLogo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import Verification from './ApprovedData';
import AddChemist from './AddChemist';
import ChemistEnquiry from './ChemistEnquiry';
import MessageIcon from '@mui/icons-material/Message';
import ApproveDelete from './Approve';
import OperatorNavigationBar from './OperatorNavBar';
import ApprovedData from './ApprovedData';
import Approve from './Approve';



function Operator() {



    const navigate = useNavigate();


    // const [APIData, setAPIData] = useState([]);

    
        
    //     axios.get(`http://localhost:4000/userlogin`)
    //         .then((getData) => {
    //             setAPIData(getData.data);
    //         })
    
    // const [username,setUserName]=useState(localStorage.getItem("loginusername"));
    



    const [ChemistView, setChemistView] = useState(true)
    const [Addchemist, setAddChemist] = useState(true)
    const [APPROVE, setAPPROVE] = useState(true)
    const [MessageBox, setMessageBox] = useState(false)


    return(
        <>
            
           
            

            <div id='Operatornav'>
            <OperatorNavigationBar />

            </div>
     
            
           


            <div id='ViewChemistDetails' className='mt-5 ms-5 container'>
               
               
                <div>
                    <div className='row mt-5' id='verifybtns'
                    >
                         <div className='col-sm-6 d-flex justify-content-center'>
                        <button
                        onClick={() => setAPPROVE(!APPROVE)} >
                       Approve
                    </button>
                   
                        </div>
                        <div className='col-sm-6 d-flex justify-content-center'>
                        <button
                        onClick={() => setChemistView(!ChemistView)} >
                        Chemist SignUp Details
                    </button>
                        </div>

                       

                    </div>
                </div>
                

                <div id='Approve' className='container'>
                {APPROVE && (
                <Approve />
                )}
                 
                </div>

               

                <div className='container'>
                {ChemistView && (
                <ApprovedData />
                )}
               </div>

                
             
                
                
            </div>
            
            <div id='AddChemistDetails' className='container'>
            <AddChemist />
            </div>

            <div id='ChemistEnquiry' className='text-center mt-5 container'>
                <h1 className='display-1'>
                    ENQUIRY
                </h1>
                <ChemistEnquiry/>
            </div>

        </>
    )
}
export default Operator;