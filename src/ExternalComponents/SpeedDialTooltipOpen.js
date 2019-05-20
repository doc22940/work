import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import PhoneIcon from '@material-ui/icons/Phone';
import ALarmIcon from '@material-ui/icons/Alarm';
import EmailIcon from '@material-ui/icons/Email';
import LinkedImage from '../assets/linkedin.png';
import IGImage from '../assets/igimg.png';
import Link from '../assets/link.png';
import IG from '../assets/ig2.png';
import Wapp from '../assets/wapp.png';
import Mail from '../assets/mail.png';
import Seven from '../assets/seven.png';



const styles = theme => ({
  root: {
    height: 0,

  },
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
   
    


  },
});


const actions = [
  { icon: <a target="_blank" href="https://www.linkedin.com/in/ammarhalees/"> <img src={Link} /> </a>, name: 'LinkedIn' },
  { icon: <a target="_blank" href="https://github.com/AmmarHalees"><img src="https://cdn3.iconfinder.com/data/icons/social-icons-24/24/Github-512.png"/></a>, name: 'GitHub' },
  { icon: <a target="_blank" href="https://www.instagram.com/ammarhalees"><img src={IG}/></a>, name: 'Instagram' },
  { icon: <a ><img src={Seven}/></a>, name: '+962 7909 44 687' },
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
      <div className={classes.root} >
      { /* <Button onClick={this.handleVisibility}>Toggle Speed Dial</Button> */}
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon className="speed_action" />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open} 
        
        >
          {actions.map(action => (
            <SpeedDialAction
            
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={this.handleClick}


              
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
