import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh',
    fontFamily: 'Nunito'
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    display: 'flex',
    gap:'5px'
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#FF0040',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    fontSize: '6vw',
    color: '#fff',
  },
  goDown: {
    color: '#FF0040',
    fontSize: '4rem',
    transition: "1s",
    "&:hover, &:focus": {
        transform: "scale(1.2)",
    },
  },
  
  h2: {
    fontSize: '12vw',
    margin: "0",
    marginBottom: "4vh",
    color: "white"
  },
  icon: {
    marginLeft:".7vw",
    marginRight:".7vw",
    transition: "1s",
    "&:hover, &:focus": {
        transform: "scale(1.2)",
    },
    height: '40px',
    width: '40px'
  },
  menu : {
    zIndex: '4',
    marginRight: '24px',
    marginTop: '24px',
    alignItems: 'center',
    marginRight: '30px',
    marginTop: '25px',
  },
  presale : {
    position: 'relative',
    outline: 'none',
    border: 'none',
    padding: '16px',
    paddingTop: '18px',
    paddingLeft: '32px',
    paddingRight: '32px',
    borderRadius: '2px',
    fontFamily: 'MoriGothic',
    fontSize: "14px",
    letterSpacing: ".4px",
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    textTransform: 'uppercase',
    clipPath: 'polygon(3% 0, 100% 0, 100% 80%, 94% 100%, 50% 100%, 0 100%, 0 10%)',
    transition: 'background .5s,color .5s',
    color: '#878787',
  },
  appTitle : {
    display: 'flex'
  },
  titlefib : {
    color: 'white'
  },
  dao : {
    color: '#FF0040'
  }
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);



  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="Header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
     
          <h1 className={classes.appbarTitle}>
            <a href="https://www.fibdao.io"><img className={classes.icon} src="/images/fibdao_logo.png"/></a>
            <span className={classes.titlefib}>FIB</span>
            <span className={classes.dao}>DAO</span>
          </h1>
          <div  className={classes.menu} >
          <button type="button" name="REVEAL" className={classes.presale}>
              REVEAL
          </button>
          </div>
          {/* <a><SocialIcon className={classes.icon} url="https://www.instagram.com/fibdao/" style={{ height: 40, width: 40}} bgColor="#FF0055" fgColor="#FFFFFF"/></a>
          <a><SocialIcon className={classes.icon} url="https://twitter.com/fibdao" style={{ height: 40, width: 40}} bgColor="#FF0055" fgColor="#FFFFFF"/></a>
          <a><SocialIcon className={classes.icon} url="https://discord.gg/hAURy3jVKe" style={{ height: 40, width: 40}} bgColor="#FF0055" fgColor="#FFFFFF"/></a> */}

        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 style={{ marginBottom: "0" }} className={classes.title}>
            Welcome to <br />
          </h1>
          <h2 className={classes.h2}>FIB<span className={classes.colorText}>DAO.</span></h2>
          <Scroll to="about" smooth={true}>
            
          <a><ExpandMoreIcon className={classes.goDown} /></a>
            
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}