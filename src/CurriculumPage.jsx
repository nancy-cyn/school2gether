import React from 'react';
import './CurriculumPage.css';

const CurriculumPage = () => {
  return (
    <div className="curriculum-container">
      <h1>Explore Different Curriculums</h1>
      <div className="curriculum-grid">
        {[
          { name: 'IEB', desc: 'South African Independent Examination Board', img: 'src/ieb-dgc.jpg', link: '#', resources: 1000 },
          { name: 'CAPS', desc: 'National Curriculum and Assessment Policy', img: 'src/sa_caps.jpg', link: '#', resources: 1000 },
          { name: 'Cambridge Curriculum', desc: 'Cambridge Assessment International Education', img: 'src/cambridge-assessment-international-education.jpg', link: '#', resources: 1000 },
        ].map((curriculum, index) => (
          <div className="curriculum-block" key={index}>
            <img src={curriculum.img} alt={`${curriculum.name} Logo`} />
            <h2>{curriculum.name}</h2>
            <p>{curriculum.desc}</p>
            <p>{curriculum.resources} resources</p>
            <a href={curriculum.link}>Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumPage;