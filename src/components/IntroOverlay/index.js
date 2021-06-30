import React from 'react';
import { OverlayIntro } from './styles';

export function IntroOverlay() {
  return (
    <>
      <OverlayIntro>
        <div className="intro-overlay">
          <div className="top">
            <div className="overlay-top"></div>
            <div className="overlay-top"></div>
            <div className="overlay-top"></div>
          </div>
          <div className="bottom">
            <div className="overlay-bottom"></div>
            <div className="overlay-bottom"></div>
            <div className="overlay-bottom"></div>
          </div>
        </div>
      </OverlayIntro>
    </>
  );
}
