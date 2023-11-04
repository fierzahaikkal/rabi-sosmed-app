import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className="footer" id="footer" data-astro-cid-sz7xmlte>
      <style>
        {`
                .footer[data-astro-cid-sz7xmlte] {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 2em;
                    border-radius: 10px;
                    background-color: var(--static8);
                    color: var(--text);
                    padding: 3em 5em;
                    width: 100%;
                    margin-bottom: 10em;
                }
                `}
      </style>
      <div className="logo" data-astro-cid-sz7xmlte>
        <a href="#" data-astro-cid-sz7xmlte>
          <h3 className="text-3xl font-semibold text-primary">Rabi</h3>
          <p className="text-xs text-accent">Rencana Bicara</p>
        </a>
      </div>

      <div className="footer-cols" data-astro-cid-sz7xmlte>
        <div className="footer-col" data-astro-cid-sz7xmlte>
          <div className="reversed menu-item-header" data-astro-cid-sz7xmlte></div>
          <div className="menu-item reversed" data-astro-cid-sz7xmlte>
            <a href="mailto:youremail@example.com">Contact me</a>
          </div>
          <div className="menu-item reversed exclude" data-astro-cid-sz7xmlte>
            <a href="https://www.youtube.com/yourchannel" target="_blank">
              YouTube
            </a>
          </div>
          <div className="menu-item reversed exclude" data-astro-cid-sz7xmlte>
            <a href="https://github.com/yourusername" target="_blank">
              GitHub
            </a>
          </div>
          <div className="menu-item reversed exclude" data-astro-cid-sz7xmlte>
            <a href="https://codepen.io/yourusername" target="_blank">
              CodePen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
