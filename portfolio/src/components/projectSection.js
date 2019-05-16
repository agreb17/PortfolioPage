import React from "react";
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';

const movebytesInner = `innerTile movebytes`;
const portfolioInner = `innerTile portfolio`
const classes = `section-content projects`;

export default function ProjectSection({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className={classes} id={id}>
        <h1>Projects</h1>
        <div className="projectTilesContainer">
          <div className="projectTileAndText">
            <div className="projectTile">
              <div className={movebytesInner} />
              <div className="projectText">
                <h2>Movebytes.com <a href="https://github.com/Lambda-School-Labs/labs10-big-files" target="_blank"><FaGithub className="fa"/></a> <a href="https://www.movebytes.com/" target="_blank"><FaGlobeAmericas className="fa"/></a></h2>
                <p>
                  Tech Stack: React.js(Hooks), Axios, Styled-Components
                </p>
                <p>
                  A simple to use file transfer site which allows you to send your file to anyone via an automated download link. 
                </p>
              </div>
            </div>
          </div>
          <div className="projectTileAndText">
            <div className="projectTile">
                <div className={portfolioInner} />
                    <div className="projectText">
                        <h2>AnthonyGreb.com <a href="https://github.com/agreb17/PortfolioSite" target="_blank"><FaGithub className="fa"/></a> <a href="http://www.anthonygreb.com" target="_blank"><FaGlobeAmericas className="fa"/></a></h2>
                        <p>Tech Stack: React.js, React-Scroll, LESS</p>
                        <p>
                            Single page portfolio site displaying information about
                            myself, some of my projects, and options to contact me.
                        </p>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}