import React from 'react';

const CustomCard2 = (props) => {
        return (

                <div className="custom_card2">
                       

                        <img src={props.article.image}/>

                         <h1 className="article_title">
                                {props.article.title}
                        </h1>

                        <h3>
                        {props.article.description}

                        </h3>
                        <div id="techused">
                               
                                        
                                       

                        </div>

                        <div id="midlower_profile_2" class="sections_profile inner_conainer_profile "> 
                              

 <div></div>
                <div className="texts_mid_profile"><a target="_blank" id="bot_links" href={props.article.linktoarticle}>Link to Article</a></div>
                <div></div>

          </div>

                </div>


          );
}
 
export default CustomCard2;