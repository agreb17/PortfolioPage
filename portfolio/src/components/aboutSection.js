import React from "react";

export default function AboutSection({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>Anthony Greb</h1>
        <h2>Enthusiastic full stack developer with a passion for learning and applying new skills</h2>
        <p>Proven track record of handling deadlines in stressful situations. Capable of getting up to speed quickly in a new environment. Someone who enjoys being part of a larger team and working towards a common goal. Excited to apply learned skills and to continue to develop skillset. More about me, I'm likely the biggest Indianapolis Colts fan you will ever meet. I am a proud father of 3 boys, and enjoy spending a majority of my free time with them and their amazing mother. I have one dog(German Shepard/Husky mix) that I absolutely love, and a cat.:)</p>
      </div>
    </div>
  );
}