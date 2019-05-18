import React from 'react';

const CustomCard2 = (props) => {
        return (

                <div className="custom_card2">
                       

                        <img src={props.article.image}/>

                         <h1>
                                {props.article.title}
                        </h1>

                        <h3>
                        {props.article.description}

                        </h3>
                        <div id="techused">
                               
                                        
                                       

                        </div>

                        <div id="midlower_profile" class="sections_profile inner_conainer_profile "> 
                              

 
                <div className="texts_mid_profile"><a target="_blank" id="bot_links" href={props.article.linktoarticle}>Link</a></div>


          </div>

                </div>


          );
}
 
export default CustomCard2;