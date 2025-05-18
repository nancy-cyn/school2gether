import './StudentFindTutorBodyFilterBar.css';
const StudentFindTutorBodyFilterBar = () => {
    return ( 
        <div className="StudentFindTutorBodyFilterBar">
            <h2>Search Criteria</h2>
            <div className="StudentFindTutorBodyFilterBarBox">
                <div className="StudentFindTutorBodyFilterBarPriceDiv">
                    <form action="" className="StudentFindTutorBodyFilterBarPriceForm">
                        <select name="Price" id="StudentFindTutorBodyFilterBarPriceDropDownList">
                            <option value="DefaultStatement">Choose a Price Range</option>
                            <option value="0-200">R0 - R200</option> 
                            <option value="201-400">R201 - R400</option>
                            <option value="401-600">R401 - R600</option>
                            <option value="601-800">R601 - R800</option>
                            <option value="801+">R801+</option>
                        </select>                    
                    </form>
                </div>
                <div className="StudentFindTutorBodyFilterBarSubjectDiv">
                    <form action="" className="StudentFindTutorBodyFilterBarSubjectForm">
                        <select name="Subject" id="StudentFindTutorBodyFilterBarSubjectDropDownList">
                            <option value="DefaultStatement">Choose a Subject</option>
                            <optgroup label="Languages">{/*Languages */}                               
                                <option value="English">English</option>
                                <option value="Afrikaans">Afrikaans</option>
                                <option value="isiXhosa">isiXhosa</option>
                                <option value="isiZulu">isiZulu</option>
                                <option value="Sepedi">Sepedi</option>
                                <option value="Setswana">Setswana</option>
                                <option value="Sesotho">Sesotho</option>
                                <option value="isiNdebele">isiNdebele</option>
                                <option value="isiSwati">isiSwati</option>
                                <option value="Tshivenda">Tshivenda</option>
                                <option value="xiTsonga">xiTsonga</option>
                            </optgroup>                      
                            <optgroup label="STEM">{/*Science Technology Economics Mathematics*/}
                                <option value="Mathematics">Mathematics</option>
                                <option value="MathematicalLiteracy">Mathematical Literacy</option>
                                <option value="History">History</option>
                                <option value="Geography">Geography</option>
                                <option value="Biology">Biology</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Accounting">Accounting</option>
                                <option value="Economics">Economics</option>
                                <option value="BusinessStudies">Business Studies</option>
                                <option value="InformationTechnology">Information Technology</option>
                                <option value="ComputerApplicationsTechnology">Computer Applications Technology</option>
                            </optgroup>
                            <optgroup label="TheArts">{/*The Arts*/}
                                <option value="VisualArts">Visual Arts</option>
                                <option value="Music">Music</option>
                                <option value="Drama">Drama</option>
                            </optgroup>
                            <optgroup label="Other">{/*Other*/} 
                                    <option value="LifeOrientation">Life Orientation</option>
                                    <option value="ReligiousEducation">Religious Education</option>
                            </optgroup>                   
                        </select>   
                        <select name="Grade" id="StudentFindTutorBodyFilterBarGradeDropDown">
                            <option value="DefaultStatement">Choose a Grade</option>
                            <option value="GradeR">Grade R</option>
                            <option value="Grade1">Grade 1</option>
                            <option value="Grade2">Grade 2</option>
                            <option value="Grade3">Grade 3</option>
                            <option value="Grade4">Grade 4</option>
                            <option value="Grade5">Grade 5</option>
                            <option value="Grade6">Grade 6</option>
                            <option value="Grade7">Grade 7</option>
                            <option value="Grade8">Grade 8</option>
                            <option value="Grade9">Grade 9</option>
                            <option value="Grade10">Grade 10</option>
                            <option value="Grade11">Grade 11</option>
                            <option value="Matric">Matric</option>    
                        </select>                 
                        <select name="Curriculum" id="StudentFindTutorBodyFilterBarCurriculumDropDown">
                            <option value="DefaultStatement">Choose a Curriculum</option>
                            <option value="CAPS">CAPS</option>
                            <option value="Cambridge">Cambridge</option>
                            <option value="IEB">IEB</option>
                            <option value="Edexcel">Edexcel</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default StudentFindTutorBodyFilterBar;