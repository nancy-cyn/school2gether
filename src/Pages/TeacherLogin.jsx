import './TeacherCreateAcc.css'

const TeacherLogin = () => {
    return ( 
        <div className='loginPage'>
            <h1 id='Login-h1'>Login</h1>
            <input type="text" id="Input-Surname" placeholder='Name and Surname'/>
            <br />
            <input type="text" id="Input-Password" placeholder='Password'/>
            <br />
            <input type="text" id="Input-Email" placeholder='Email'/>
            <br />
            <input type="text" id="Input-Sace" placeholder='Please enter the Sace number' />
            <br />
            <div id="password-section">
                <label for="RememberMe">
                    <input type="checkbox" id="RememberMe" /> Remember me
                </label>
                <Link to="/ResetPassword" id="ForgotPassword">Forgot password</Link>
            </div>
            <button id='Login-btn'>Login</button>
            <p>Don't have an account? <Link to="/signIn" id='Register'>Register</Link></p>
        </div>
     );
}
 
export default TeacherLogin;

