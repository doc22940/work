import React from 'react';

const CustomCard = (props) => {
        return (

                <div className=
                
                {props.check1===true?
                      
                
                        "custom_card custom_darktheme"  
                               
                         :
                         
                          "custom_card"
                   
                         }
                
                
                
                
                
                >
                       
                

                         <h1>
                                {props.project.title}
                        </h1>

                        <h3>
                        {props.project.description}

                        </h3>
                                
                        <img src={props.project.image}/>

                     
                { /*            
                            <div id="techused">               
                        {props.project.techused.map(tech=>{

                                return (<span className="tech_used">{tech}</span>)

                        })}   

                        </div>
                
                */}

                        <div id="midlower_profile" class="sections_profile inner_conainer_profile "> 
                              

                <div className="texts_mid_profile"><a target="_blank" id="bot_links" href={props.project.linktosource}>Code</a></div>
                <div className="texts_mid_profile">|</div>
                <div className="texts_mid_profile"><a target="_blank" id="bot_links" href={props.project.linktodemo}>Demo</a></div>


          </div>

                </div>


          );
}
 
export default CustomCard;