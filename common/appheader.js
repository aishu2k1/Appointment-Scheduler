import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  schedule: {
      color: 'white'
  },
  image: {
      height: 40,
      marginLeft: -20
  },
  appbar:{
    position: 'fixed',
    marginTop: theme.spacing(0),
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Icon edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
            <LocalHospitalIcon />
          </Icon> 
          <Typography variant="h6" className={classes.title}>
          <Link href="/" className={classes.schedule}>
            Home Page
            </Link>
          </Typography>
          <Button color="inherit">
           <Link href="/schedule" className={classes.schedule}>
              Schedule Appointment
           </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}