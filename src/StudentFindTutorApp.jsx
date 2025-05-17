import './StudentFindTutorApp.css';
import StudentFindTutorTitleCard from'./studentFindTutorComponents/StudentFindTutorTitleCard';
import StudentFindTutorRefineSearchSidebar from './studentFindTutorComponents/StudentFindTutorBodyRefineSearchSideBar';  
import StudentNavbar from './studentFindTutorComponents/StudentNavbar';
import StudentFindTutorBodyFilterBar from './studentFindTutorComponents/StudentFindTutorBodyFilterBar';
function StudentFindTutorApp() {
  return (
    <div className="StudentFindTutorApp">
      <div className="StudentFindTutorNavBar"> 
        <StudentNavbar />
      </div>
      <div className="StudentFindTutorTitleCard">
        <StudentFindTutorTitleCard />
      </div>
      <div className="StudentFindTutorBodyContent">
        <div className="StudentFindTutorRefineSearchSidebar">
            <StudentFindTutorRefineSearchSidebar />
        </div>
        <div className="StudentFindTutorSearchedTutorFIlterBar">
           <StudentFindTutorBodyFilterBar />
        </div>
      </div>
    
    </div>
  );
}

export default StudentFindTutorApp;
