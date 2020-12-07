import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropType from 'prop-types';
import { ApplicationContext } from "../../state/context";
import AppHeader from '../common/appheader';
import HomeBody from '../common/homebody';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
}));

export default function Home() {
    const classes = useStyles();
    const { state } = useContext(ApplicationContext);
    useEffect(() => { }, []);
  
    return (
      <div>
          <AppHeader />
          <div  className={classes.paper}>
          <HomeBody  />
          </div>
      </div>
    )
};

Home.prototype = {
    classes: PropType.object.isRequired,
};

