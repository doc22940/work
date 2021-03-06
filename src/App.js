import React from 'react';
import './App.css';
import Upper from './Components/Upper';
import Mid from './Components/Mid';
import Lower from './Components/Lower';
import SpeedDialTooltipOpen from './ExternalComponents/SpeedDialTooltipOpen';
import MetaTags from 'react-meta-tags';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

      check1:false,
      test:false,
      containerStyle:
      {
        backgroundColor:"white"

      }

      ,

      darkTheme:{

        backgroundColor:"black",
        background:"black",
        color:"white",

      }

     }

     this.handleMe=this.handleMe.bind(this)

  }

  handleMe(event){

    const {name,checked}= event.target
  
    this.setState({
  
     
      [name]:checked


    },()=>console.log(`${[name]} +${[checked]}`))

    if(!checked){

      this.setState({
  

        
        containerStyle: {
          backgroundColor:"white"
  
        }
    
    
      })
    
      

    }else{


      this.setState({
  

        
        containerStyle: {
          backgroundColor:"#020202"
  
        }
    
    
      })
    }



    // this.setState({
  
    //   [name]:checked
  
  
    // },()=>console.log(`${[name]} +${[checked]}`))
  
    
  
    }



  render() { 
    return ( 



      <div className="container" style={this.state.containerStyle}>
      {/* <div id="bg-bg"></div>
                <div id="bg-bg2"></div>
      <div id="bg-bg3"></div>*/}
    
    
    <MetaTags>
            <title>Ammar Halees | Work</title>
            <meta name="description" content="Some description." />
            {/* <meta property="og:title" content="MyApp" /> */}
            {/* <meta property="og:image" content="path/to/image.jpg" /> */}
          </MetaTags>
    
    
    <Upper handleMe={this.handleMe}  check1={this.state.check1} darkTheme={this.state.darkTheme}/>
    
 {/* {   <Mid check1={this.state.check1}/>} */}

    
    
    <Lower check1={this.state.check1} />
    
    
    <SpeedDialTooltipOpen check1={this.state.check1} darkTheme={this.state.darkTheme}/>
    
    
    
        </div> 

     );
  }
}
 
export default App;

