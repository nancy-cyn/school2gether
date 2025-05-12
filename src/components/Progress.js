import './Progress.css';


const Session = () => {
    return ( 
      <div className="progress-container">
        <div className="session">
          <h2>Progress</h2>
          <div className="chart-container">
            <img 
              src="/images/pie-chart-example-1.png" 
              alt="Progress Pie Chart" 
              className="progress-chart"
            />
          </div>
        </div>
      </div>
    );
}
  
export default Session;