import './ForgotPassword.css'

const ForgotPassword = () => {
    return (  
        <div className='ForgotPassword'>
            <h1 id='Forgot-password-h1'>Forgot Password</h1>
            <p>Enter your email address and we will send you a link to reset your password</p>
            <input type="text" id="Input-Email" placeholder='Enter Email Address'/>
            <br />
            {/* <input type="text" id='Input-Parent-Code' placeholder='Enter parent code'/> */}
            <button id='btn-reset'>Send Reset Link</button>
        </div>
    );
}
 
export default ForgotPassword;