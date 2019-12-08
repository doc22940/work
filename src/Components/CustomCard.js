import React from 'react';

const CustomCard = ({ project, check1 }) => {
        return (

                <div className={check1 === true ? "custom_card custom_darktheme" : "custom_card"} >

                        <h1> {project.title} </h1>

                        <h3> {project.description} </h3>

                        <img src={project.image} alt="project_image" />

                        <div id="midlower_profile" class="sections_profile inner_conainer_profile ">

                                <div className="texts_mid_profile"><a target="_blank" id="bot_links" href={project.linktosource}>Code</a></div>
                                <div className="texts_mid_profile">|</div>
                                <div className="texts_mid_profile"><a target="_blank" id="bot_links" href={project.linktodemo}>Demo</a></div>


                        </div>
                </div>
        );
}

export default CustomCard;