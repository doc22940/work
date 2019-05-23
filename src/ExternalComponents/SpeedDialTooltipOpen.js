import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import MD from '../assets/md.png';
import NEWIG from '../assets/newig.png';

import YT from '../assets/yt.png';
import GH from '../assets/gh.png';

import IN from '../assets/in.png';



import classNames from 'classnames';


const styles = theme => ({
  root: { 
  //  backgroundColor:'green',
 

  },
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 1,
   
    


  },



  fab:{
    background:' -webkit-linear-gradient(74deg, rgba(35, 0, 90, 0.5) 0%, rgba(255, 103, 136, 0.493) 100%)' ,

  
    boxShadow:'1px -7px 20px -1px rgba(215, 55, 255, 0), 1px -15px 20px 8px rgba(144, 144, 144, 0.1), -1px -11px 20px 1px rgba(255, 196, 196, 0.12)'

  }

  ,

  buttons:{

    background:"white"

  }
,
  popper:{

  
    color:"green",
    background:"green"
  }

  ,tooltip:{

    color:"green",
    background:"green"


  }


});


const actions = [
  { icon: <a target="_blank" href="https://www.linkedin.com/in/ammarhalees/"> <img src={IN} /> </a>, name: 'LinkedIn' },
  { icon: <a target="_blank" href="https://github.com/AmmarHalees"><img src={GH}/></a>, name: 'GitHub' },
  { icon: <a target="_blank" href="https://www.instagram.com/ammarhalees"><img src={NEWIG}/></a>, name: 'Instagram' },
  { icon: <a target="_blank" href="https://medium.com/@haleesammar"><img src={MD}/></a>, name: 'Medium' },
  { icon: <a target="_blank" href="https://www.youtube.com/channel/UCugfvz9Aoq00NahbwQTki8w?view_as=subscriber"><img src={YT}/></a>, name: 'YouTube' },

];

class SpeedDialTooltipOpen extends React.Component {
  state = {
    open: false,
    hidden: false,
  };

  handleVisibility = () => {
    this.setState(state => ({
      open: false,
      hidden: !state.hidden,
    }));
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { hidden, open } = this.state;

    return (
      <div >
      { /* <Button onClick={this.handleVisibility}>Toggle Speed Dial</Button> */}
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classNames(classes.speedDial) }
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open} 

          classes={{
            fab: classes.fab, // class name, e.g. `classes-nesting-root-x`
       
          }}
          
        
        >
          {actions.map(action => (
            <SpeedDialAction
            
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={this.handleClick}


              tooltipPlacement="right"
              tooltipOpen={false}


             TooltipClasses={classNames(classes.popper,classes.tooltip)}

              classes={{
                button: classes.buttons, // ONLY button and buttonClosed keys
              }}

              
            />
          ))}
        </SpeedDial>
      </div>
    );
  }
}

SpeedDialTooltipOpen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpeedDialTooltipOpen);
