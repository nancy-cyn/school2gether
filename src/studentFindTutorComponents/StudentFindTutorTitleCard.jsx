const StudentFindTutorTitleCard = () => {
    return ( 
        <div className="Student_FindTutor_TitleCard">
            <h1>Find the PerfectTutor for Your Child</h1>
            <p>Expert tutors with verified credentials</p>
            <img src="classroom.png" alt="A classroom" />
            <div className="Student_FindTutor_TitleCard_SearchButtonBox">
                <form action="" className="Student_FindTutor_TitleCard_SearchButtonBox_Form">
                    <input type="text" placeholder="Subject" id="Student_FindTutor_TitleCard_SearchButtonBox_SubjectInputTextBox" />
                    <select name="Curriculum" id="Student_FindTutor_TitleCard_SearchButtonBox_CurriculumDropDownList">
                        <option value="Student_FindTutor_TitleCard_SearchButtonBox_CurriculumDropDownList_Curriculum">Curriculum</option>
                        <option value="Student_FindTutor_TitleCard_SearchButtonBox_CurriculumDropDownList_GDE">GDE</option>
                        <option value="Student_FindTutor_TitleCard_SearchButtonBox_CurriculumDropDownList_IEB">IEB</option>
                        <option value="Student_FindTutor_TitleCard_SearchButtonBox_CurriculumDropDownList_Cambridge">Cambridge</option>
                    </select>   
                    <button type="submit" id="Student_FindTutor_TitleCard_SearchButtonBox_SearchSubmitButton">Search Tutors</button>
                </form>
            </div>
        </div>
    );
}
 
export default StudentFindTutorTitleCard;