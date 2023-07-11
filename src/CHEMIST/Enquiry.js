
import { TextField } from "@mui/material"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function EnquiryProcess() {
    

    const [ProductName, setEmail] = useState("");

    const [ProductQuantity, setPassword] = useState("");
    
    const [ProductPhoto, setUsertype] = useState("");
    
   
    
    const navigate = useNavigate();


    const postData = () => {
        axios.post(`http://localhost:4000/chemist_enquiry`,
            {
                ProductName, ProductQuantity, ProductPhoto,
            }).then(() => {
                alert("Enquiry Sended Successfully")
            }).then(() => {
                navigate('/chemist')
            })
    }

    const onChangeHandler = (fieldName, value) => {
           
                
        if (fieldName === "pname") {
            setEmail(value);
            
         }else if (fieldName === "pquantity") {
            setPassword(value);
            
         }else if (fieldName === "pphoto") {
             setUsertype(value);
         }
    }

    return (
        < >
            <div id="ProductsEnquiry"  className="mt-5">
            <div
                
                className="mt-5 d-flex justify-content-center container"
                
            >
                <div className="row">
                    <div className="col-sm-6">
                    <TextField
                    id="outlined-basic"
                    label="Product Name"
                                variant="outlined"
                                onChange={(e) => { onChangeHandler("pname", e.target.value) }}        />
                    </div>

                    <div className="col-sm-6">
                    <TextField
                    id="outlined-basic"
                    label="Product Quantity"
                                variant="outlined"
                                onChange={(e) => { onChangeHandler("pquantity", e.target.value) }}
                    
                   />                    
                    </div>
                  

                </div>

            </div>

            <div
                className="h5 mt-5 d-flex justify-content-center container"
                
                    style={{
                        border: "1px solid grey",
                        borderRadius: "5px",
                        width: '23rem',
                        height:"4rem"
                    }}>
                    <div className="mt-2">
                    Product Photo:
                    <input type="file"
                            className=""
                            onChange={(e) => { onChangeHandler("pphoto", e.target.value) }}
                    />
                </div>
                
                
            </div> 
            <div className="d-flex justify-content-center">
                    <button className=" btn p-3 m-3"
                    onClick={postData}>
                Send                
            </button>

            </div>

            </div>
            
            

            
            
            

          
                
            
        </>
    )
}

export default EnquiryProcess