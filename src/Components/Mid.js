import React from 'react';
import SocialData from '../Data/SocialData';
import SocialDataDark from '../Data/SocialDataDark';


const Mid = (props) => {
        return ( 


                <div id="mid_profile" className="sections_profile  "> 
                              
                      {

                        (props.check1 ===true?SocialData:SocialDataDark)

                        .map(media=>{

                                return <a  target="_blank" href={media.link}>


                                        <img className={`social_circle_link ${media.title}`} src={media.image} />
                             

                                </a>


                        })

                      }

          </div>

         );
}
 
export default Mid;