import React from 'react';
import ProjectCard from './ProjectCard';

function Home() {
  return (
    <div>
        <h1>Hi, My name is Reese Chong <br></br>I build things for the web.</h1>
        <div className="flex items-center bg-gradient-to-b from-gray-200 to-transparent">
            <ProjectCard ProjectTitle={"ML AI GPT App"} ProjectDescription={"buzzword buzzword buzzword buzzword buzzword"}/>
            <ProjectCard ProjectTitle={"Blind Person"} ProjectDescription={"GPT app"}/>
            <ProjectCard ProjectTitle={"GPT App"} ProjectDescription={"GPT app"}/>
        </div>
    </div>
  );
}

export default Home;
