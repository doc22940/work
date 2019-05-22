import React from 'react';
import CustomCard from './CustomCard';

import data from '../Data/ProjectData'


const Projects = (props) => {
        return ( 


                <div id="lower_profile_3" >

                {
                        data.map(project=>{

                                return <CustomCard  check1={props.check1} project={project} />

                        })

                }
                    

                </div>


         );
}
 
export default Projects;