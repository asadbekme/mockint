import React from 'react';

const SpecialistsCard = ({ item }) => {
  const { src, name, job, experience, level, stacks, url, socialSrc } = item;
  console.log(item);
  
  return (
    <div className="specialists__card">
      <div className="specialists__card-image">
        <div className="specialists__card-imgbox" style={{ backgroundImage: `url(${src})` }}>
          <a href={url} className="specialists__card-social">
            <img src={socialSrc} alt="url" />
          </a>
        </div>
      </div>

      <div className="specialists__card-main">
        <h4 className="specialists__card-name">{name}</h4>
        <h5 className="specialists__card-job">{job}</h5>
        <div className="specialists__card-stacks">
          {
            stacks.map((stack, index) => {
              return (
                <div key={index} className="specialists__card-stack">
                  #{String(stack).toUpperCase()}
                </div>
              );
            })
          }
        </div>
        <div className="specialists__card-experience">
          <span>TAJRIBA:</span> {experience}
        </div>
        <div className="specialists__card-level">
          <span className="specialists__card-level__text">INTERVYU DARAJASI: </span>
          <span>{String(level).toUpperCase()}</span>
        </div>
      </div>

      <div className="specialists__card-line"></div>
    </div>
  );
}

export default SpecialistsCard;