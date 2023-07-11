import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css'
import ASTITVALOGO from './Images/ASTITVALOGO.png'
import { IoMdLogIn } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import Font from 'react-font'
import Landingimg from './Images/Landingimg.png'
import Grid from '@mui/material/Grid';
// import { useState, useEffect } from 'react';



// import Toggle from 'react-toggle';
// import useMediaQuery from "react-responsive";
// import { useState, useEffect } from 'react';


//  darl mode start //
// const setDark = () => {

//     localStorage.setItem("theme", "dark");
  

//     document.documentElement.setAttribute("data-theme", "dark");
//   };
  
//   const setLight = () => {
//     localStorage.setItem("theme", "light");
//     document.documentElement.setAttribute("data-theme", "light");
// };
  
//   const storedTheme = localStorage.getItem("theme");
  
//   const prefersDark =
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches;
  
//   const defaultDark =
//     storedTheme === "dark" || (storedTheme === null && prefersDark);
  
//   if (defaultDark) {
//     setDark();
//   }
  

//   const toggleTheme = (e) => {
//     if (e.target.checked) {
//       setDark();
//     } else {
//       setLight();
//     }
//   };
 //  darl mode end // 

 
 const boxes = document.querySelectorAll('.box')
 window.addEventListener('scroll', checkBoxes)
 checkBoxes()
 function checkBoxes() {
 const triggerBottom = window.innerHeight /5 * 4
 boxes.forEach(box => {
 const boxTop = box.getBoundingClientRect().top
 if(boxTop < triggerBottom) {
 box.classList.add('show')
 } else {
 box.classList.remove('show')
 }
 })
 }
function App() {

    const navigate = useNavigate();

    // let header = document.getElementById('header');

    // document.addEventListener('scroll', function() {
    //     // Get scroll position
    //     let scrollPosition = window.pageYOffset;
    
    //     // Calculate whether the scroll it 350px or not then set the opacity to face the header out
    //     if (scrollPosition <= 350) {
    //         header.style.opacity = 1 - scrollPosition / 350;
    //     } else {
    //         header.style.opacity = 0;
    //     }
    
    // });



    // -----------------------------------
    // const [scrollY, setScrollY] = useState('');

    // // const [scrollY, setScrollY] = useState(0);
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     setScrollY(window.scrollY);
    //   };
    //   handleScroll();
    //   window.addEventListener("scroll", handleScroll);
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);
  
        //   <Grid ml={scrollY / 15} container mt={-5}>
        //     <Typography sx={hLarge}>hyge</Typography>
        //   </Grid>

    return (
        <>
            <div class="area" >
                    <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                    </ul>
           </div >

            
           
            <div className='context'>
                
                
            {/* <div class="progress"></div> */}
                <div id='Landingnav'>
                {/* <div class="header">
                    
                    <div class="progress-container">
                        <div class="progress-bar" id="myBar"></div>
                    </div>  
                    </div> */}
               

                <Box  >
                        <AppBar   position="static" sx={{backgroundColor: '#8DCAC6 '}} className='container-fluid '>
                            <Typography variant="h2"  className='text-center mt-2 SetTextColor' >
                                    WELCOME TO ASTITVA
                            </Typography>
                                
                                <span  className='text-end' >
                                <a href='#AboutUs' className='text-end h3 AboutUs'>
                                    ABOUT US
                                    </a>
                                    <a href='#ContactUs' className='text-end h3 ms-5 ContactUs'>
                                    CONTACT US
                                </a>
                                </span>
                        </AppBar>
                    </Box>
        </div>
                <div className='content'> 
                    
             
                
            <div id='MainContent'>
                   
            <Box 
                component="img"
                sx={{
                    height: 333,
                    width: 550,
                    maxHeight: { xs: 233, md: 267 },
                    maxWidth: { xs: 350, md: 550 },
                    }}
                alt="The house from the offer."
                src={ASTITVALOGO}
                className='mt-5 ms-5'
        />           
               <Button
                
                className='mt-5 ms-5'
                id='SetLoginBtnHov'
                sx={{
                    border: 2,
                    borderBlockStyle: 'solid',
                    borderColor: 'honeydew',
                    color: 'honeydew'

                }}
                onClick={() => navigate("/login")}
            >
                
                <b
                    className='h2'>
                    LOGIN
                    <IoMdLogIn className='ms-3 setIconColor'/>
                </b>  

            </Button>
                
            
           

            <div className='mt-5 text-end me-5'>
            <Button
                variant="outlined"
                    className=''
                    id='SetLoginBtnHov'
                    onClick={() => navigate("/sign-up")}
                    sx={{
                        border: 2,
                        borderBlockStyle: 'solid',
                        borderColor: 'honeydew',
                        color: 'honeydew'
                     
                    }}>
            <h2>New Chemist Sign-Up</h2> 
            </Button>
               </div>
                </div>
               
                
                
            <div id='AboutUs' className='' >


                        <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
                        <Grid item  xs={3} className=' ms-2 text-center d-none d-sm-block' columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                
                              
                                <Box 
                                    
                                    component="img"
                                    alt="The house from the offer."
                                    src={Landingimg}
                                    
                                    className='box'
                                           
                                />   

                              
                                
                            </Grid>
                        <Grid item xs={7}  className=' ms-3 text-center' columnSpacing={{ xs: 12, sm: 12, md: 3 }}>
                            
                            <Box 
                          className='mt-1 ms-1'
                            >
                                <Font family='Ultra'>
                            <p className='h1'>
                            WELCOME 
                            </p>
                            <p className='h1 text-center'>
                            TO 
                            </p>
                            <p className='h1 text-center'>
                            ASTITVA 
                        </p>
                        </Font>
                        <p className='mt-5 h4'>
                        It’s our goal to create a comfortable, safe environment,<br/> where we’ll work to achieve the goal together.<br/>

                           ASTITVA is one of India’s most trusted pharmacies,<br/>   dispensing quality medicines at reasonable prices
                            to over<br/> 7 million happy customers – PAN India. <br/>At ASTITVA, we help you look after your
                            own health effortlessly as well as take care of loved ones wherever they may reside in India.
                            You can buy and send medicines from any corner of the country - with just a few clicks of the mouse.
                        </p>

                            </Box>   
                            

                        
                   
                    </Grid>
                    
                           
               </Grid>
                
                
                
            </div>
          
            <div id='ContactUs' className='mt-5'>
                    <h1 className='display-1'>
                        CONTACT US
                   </h1>
                </div>
                </div>

            
            </div>
       
        </>
)

}

export default App;