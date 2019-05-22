import React from 'react';
import articledata from '../Data/ArticleData'
import CustomCard2 from './CustomCard2';


const Articles = (props) => {
        return ( 


           
                <div id="lower_profile_3" >

                {
                        articledata.map(article=>{

                                return <CustomCard2 check1={props.check1} article={article}/>

                        })

                }
                    

                </div>


         );
}
 
export default Articles;