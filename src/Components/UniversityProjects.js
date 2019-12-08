import React from 'react';
import CustomCard2 from './CustomCard2';
import OtherData from '../Data/OtherData';


const styleLight ={color:"black",fontSize:"bold"} 
const styleDark ={color:"white",fontSize:"bold"} 

const UniversityProjects = ({check1}) => {
        return (

<div style={{textAlign:"center"}}>

<div style={{paddingBottom:"10px",color:"rgba(0, 0, 0, 0.64)"}}>

<span style={check1 === true? styleDark:styleLight}>Most Significant Projects as an Electronics Engineering Student</span>


</div>
                <div id="lower_profile_3" >


                        {
                                OtherData.map(article => {

                                        return <CustomCard2 check1={check1} article={article} word = "Project" />

                                })

                        }


</div>

                        
                </div>
        );
}

export default UniversityProjects;