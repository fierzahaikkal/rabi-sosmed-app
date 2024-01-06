import React from 'react';
import { Github, Codepen, Youtube, Heart, Cookie } from 'lucide-react';

const MyComponent: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-start gap-8 rounded-lg bg-gray-200 p-12">
      <div className="logo">
        <a href="#">
          <h3 className="text-3xl font-semibold text-primary">Rabi</h3>
          <p className="text-xs text-accent">Rencana Bicara</p>
        </a>
      </div>

      <div className="footer">
        <div className="reversed menu-item-header">LET'S CONTACT</div>
        <div className="menu-item reversed">
          <a href="mailto:youremail@example.com">Contact me</a>
        </div>
        <div className="menu-item reversed exclude">
          <a href="https://www.youtube.com" target="_blank" className="flex">
            <Youtube className="ml-1 mr-1" />
            YouTube
          </a>
        </div>
        <div className="menu-item reversed exclude">
          <a href="https://github.com" target="_blank" className="flex">
            <Github className="ml-1 mr-1" />
            GitHub
          </a>
        </div>
        <div className="menu-item reversed exclude">
          <a href="https://codepen.io" target="_blank" className="flex">
            <Codepen className="ml-1 mr-1" />
            CodePen
          </a>
        </div>
      </div>
      <hr className="w-full border-b-2 border-black" />
      <div>
        <p className="flex items-center">
          Made with <Heart className="ml-1 mr-1" /> by Rabi
        </p>
        <p className="flex items-center">
          No cookies <Cookie className="ml-1 mr-1" />
        </p>
        <p>copyright reserved 2023 @ pweb assignment</p>
      </div>
    </div>
  );
};

export default MyComponent;
