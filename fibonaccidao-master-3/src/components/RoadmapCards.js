import React from "react";
import "../styles.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Judson, serif',
    fontWeight: 'bold',
    fontSize: '1.5vw',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Judson, serif',
    fontSize: '.8vw',
    color: '#ddd',
  },
});


export default function ImageComponent({objective, checked}) {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image= {objective.imageUrl}
        title="Kitnsu"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={classes.title}
        >
          {objective.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          {objective.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
  
  

