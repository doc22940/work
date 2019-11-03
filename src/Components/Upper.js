import React from 'react';
import Mid from './Mid';



const Upper = (props) => {
        return ( 


            <div id="upper_profile">


<input type="checkbox" name="check1" id="switch"  checked={props.check1}  onChange={props.handleMe}/>

<label for="switch">Toggle</label>

              {/*
                        <div id="bg-bg"></div>
            <div id="bg-bg2"></div>
            <div id="bg-bg3"></div>
            
            */}    


            <div 
                  id="floating_profile" 
                  className="inner_conainer_profile" 
                  style={props.check1===true?{
                      
                        background:"#020202"
                        
                        
                  }:{}}
                  
            >



                  <div className="circle "> 
                  
                   <div id="bg-bg"></div>
                   
                   
                    </div>

                  <div className="float_item_profile "> <h1 className="main_text">Ammar Halees</h1></div>
                  <div className="float_item_profile "> <h3 className=
                
                {props.check1===true?
                      
                
                 "secondary_text_darktheme"  
                        
                  :
                  
                   "secondary_text"
            
                  }
                  
                  >Front-end Engineer</h3> </div>

                  <div id="description_profilepage" className=
                  
                  {props.check1===true?
                      
                
                        "float_item_profile desc_darktheme"  
                               
                         :
                         
                          "float_item_profile"
                   
                         }
                  
                  
                 
                  
                  >
                        
                        Front-end Dev. @erabia <br/>React, Redux, Node. <br/> Based in Jordan

                  </div>

                  <div >
                        



                        <a 
                        // id="cv_link"
                         target="_blank" 
                         href="https://drive.google.com/file/d/1Edw6coP0-mtZAJfdQT6qzKkJZjozKUsD/view"
                         >


                        <button 
                        style={{

                                    border:"1px 7e7e7e solid",
                                    color:"#f50087",
                                    padding:'15px',
                                    borderRadius:"5px",
                                    width:"20%",
                                    fontSize:"1.2rem",

                        }}

                        // className="module"

                        // id="mybutton_cv"
                        
                        // style={props.check1===true?{
                      
                        //       background:"black",
                        //       color:"white"
                              
                              
                        // }:{}}
                        
                        
                        
                        >CV</button>


                        </a>


                     

                  
                  </div>


    

            </div>
{/* 
            <div id="bg-bg"></div>
            <div id="bg-bg2"></div> */}

            <Mid check1={props.check1}/>



      </div>


         );
}
 
export default Upper;