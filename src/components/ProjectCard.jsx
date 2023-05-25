import React from 'react';

const ProjectCard = ({ProjectTitle,ProjectDescription}) => {
    return (
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="h-96 w-64 rounded-xl bg-red-500">
          <div className="h-[40%] rounded-t-xl bg-green-500"></div>
          <div className="flex flex-col justify-center gap-2 p-4">
          <h1 className="text-xl font-bold">{ProjectTitle}</h1>
          <p className="text-sm">{ProjectDescription}</p>
            <div>Tech Stack: tailwind, js, html</div>
            <div className="flex gap-4 text-sm">
              <div>ICO: Live Preview</div>
              <div>ICO: View Code</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default ProjectCard;
