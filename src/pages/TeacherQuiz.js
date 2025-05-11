import React, {useState} from 'react';
import { FaEdit, FaTrash, FaUpload, FaFile, FaTasks, FaDatabase} from "react-icons/fa";
import './TeacherQuiz.css';

const CreateQuiz = () =>{
    const [quizTitle, setQuizTitle] = useState('');
    const [subject, setSubject] = useState('Cannot');
    const [duration, setDuration] = useState('Cannot');
    const [totalPoints, setTotalPoints] = useState('Cannot');
    const [description, setDescription] = useState('');
    const [grade, setGrade] = useState('');
    const [showSavedPopup, setShowSavedPopup] = useState(false);

  // delete icons
    const [questions, setQuestions] = useState([
        { id: 1, text: '1+1', points: 3 },
        { id: 2, text: '1+1', points: 3 },
        { id: 3, text: '2+1', points: 4 }
    ])

    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');
    const [editPoints, setEditPoints] = useState(0);

    const subjects = ['Mathematics', 'Science', 'History', 'English'];
    const durations = ['30 minutes', '60 minutes', '90 minutes', '120 minutes'];
    const grades = ['1','2','3','4','5','6','7'];

        const handleFileUpload = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.xlsv,.csv,.doc,.docx,.pdf';
        fileInput.click();
        
        fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            alert(`File selected: ${this.files[0].name}`);
        } 
        });

        };

        
        const handleSaveDraft = () => {
            // Show the popup
            setShowSavedPopup(true);
            
            // Clear all form fields
            setQuizTitle('');
            setSubject('Cannot');
            setDuration('Cannot');
            setTotalPoints('Cannot');
            setDescription('');
            setGrade('12th Grade');
            
            // Hide the popup after 3 seconds
            setTimeout(() => {
            setShowSavedPopup(false);
            }, 3000);
        };

        const handleDelete = (id) => {
        setQuestions(questions.filter(question => question.id !== id));
    };

    const handleEdit = (question) => {
        setEditingId(question.id);
        setEditText(question.text);
        setEditPoints(question.points);
    };

    const handleSaveEdit = () => {
        setQuestions(questions.map(question => 
        question.id === editingId 
            ? { ...question, text: editText, points: editPoints } 
            : question
        ));
        setEditingId(null);
    };

    const handleManualEntry = () => {
        // Add a new empty question
        const newId = questions.length > 0 ? Math.max(...questions.map(q => q.id)) + 1 : 1;
        setQuestions([
        ...questions,
        { id: newId, text: 'New question', points: 1 }
        ]);
        // Set the new question to edit mode immediately
        setEditingId(newId);
        setEditText('New question');
        setEditPoints(1);
    };
    return(
        <div className="app-container">

      {showSavedPopup && (
        <div className="popup">
          <div className="popup-content">
            Draft Saved Successfully!
          </div>

          </div>
      )}
        
    {/* Sidebar */}

    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Create New Quiz</h2>
        <div className="quiz-subject">12th Grade Mathematics</div>
        
        <div className="sidebar-menu">
          <button className="question-bank-btn"><FaDatabase className='icon'/>Question Bank</button>
          <button className="preview-quiz-btn">Preview Quiz</button>
        </div>
      </div>
      
    
    
      <div className="upload-question-section">
          
          <div className="question-upload-menu">

           <button className="upload-question-btn"><FaFile className='icon'/>Upload Question</button>
          <button className="manual-entry-btn" onClick={handleManualEntry}>
            <FaTasks className='icon'/>Manual Entry
          </button>

          </div>

            <div className="upload-area">
              <p>Drag and drop question file</p>
              <p className="file-formats">Supported formats: xlsv.csv.doc.docx.pdf</p>
              <button className="upload-btn" onClick={handleFileUpload}><FaUpload className='icon'/>Upload File</button>
            </div>
          </div>
          
          <div className='Spacing'>
            <p></p>
          </div>


        <div className="add-questions-section">

          <div className="sidebar-section-header">Added Questions</div>
          <div className="questions-list">
            
            <table>

              <thead>
                <tr>
                  <th>No.</th>
                  <th>Questions</th>
                  <th>Points</th>
                </tr>
              </thead>

              <tbody>
                
              {questions.map((question, index) => (
                <tr key={question.id}>
                  <td>{index + 1}.</td>
                  <td>
                    {editingId === question.id ? (
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                    ) : (
                      question.text
                    )}
                  </td>
                  <td>
                    {editingId === question.id ? (
                      <input
                        type="number"
                        value={editPoints}
                        onChange={(e) => setEditPoints(Number(e.target.value))}
                      />
                    ) : (
                      question.points
                    )}
                  </td>
                  <td>
                    {editingId === question.id ? (
                      <button onClick={handleSaveEdit}>Save</button>
                    ) : (
                      <FaEdit 
                        className='icon' 
                        onClick={() => handleEdit(question)} 
                      />
                    )}
                    <FaTrash 
                      className='icon' 
                      onClick={() => handleDelete(question.id)} 
                    />
                  </td>
                </tr>
              ))}

              </tbody>

            </table>

          </div>
        </div>

        <div className="sidebar-footer">

          <button className="save-btn"onClick={handleSaveDraft}>Save Draft</button>
          <button className="publish-btn">Publish Quiz</button>
        

        </div>
      </div>

      {/* Main Content - updated with grade dropdown */}

      <div className="main-content">
        <div className="quiz-details">
          <div className="quiz-header">
            <h1>Quiz Details</h1>
            <div className="grade-selector">
              <span className="grade-label">Grade</span>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="grade-dropdown"
              >
                {grades.map((grade) => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Quiz Title</div>
            <div className="detail-value">
              <input
                type="text"
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
                placeholder="Enter quiz title"
              />
            </div>
          </div>
          
          <div className="combined-row">
            <div className="detail-group">
              <div className="detail-label">Subject</div>
              <div className="detail-value">
                <select 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)}
                >
                  {subjects.map((subj) => (
                    <option key={subj} value={subj}>{subj}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="detail-group">
              <div className="detail-label">Duration</div>
              <div className="detail-value">
                <select 
                  value={duration} 
                  onChange={(e) => setDuration(e.target.value)}
                >
                  {durations.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="detail-group">
              <div className="detail-label">Total Points</div>
              <div className="detail-value">
                <input
                  type="number"
                  value={totalPoints}
                  onChange={(e) => setTotalPoints(e.target.value)}
                  placeholder="Points"
                />
              </div>
            </div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Description</div>
            <div className="detail-value">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter quiz description"
                rows="4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CreateQuiz;