import React from 'react'
import { Link, Router } from 'components/Router'
import "./css/index.css"

export default () => (
  <div className="index">
    <header>
      <h1>chou. <span>swe</span></h1>
      <div>Bay Area, CA</div>
    </header>
    <div className="lines">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    <div className="name">
      <h2 id="first">
        <span>J</span>
        <span>e</span>
        <span>f</span>
        <span>f</span>
        <span>r</span>
        <span>e</span>
        <span>y</span>
      </h2>
      <h2 id="last">
        <span>C</span>
        <span>h</span>
        <span>o</span>
        <span>u</span>
      </h2>
    </div>
    <div className="MOTD">
      <p id="motd-1">
        <span>CURRENTLY LOOKING FOR SWE INTERNSHIPS</span>
      </p>
      <p id="motd-2">
        <span>CURRENTLY LOOKING FOR SWE INTERNSHIPS</span>
      </p>
    </div>
    <div className="contact">
      <h3>Speak with me!</h3>
      <div id="link-flex">
        <img id="yeti" src={require("./../assets/YetiWave.gif")} alt="Yeti"></img>
        <a href="mailto: jc2573@cornell.edu">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail icon</title><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" /></svg>
        </a>
        <a href="https://www.linkedin.com/in/jeffreychoucu/">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
        </a>
      </div>
      <a href="https://drive.google.com/file/d/1TjsaqWWF75Shhpom72bSYJv9CzSPo8AM/view?usp=sharing">
        <h3>View Resume</h3>
      </a>
    </div>
    <div id="about" className="section">
      <h3>ABOUT</h3>
      <div className="content">
        + Student at Cornell University '22<br></br>
        + Studying CS & Physics '22<br></br>
        + Interested in SWE/AI
      </div>
    </div>
    <div id="projects" className="section">
      <h3>PROJECTS</h3>
      <div className="content">
        <div>Check out my:</div>
        <div className="flex">
          <a href="https://github.com/JChouCode">Github -></a>
          <a href="https://github.com/JChouCode">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
          </a>
          <img src={require("./../assets/octocat.gif")}></img>
        </div>

      </div>
    </div>
    <div className="section">
      <h3>FEATURED</h3>
      <div className="content">
        <a href="https://github.com/JChouCode/mario3-ts" className="project">
          <h4>Mario3 Typescript</h4>
          <p>Super Mario Bros 3 Written with TS/Phaser3/Webpack/Tiled</p>
          <img src="https://raw.githubusercontent.com/JChouCode/mario3-ts/master/mario-demo.gif"></img>
        </a>
        <a href="https://github.com/JChouCode/iotex-rps" className="project">
          <h4>IoTeX RPS</h4>
          <p>Fullstack Rock-paper-scissors betting bot on IoTeX blockchain.
            Built with React/Solidity. Users are able to deploy their own bot and
            play rock paper scissors against other crypto-holders!
          </p>
          <img src="https://raw.githubusercontent.com/JChouCode/iotex-rps/master/demo/homescreen.png"></img>
        </a>
        <a href="https://github.com/JChouCode/pomo." className="project">
          <h4>Pomo.</h4>
          <p>Modern simple pomodoro built with React, Heroku Postgres, GraphQL</p>
          <img src="https://raw.githubusercontent.com/JChouCode/pomo./master/demo/demo.png"></img>
        </a>
      </div>
    </div>
    <div id="internships" className="section">
      <h3>INTERNSHIPS</h3>
      <div className="content">
        <h4>IoTeX: Decentralized Fabric for IoT - SWE Intern</h4>
        <p>I spent my last summer interning at IoTeX, an IoT blockchain startup. There, I created and solely managed <a href="https://codelabs.iotex.io">https://codelabs.iotex.io</a>, a community hub for IoTeX developers. I also implemented the backend GraphQL api for IoPay, IoTeX's mobile Android wallet. Additionally, I developed the first fullstack decentralized application on IoTeX alpha blockchain: <a href="https://github.com/JChouCode/iotex-rps">IoTeX RPS.</a></p>
        <h4>NASA Ames Research Center - Planetary Sciences Intern</h4>
        <p>Coauthored “Mars as a Remnant Planetary Embryo that Survived the Giant Impact Phase”. Performed data analysis on planet formation simulations. Used Matplotlib in python to visualize Mars-like planet formation.</p>
      </div>
    </div>
    <div id="last" className="section">
      <h3>PIXEL ART YETI BY ME :)</h3>
    </div>

  </div >

)
