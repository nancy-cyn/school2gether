import './TeacherCreateAcc.css'

const TeacherCreateAcc = () => {
    return ( 
        <div>
            <div className='loginPage'>
                <h1 id='Login-h1'>Create an account</h1>
                <input type="text" id="Input-Surname" placeholder='Name and Surname'/>
                <br />
                <input type="text" id="Input-Password" placeholder='Password'/>
                <br />
                <input type="text" id="Input-Password" placeholder='Confirm password'/>
                <br />
                <input type="text" id="Input-Email" placeholder='Email'/>
                <br />
                <input type="text" id="Input-Sace" placeholder="Enter Sace Number"/>
                <p>. Password can not be your personal information</p>
                <button id='SignUp-btn'>Sign Up</button>
            </div>
        </div>
     );
}
 
export default TeacherCreateAcc;