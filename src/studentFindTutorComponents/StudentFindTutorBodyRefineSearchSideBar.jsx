const StudentFindTutorBodyRefineSearchSidebar = () => {
    return ( 
        <div className="StudentFindTutorBodyRefineSearchSidebar">
            <h2>Refine Your Search</h2>
            <div className="StudentFindTutorRefineSearchSidebarRefineSearchBox">
                
                <form action="" className="StudentFindTutorRefineSearchSidebarRefineSearchBoxForm">
                    <h3>Qualification</h3>
                    <input type="checkbox" id="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormQualificationCheckBoxDiploma" />
                    <label for="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormQualificationCheckBoxDiploma">Diploma</label>
                    <br />
                    <input type="checkbox" id="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormQualificationCheckBoxBachelors" />
                    <label for="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormQualificationCheckBoxBachelors">Bachelor's Degree</label>
                    <br />
                    <input type="checkbox" id="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormQualificationCheckBoxMasters" />
                    <label for="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormQualificationCheckBoxMasters">Master's Degree</label>
                    <br />
                    <input type="checkbox" id="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormQualificationCheckBoxSubjectMatterExpert" />
                    <label for="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormQualificationCheckBoxSubjectMatterExpert">Subject Matter Expert</label>
                    <br />
                    <br />
                    <h3>Experience</h3>
                    <input type="checkbox" id="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormExperienceCheckBoxNone" />
                    <label for="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormExperienceCheckBoxNone">None</label>
                    <br />
                    <input type="checkbox" id="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormExperienceCheckBox1to3Years" />    
                    <label for="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormExperienceCheckBox1to3Years">1 - 3 Years</label>
                    <br />
                    <input type="checkbox" id="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormExperienceCheckBox4to7Years" />
                    <label for="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormExperienceCheckBox4to7Years">4 - 7 Years</label>
                    <br />  
                    <input type="checkbox" id="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormExperienceCheckBox8PlusYears" />
                    <label for="StudentFindTutorRefineSearchSidebarRefineSearchBoxFormExperienceCheckBox8PlusYears">8+ Years</label>
                </form>               
            </div>
        </div>
     );
}
 
export default StudentFindTutorBodyRefineSearchSidebar;