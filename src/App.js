import './App.css'; // Import CSS first
import ResourceAlgebra from './resourcealgebra';
import Stats from './stats';
import Patterns from './patterns';
import Probability from './prob';
import Finance from './finance';
import Calculus from './calculus';
import Trig from './trig';
import Fractions from './fractions';
import Topic from './topic';
import BarSearch from './barsearch';
import FiltFilter from './filtfilter';

function App() {
  return (
    <div className="app-container"> 
      <ResourceAlgebra />
      <Stats />
      <Patterns />
      <Probability />
      <Finance />
      <Calculus />
      <Trig />
      <Fractions />
      <Topic />
      <BarSearch />
      <FiltFilter />
      
     
    </div>
  );
}

export default App;