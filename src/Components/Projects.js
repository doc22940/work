import React from 'react';
import CustomCard from './CustomCard';

import data from '../Data/ProjectData'


const Projects = (props) => {
        return ( 

<div style={{textAlign:"center"}}>

<div style={{paddingBottom:"10px",color:"rgba(0, 0, 0, 0.64)",fontStyle:"italic"}}>
<span style={{color:"black",fontSize:"bold"}}>{`*Please Note* `}</span>These are old projects are somewhat old

</div>

                <div id="lower_profile_3" >
        
       

                {
                        data.map(project=>{

                                return <CustomCard  check1={props.check1} project={project} />

                        })

                }
                    

                </div>

</div >



         );
}
 
export default Projects;