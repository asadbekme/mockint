import React from 'react';
import Iframe from 'react-iframe';
import './Video.scss';

const Video = () => {
  return (
    <section className='video' id='video'>
      <div className="container">
        <div className="video__content">
          <h2 className="video__title">VIDEONI ALBATTA KO'RING</h2>
          <div className="video__iframe">
            <Iframe 
              url="https://www.youtube.com/embed/OziTdFRiThI"
              width="640px"
              height="320px"
              id="video__youtube"
              frameborder="0"
              className="video__youtube"
              display="block"
              position="relative"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;