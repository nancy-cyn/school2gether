import './StudentFindTutorApp.css';
import StudentFindTutorTitleCard from'./studentFindTutorComponents/StudentFindTutorTitleCard';
import StudentFindTutorRefineSearchSidebar from './studentFindTutorComponents/StudentFindTutorBodyRefineSearchSideBar'; 
// import StudentNavbar from './studentFindTutorComponents/StudentNavbar';
import { useState } from 'react';
import StudentFindTutorBodyFilterBar from './studentFindTutorComponents/StudentFindTutorBodyFilterBar';
import StudentFindTutorBodyProfileCardDisplayArea from './studentFindTutorComponents/StudentFindTutorBodyProfileCardDisplayArea';

function StudentFindApp() {
    const[foundTutorCount, setFindTutorCount] =  useState('N/A');
    const handleClick = (e) => {
        setFindTutorCount('3');
    }
    return (
        <div className="StudentFindTutorApp">
            {/* <div className="StudentFindTutorNavBar"> 
                <StudentNavbar />
            </div> */}

            {/*Title  card*/}
            <StudentFindTutorTitleCard />
            
            <div className="StudentFindTutorBodyContent">
                    <StudentFindTutorRefineSearchSidebar />
                    <StudentFindTutorBodyFilterBar />
                <div className='StudentFindTutorSearchTutorButton'>
                    <button onClick={handleClick} type="submit" id="StudentFindTutorSearchSubmitButton">Search Tutors</button>  
                </div>
                <div className='StudentFindTutorCount'>
                    <span id="StudentFindTutorCountText"> Tutors Found: {foundTutorCount}</span>
                </div>
                <StudentFindTutorBodyProfileCardDisplayArea />
            </div>          
        </div>
    );
}

export default StudentFindApp;
// import './StudentFindTutorApp.css';