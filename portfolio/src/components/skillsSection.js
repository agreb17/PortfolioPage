import React from "react";
import {FaCode, FaDesktop, FaFileAlt} from "react-icons/fa";
import {IoIosDesktop} from "react-icons/io";
import {GoServer} from "react-icons/go";

export default function SkillsSection({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
         <h1>Skills</h1>
         <div className="skillContainer">
         <div className="skillSection">
         <div className="faCircle">
         <FaCode   className="skillFa"/>
         </div>
         <div className="skillText">
         <h3>Front end</h3>
         <p>Strong knowledge of React.JS and semantic HTML for front end development. Experienced with CSS and LESS for page styling. </p>
         </div></div>

        <div className="skillSection">
         <div className="faCircle">
        <GoServer className="skillFa "/></div>
        <div className="skillText">
         <h3>Back end</h3>
         <p>Experience in back end development using Node.js, Express, and SQL for data persistence. </p>
        </div></div>

  <div className="skillSection"> 
   <div className="faCircle">
        <IoIosDesktop className="skillFa "/></div>
        <div className="skillText">
        <h3>Best Practices</h3>
        <p>Familiar with git workflow and version control. Familiarity with automated, React, and server testing.</p>
         </div></div>
          <div className="skillSection">
           
       </div>
   </div>
      </div>
    </div>
  );
}