import './chemist.css'
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import EnquiryProcess from './Enquiry';

function Chemist() {

    const navigate = useNavigate();


    return (
        <> 
            <div id="ChemistNavbar">

                <div className='row container'>
                    <div className='col-sm-3'>

                        <h1 className='display-3' >
                           Chemist
                        </h1>
                    </div>

                    <div className='col-sm-6 mt-4'>

                        <a href='#Enquiry' id='setcolorenq'  className='h4'>
                            
                            ENQUIRY
                        </a>
                    </div>
                    <div className='col-sm-3'>
                    <button onClick={() => navigate("/login")} className='btn'>
                                            <span>
                                                LOGOUT <LogoutIcon/>
                                           </span>
                                           </button>
                    </div>

                </div>

            </div>


            <div id='Enquiry'className='ms-5 mt-5'>

                <div id='setmt'>
                <EnquiryProcess />
              </div>

            </div>
            
        </>
    )
}

export default Chemist;