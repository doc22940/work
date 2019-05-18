import React from 'react';
import OutlinedChips from '../ExternalComponents/OutlinedChips';

import heart from '../assets/heart.png';
import ChipsArray from '../ExternalComponents/ChipsArray';

const Lower = () => {
      return (

<div id="lower_profile"  >



      <div id="first_proj" class="col col--3x">

            <div class="my_overlay"> 

                  <div className="textandstuff">
                                    <h2 className="titles">React Shopping Cart</h2>

                  <h4 >

                        <ChipsArray tech={["JavaScript", "ReactJS", "Material UI","Others" ]}/>

                  </h4>

                  <div className="titles">

                         <span className="mylinks">
                              <a target="_blank" href="https://github.com/AmmarHalees/reactshop">Source Code</a>
                              
                              / 
                              
                              <a target="_blank" href="https://ammarhalees.github.io/reactshop/">Demo</a>
                              
                        </span>

                  </div>
                  
                  </div>


            </div>


      </div>

{/*------------Second Project------------ */}

<div id="second_proj" class="col col--2x">

<div class="my_overlay"> 

      <h2 className="titles">Definitive Guide to JavaScript Arrays (Part I)</h2>

      <h4 >

            <ChipsArray tech={["JavaScript", "ES6", "Arrays","Sorting","Algorithms" ]}/>

      </h4>

      <div className="titles">

             <span className="mylinks">
                  <a target="_blank" href="https://medium.com/@haleesammar/definitive-guide-to-javascript-arrays-part-i-798e5e514927">Link to article</a>
                  
            </span>

      </div>

</div>


</div>





</div>	

      );
}
 
export default Lower;