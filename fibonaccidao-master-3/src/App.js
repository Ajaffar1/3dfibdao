
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import About from './components/About';
import Information from './components/Information';
import Distribution from './components/Distribution';
import Hyperlinks from './components/Hyperlinks';
import { GHSProvider } from './components/ContextProvider';
import Index from './components/Index';
import Newsletter from './components/Mailchimp.jsx';
import ImageComponent from './components/RoadmapCards';
import Modal from './components/Modal';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import MetaTags from 'react-meta-tags';
import Roadmap from './components/Roadmap';
const ZoomInScrollOut = batch(StickyIn(), FadeIn());
const FadeUp = batch(Fade(), Move());


const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: '100vh',
    
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: "fixed",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), urL('/images/bg.jpg')"
  },
}));




export default function App() {
  const classes = useStyles();
  return (


    <div id="wrapper">
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
      <div className={classes.root}>
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={FadeUp}>
              <CssBaseline />
              <Header />
            </Animator>
          </ScrollPage>

          {/* <ScrollPage page={1}>
            <Animator animation={batch(FadeIn())}>
              <About />
            </Animator>
          </ScrollPage> */}
        </ScrollContainer>
        <About />
        <Information />

          {/* <ScrollPage page={2}>
            <Animator animation={batch(FadeIn())}> */}
        <Distribution />
            {/* </Animator>
          </ScrollPage> */}

          {/* <ScrollPage page={3}>
            <Animator animation={batch(FadeIn())}> */}
        <Roadmap />
            {/* </Animator>
          </ScrollPage> */}

          {/* <ScrollPage page={4}>
            <Animator animation={batch(FadeIn())}> */}
        
            {/* </Animator>
          </ScrollPage> */}
          <GHSProvider>
          {/* <ScrollPage page={5}>
            <Animator animation={batch(FadeIn())}> */}
          <Modal><Newsletter/></Modal>
       
            {/* </Animator>
          </ScrollPage> */}
        
        </GHSProvider>
        
        <Hyperlinks/>
      </div>
    </div>
  );
}
