import React from 'react'
import { Link, Router } from 'components/Router'
import "./css/work.css"


export default () => (
  <div className="white">
    <div className="container">
      <Link to="/" className="back">
        <svg width="32" height="32" viewBox="0 0 32 32"><g fill-rule="evenodd"><path transform="rotate(45 4.001 12.985)" d="M5.364 -0.236H7.364V15.764H5.364z"></path><path transform="scale(1 -1) rotate(45 54.613 2.021)" d="M5.364 9.764H7.364V25.764H5.364z"></path><path d="M2 14H26V16H2z" transform="translate(3 1)"></path></g></svg>
        <div>Home</div>
      </Link>
      <h1>Work</h1>
      <div className="content-wrapper">
        <img id="tech" src={require("./../assets/technology.png")}></img>
        <ul id="experience">
          <li>
            <span>IoTeX: Software Engineer Intern</span>
            <p>I spent my last summer interning at IoTeX, an IoT blockchain startup.
               There, I created and solely managed codelabs.iotex.io, a community hub for
               IoTeX developers. I also implemented the backend GraphQL api for IoPay discovery feed and feature flag manager using
               MongoDB and React. Additionally, I developed decentralized apps on their blockchain with Solidity and React, such as
           IoTeX RPS, to demonstrate the useability of IoTeX antenna-sdk.</p>
          </li>
          <li>
            <span>NASA: Planetary Science Intern</span>
            <p>Coauthored "Mars as a Remnant Planetary Embryo that Survived the Giant Impact Phase".
              Performed data analysis on planet formation simulations with Matplotlib in Python.
            Operated Mercury v6, hybrid symplectic integrator.</p>
          </li>
        </ul>
        <h1>Languages</h1>
        <ul id="languages">
          <li>Python</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Java</li>
          <li>Golang</li>
          <li>Solidity</li>
          <li>OCaml</li>
        </ul>
        <h1>Frameworks</h1>
        <ul id="frameworks">
          <li>React</li>
          <li>GraphQL</li>
          <li>Node</li>
          <li>Webpack</li>
          <li>Truffle</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

    </div>
    <div className="footer">
      <Link to="/" className="back-footer">
        <svg width="32" height="32" viewBox="0 0 32 32"><g fill-rule="evenodd"><path transform="rotate(45 4.001 12.985)" d="M5.364 -0.236H7.364V15.764H5.364z"></path><path transform="scale(1 -1) rotate(45 54.613 2.021)" d="M5.364 9.764H7.364V25.764H5.364z"></path><path d="M2 14H26V16H2z" transform="translate(3 1)"></path></g></svg>
        <div>Home</div>
      </Link>
    </div>
  </div>
)
