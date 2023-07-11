import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import './Admin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

import { useState } from "react";



function AddOperatorDetails() {


    // const [email, setEmail] = useState("");

    // const [loginpassword, setPassword] = useState("");

    // const [usertype, setUsertype] = useState("");

    const [firstname, setFname] = useState("");

    const [lastname, setLname] = useState("");

    const [dob, setDOB] = useState("");

    const [mobnum, setMnum] = useState("");

    const [operatoremail, setopeEmail] = useState("");

    const [doj, setDOJ] = useState("");

    const navigate = useNavigate();

    const postOperatorData = () => {
        axios.post(`http://localhost:4000/Addoperatordetails`,
            {
                firstname,
                lastname,
                dob,
                mobnum,
                operatoremail,
                doj,
            }).then(() => {
                navigate('/admin')
            })
    }


    const onChangeHandlerConfrim = (fieldName, value) => {
           
                
        if (fieldName === "fname") {
            setFname(value);
            
         }else if (fieldName === "lname") {
            setLname(value);
            
         }else if (fieldName === "dob") {
             setDOB(value);
         }else if (fieldName === "mobnum") {
            setMnum(value);
        }else if (fieldName === "oprmail") {
            setopeEmail(value);
        }else if (fieldName === "doj") {
            setDOJ(value);
        }
    }


    return (
        <>
        <div id='AddOperatorDetails' className='mt-5 ms-5'>
        
        <div className='text-center mt-5 '  >

            <b className='display-1' id='texthighlight' style={{color:'#8DCAC6'}} >
            OPERATOR DETAILS
            </b>
        </div>

        <div className=' d-flex justify-content-center ' >
                <Box
                sx={{
                    height: 400,
                    width:500,
                        maxHeight: { xs: 900, md: 867 },
                        maxWidth: { xs: 350, md: 550 },
                   
                        
                    }}
                
            >
                <div className='row'>
                    <div className='col-sm-6'>
                    <TextField
                    id="input-with-icon-textfield"
                    label="First Name"
                    variant="standard"
                    className='ms-5 '
                    type='text'
                    value={firstname}
                    onChange={(e) => { onChangeHandlerConfrim("fname", e.target.value) }}
                        />
                        <label className='ms-5 mt-3'>
                            Date Of Birth:
                            <TextField
                    id="input-with-icon-textfield"
                    // label="Date of Birth "
                    
                    variant="standard"
                    className='ms-5 mt-3 '
                    type='date'
                    value={dob}
                    onChange={(e) => { onChangeHandlerConfrim("dob", e.target.value) }}
                        />
                        </label>
                        
                         <TextField
                            id="input-with-icon-textfield"
                            label="E-Mail"
                            variant="standard"
                            className='ms-5 mt-3'
                            type='text'
                            value={operatoremail}
                            onChange={(e) => { onChangeHandlerConfrim("oprmail", e.target.value) }}
                        />

                    </div>
                    <div className='col-sm-6'>
                    <TextField
                    id="input-with-icon-textfield"
                    label="Last Name"
                    variant="standard"
                    className='ms-5 '
                    type='text'
                    value={lastname}
                    onChange={(e) => { onChangeHandlerConfrim("lname", e.target.value) }}
                        />
                        <TextField
                id="input-with-icon-textfield"
                label="Mobile Number"
                variant="standard"
                className='ms-5 mt-3'
                    type='number'
                    value={mobnum}
                    onChange={(e) => { onChangeHandlerConfrim("mobnum", e.target.value) }}
                        />
                        <label className='ms-5 mt-3'>
                            Date of Joining:
                            <TextField
                                id="input-with-icon-textfield"
                                // label="Joining Date"
                                variant="standard"
                                className='ms-5 mt-3'
                                type='date'
                                value={doj}
                                onChange={(e) => { onChangeHandlerConfrim("doj", e.target.value) }}
                            />
                        </label>
                       
                    </div>
                    <div className='text-center mt-5'>
                        <button onClick={postOperatorData}>CONFRIM</button>
                    </div>   
                    
                </div>
               
                 
                                     
                </Box>
        </div>
        
        
                </div>
        </>
    )
}

export default AddOperatorDetails