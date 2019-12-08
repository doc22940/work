import React from 'react';
import articledata from '../Data/ArticleData'
import CustomCard2 from './CustomCard2';


const Articles = ({ check1 }) => {
        return (

                <div id="lower_profile_3" >

                        {
                                articledata.map(article => {

                                        return <CustomCard2 key={article.key} check1={check1} article={article}  word = "Article"/>

                                })

                        }


                </div>


        );
}

export default Articles;