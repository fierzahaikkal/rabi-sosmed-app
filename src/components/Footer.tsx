import React from 'react';
import { Github, Codepen, Youtube, Heart, Cookie } from 'lucide-react';

const MyComponent: React.FC = () => {
  return (
    <div className="flex min-w-[15rem] flex-col items-start gap-8 bg-gray-200 p-12 sm:p-12 md:p-12 lg:p-12 xl:p-12">
      <div className="logo">
        <a href="#">
          <h3 className="text-3xl font-semibold text-primary">Rabi</h3>
          <p className="text-sm text-accent">Rencana Bicara</p>
        </a>
      </div>

      <div className="footer">
        <div className="reversed menu-item-header mb-4 text-sm sm:mb-4 sm:text-base md:mb-4 lg:mb-4 xl:mb-4">
          LET'S CONTACT
        </div>
        <div className="menu-item reversed mb-2 text-sm sm:mb-4 sm:text-base md:mb-4 lg:mb-4 xl:mb-4">
          <a href="mailto:youremail@example.com">Contact me</a>
        </div>
        <div className="menu-item reversed mb-4">
          <a href="https://www.youtube.com" target="_blank" className="flex items-center text-sm">
            <Youtube className="ml-1 mr-1" />
            YouTube
          </a>
        </div>
        <div className="menu-item reversed mb-4">
          <a href="https://github.com" target="_blank" className="flex items-center text-sm">
            <Github className="ml-1 mr-1" />
            GitHub
          </a>
        </div>
        <div className="menu-item reversed mb-4">
          <a href="https://codepen.io" target="_blank" className="flex items-center text-sm">
            <Codepen className="ml-1 mr-1" />
            CodePen
          </a>
        </div>
      </div>
      <hr className="my-4 w-full border-b-2 border-black" />
      <div className="text-xs sm:text-sm">
        <p className="mb-2 flex items-center">
          Made with <Heart className="ml-1 mr-1" /> by Rabi
        </p>
        <p className="mb-2 flex items-center">
          No cookies <Cookie className="ml-1 mr-1" />
        </p>
        <p className="mb-4">Copyright reserved 2023 @ Pweb Assignment</p>
      </div>
    </div>
  );
};

export default MyComponent;
