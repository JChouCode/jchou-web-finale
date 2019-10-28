import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router, Match } from '@reach/router'
import Dynamic from 'containers/Dynamic'
import { Helmet } from 'react-helmet'
import './app.css'
import { ScrollToTop } from "components/ScrollToTop"

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Helmet>
        <meta charSet="utf-8"></meta>
        <title>Chou</title>
        <link rel="apple-touch-icon" sizes="180x180" href={require("./assets/apple-touch-icon.png")}/>
        <link rel="icon" type="image/png" sizes="32x32" href={require("./assets/favicon-32x32.png")}/>
        <link rel="icon" type="image/png" sizes="16x16" href={require("./assets/favicon-16x16.png")}/>
        <link rel="manifest" href={require("./assets/site.webmanifest")}/>
        <link rel="mask-icon" href={require("./assets/safari-pinned-tab.svg")} color="#cf8000"/>
        <meta name="msapplication-TileColor" content="#ffc40d"/>
        <meta name="theme-color" content="#ffde7d"/>
        {/* <link rel="icon" type="image/png" href="https://media.graphcms.com/apgl2eLxQDmUeQO4yjO7"></link> */}
        < meta name="description" content="Student at Cornell University studying Computer Science and Physics.
          My interests include software / fullstack dev, and data science.
        Built from scratch with React :O."></meta>
      </Helmet>
    <div className="content">
      <React.Suspense fallback={<div></div>}>
        <Router primary={false}>
          <ScrollToTop path="/">
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </ScrollToTop>
        </Router>
      </React.Suspense>
    </div>
    </Root >
  )
}



export default App
