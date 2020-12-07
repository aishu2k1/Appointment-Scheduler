import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropType from 'prop-types';
import { ApplicationContext } from "../../state/context";
import AppHeader from '../common/appheader';
import ScheduleBody from '../common/schedulebody';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
}));

export default function Schedule() {
    const classes = useStyles();
    const { state } = useContext(ApplicationContext);
    useEffect(() => { }, []);
  
    return (
      <div>
          <AppHeader />
          <div  className={classes.paper}>
          <ScheduleBody  />
          </div>
      </div>
    )
};

Schedule.prototype = {
    classes: PropType.object.isRequired,
};

