import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CodeSnippets from '../Components/CodeSnippets';
import Articles from '../Components/Articles';
import Projects from '../Components/Projects';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
 
  },
  indicator:{
   backgroundColor:"#f5005763"

   //original : #f50057
  }
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root} style=
                  {
                    this.props.check1===true?
        
                    {
                      background:"#020202", 
                      color:"white",
              
                      border: "1px #0c0c0c solid"
                    
                    
                    }
        
                    :
        
                    {background:"white" }
        
                  }
                
        
        >
       
       
          <AppBar position="static"  style=
          
          {
            this.props.check1===true?

            {background:"#020202", color:"white" }

            :

            {background:"white" }

          }
        
          >
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange} classes={

             this.props.check1===true? {indicator:classes.indicator}:{}

            } >
              <LinkTab label="Articles" href="page1" />
              <LinkTab label="Projects" href="page2" />
              {/* <LinkTab label="Snippets" href="page3" /> */}
            </Tabs>
          </AppBar>

          {value === 0 && 
          
          <TabContainer style={{ color:"#020202"}} >

                   <Articles check1={this.props.check1}/>

          </TabContainer>}


          {value === 1 && 
          
          <TabContainer>
                  
                  <Projects check1={this.props.check1}/>

          </TabContainer>
        
        }


          {value === 2 && 
          
          
          <TabContainer>

                  <CodeSnippets/>

          </TabContainer>}

        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);