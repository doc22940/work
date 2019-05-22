import React from 'react';
import SocialData from '../Data/SocialData';


const Mid = () => {
        return ( 


                <div id="mid_profile" className="sections_profile  "> 
                              
                      {

                        SocialData.map(media=>{

                                return <a  target="_blank" href={media.link}>


                                        <img className={`social_circle_link ${media.title}`} src={media.image} />
                             

                                </a>


                        })

                      }

          </div>

         );
}
 
export default Mid;