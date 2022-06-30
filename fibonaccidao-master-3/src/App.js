
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import * as THREE from "three";
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
import "@google/model-viewer/dist/model-viewer";

const ZoomInScrollOut = batch(StickyIn(), FadeIn());
const FadeUp = batch(Fade(), Move());

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: '100vh',
    
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: "fixed",
    // backgroundImage: "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), urL('/images/bg.jpg')"
  },
}));




export default function App() {
  const classes = useStyles();

  return (
    <div id="wrapper">
       <div className={classes.root}>
        <model-viewer id="size_bg"
          src={require("./components/Kit.glb")}
          disable-zoom
          auto-rotate
        >
          <div className={classes.root}>
            <Header />
          </div>
        </model-viewer>
        <About />
        <Information />
        <Distribution />
        <Roadmap />
          <GHSProvider>
          <Modal><Newsletter/></Modal>
        </GHSProvider>
        <Hyperlinks/>
       </div>
    </div>
    

    
  );
}
