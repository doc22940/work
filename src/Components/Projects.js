import React from 'react';
import CustomCard from './CustomCard';

import data from '../Data/ProjectData'


const styleLight ={color:"black",fontSize:"bold"} 
const styleDark ={color:"white",fontSize:"bold"} 


const Projects = ({check1}) => {
        return ( 

<div style={{textAlign:"center"}}>

<div style={{paddingBottom:"10px",color:"rgba(0, 0, 0, 0.64)"}}>

<span style={check1 === true? styleDark:{...styleLight,fontStyle:"italic"}}>{`*Please Note* `}</span>
<span style={check1 === true? styleDark:styleLight}>These are old projects are somewhat old</span>
        

</div>

                <div id="lower_profile_3" >
        
       

                {
                        data.map(project=>{

                                return <CustomCard key={project.key}  check1={check1} project={project} />

                        })

                }
                    

                </div>

</div >



         );
}
 
export default Projects;