import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RoadmapInfo from './RoadmapCards';
import Card from '@material-ui/core/Card';
import objectives from '../static/objectives';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   minHeight: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   [theme.breakpoints.down('md')]: {
  //     flexDirection: 'column',
  //   },
  // },
  root: {
    padding: "0% 13vw 0% 11vw",
    // backgroundColor: "#02113E",
    // backgroundColor: 'rgba(2, 17, 62)',
    backgroundColor: "#000",
    // height: "50vh",
    // maxHeight: "100vh"
    paddingBottom: "5vh",
    displya: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: "flex",
    width: '45%'
    // alignItems: "center"
  },
  images: {
    width: "30vw",
    height: "23vw",
    paddingRight: "10vw",
    paddingBottom: "3vw",
  },
  h1: {
    fontFamily: `serif`,
    color: "white",
    fontSize: "2.6vw",
    textSizeAdjust: "auto",
    fontWeight: "bold",
    paddingBottom: "4vh",
    marginTop: "0",
    textAlign: "center"
},
  h2: {
    fontFamily: `serif`,
    color: "white",
    fontSize: "2.6vw",
    textSizeAdjust: "auto",
    fontWeight: "normal",
    marginBottom: "0",
    paddingBottom:"2vh",
    marginTop: "0",
    paddingTop: "2vw"
  },
  p: {
    fontFamily: `Judson, serif`,
    color: "white",
    fontSize: "1.4vw",
    textSizeAdjust: "auto"

  },
  content : {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '50px'
  }

}));
export default function () {
  const classes = useStyles();

  return (
    // <div className={classes.root} id="objective">
    //   <RoadmapInfo objective={objectives[0]}  />
    //   <RoadmapInfo objective={objectives[1]}  />
    //   <RoadmapInfo objective={objectives[2]}  />
    //   <RoadmapInfo objective={objectives[3]}  />
    //   <RoadmapInfo objective={objectives[4]}  />
    // </div>

    <div className={classes.root}>
      <h2 className={classes.h1}>FIBDAO Roadmap</h2>
      <div className={classes.content}>
        <div className={classes.row}>
          {/* <img className={classes.images} src="images/Web_Image_Renders_02.png" /> */}
          <div>
            <h2 className={classes.h2}>Our Vision and Value</h2>
            <p className={classes.p}>Everything starts and ends with the community. The moment we prioritize
              something other than the community will be the beginning of the end. We wont let that happen,
              because we're giving the community an opportunity to become a VC</p>
          </div>
        </div>
        <div className={classes.row}>
          {/* <img className={classes.images} src="images/Web_Image_Renders_03.png" /> */}
          <div>
            <h2 className={classes.h2}>Venture Capital Opportunity</h2>
            <p className={classes.p}>Our goal is to build the very first dao that lets our community to decide 
            what occurs with its treasury, In the long term, we believe this DAO can be optimzed for stability within the NFT space.</p>
          </div>
        </div>
        <div className={classes.row}>
          {/* <img className={classes.images} src="images/Web_Image_Renders_01.png" /> */}
          <div>
            <h2 className={classes.h2}>Inital Public Offering (I.P.O)</h2>
            <p className={classes.p}>In order to make this service available to the public, we will be offering 5,555 NFTs that will have 
            the ability to stake and earn FBD. The more FBD, you accumulate, the more power you will withold when it comes to governance decisions.</p>
          </div>
        </div>
        <div className={classes.row}>
          {/* <img className={classes.images} src="images/Web_Image_Renders_04.png" /> */}
          <div>
            <h2 className={classes.h2}>METAVERSE</h2>
            <p className={classes.p}>Everything starts and ends with the community. The moment we prioritize something other than the community will be 
            the beginning of the end. We wont let that happen, because we're giving the community an opportunity to become a VC</p>
          </div>
        </div>
        <div className={classes.row}>
          {/* <img className={classes.images} src="images/Web_Image_Renders_05.png" /> */}
          <div>
            <h2 className={classes.h2}>Bridge Between Fibdao and YOU</h2>
            <p className={classes.p}>Our goal is to build the very first dao that gives away the its treasury in increments of prizes such as cars, ticket 
            events, NFTs. We will be native on the MATIC network. In the long term, we believe this DAO can be optimzed for stability within the NFT space</p>
          </div>
        </div>
      </div>
    </div>
  );
}