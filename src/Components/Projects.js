import React from 'react';
import CustomCard from './CustomCard';

import data from '../Data/ProjectData'


const Projects = () => {
        return ( 


                <div id="lower_profile_3" >

                {
                        data.map(project=>{

                                return <CustomCard project={project}/>

                        })

                }
                    

                </div>


         );
}
 
export default Projects;