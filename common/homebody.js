import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import scanimage from '../../static/images/flat-hospital-building.jpg'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 500,
  },
  media: {
    height: 80,
    paddingTop: '40.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} height="400px">
      <LocalHospitalIcon style={{color:"#ff0000"}}></LocalHospitalIcon>
      <CardHeader
        title="Wellcare Hospital"
        align="center"
        subheader="Cure sometimes, treat often, comfort always"
      />
      <CardMedia
        className={classes.media}
        image={scanimage}
        title="Hospital pic"
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
        Wellcare hospital provides the following services:
        <List component="ul">
            <ListItem><b>+</b>Emergency room services</ListItem>
            <ListItem><b>+</b>General surgical services</ListItem>
            <ListItem><b>+</b>X ray/Radiology services</ListItem>
            <ListItem><b>+</b>Blood services</ListItem>
            <ListItem><b>+</b>Consultation services</ListItem>
        </List>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <CallIcon style={{color:"#42a5f5"}}></CallIcon>
        <p>9281776536</p>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <LocationOnIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><b>Location:</b></Typography>
          <Typography paragraph>
            Health Centre Building No. 5, 18th Main Rd, Sector 1,<br></br>HSR Layout, Bengaluru, Karnataka 560102 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}