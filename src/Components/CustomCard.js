import React from 'react';

const CustomCard = (props) => {
        return (

                <div className="custom_card">
                       

                        <img src={props.project.image}/>

                         <h1>
                                {props.project.title}
                        </h1>

                        <h3>
                        {props.project.description}

                        </h3>
                        <div id="techused">
                               
                                        
                                       

                        </div>

                        <div id="midlower_profile" class="sections_profile inner_conainer_profile "> 
                              

                <div className="texts_mid_profile"><a target="_blank" id="bot_links" href={props.project.linktosource}>Source Code</a></div>
                <div className="texts_mid_profile">|</div>
                <div className="texts_mid_profile"><a target="_blank" id="bot_links" href={props.project.linktodemo}>Demo</a></div>


          </div>

                </div>


          );
}
 
export default CustomCard;