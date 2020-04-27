import React from 'react';
import SocialData from '../Data/SocialData';
import SocialDataDark from '../Data/SocialDataDark';
import Tooltip from '@material-ui/core/Tooltip';


const Mid = (props) => {
        return (


                <div id="mid_profile" className="sections_profile  ">

                        {

                                (props.check1 === true ? SocialData : SocialDataDark)

                                        .map(media => {

                                                return <a key={media.key} target="_blank" href={media.link}>

                                                        <Tooltip placement="top" title={media.title}>

                                                                <img className={`social_circle_link ${media.title}`} src={media.image} />

                                                        </Tooltip>
                                                </a>


                                        })

                        }

                </div>

        );
}

export default Mid;