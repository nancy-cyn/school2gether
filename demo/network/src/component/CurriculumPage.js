import './CurriculumPage.css';
import { Link } from 'react-router-dom';
import iebImage from './ieb-dgc.jpg';
import capsImage from './sa_caps.jpg';
import cambridgeImage from './cambridge-assessment-international-education.jpg';
import Navbar from './navbar.js';

const CurriculumPage = () => {
  const curriculums = [
    { name: 'IEB', desc: 'South African Independent Examination Board', img: iebImage, link: '/grade', resources: 1000 },
    { name: 'CAPS', desc: 'National Curriculum and Assessment Policy', img: capsImage, link: '/grade', resources: 1000 },
    { name: 'Cambridge Curriculum', desc: 'Cambridge Assessment International Education', img: cambridgeImage, link: '/grade', resources: 1000 },
  ];

  return (
    <>
      <Navbar />
      <div className="curriculum-container">
        <h1>Explore Different Curriculums</h1>
        <div className="curriculum-grid">
          {curriculums.map((curriculum, index) => (
            <div className="curriculum-block" key={index}>
              <img src={curriculum.img} alt={`${curriculum.name} Logo`} />
              <h2>{curriculum.name}</h2>
              <p>{curriculum.desc}</p>
              <p>{curriculum.resources} resources</p>
              <Link to={curriculum.link}>Explore</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CurriculumPage;
