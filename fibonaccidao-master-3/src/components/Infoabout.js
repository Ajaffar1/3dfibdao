import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Imgcard from './Imgcard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function Info() {
  const classes = useStyles();
  const checked = useWindowPosition('Header');
  return (
    <div className={classes.root} id="Infoabout">
      <Imgcard place={places[1]} checked={checked} />
      <Imgcard place={places[0]} checked={checked} />
    </div>
  );
}