import './App.css';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './Pages/CreateAccount';
import ForgotPassword from './Pages/ForgotPassword';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="signIn" element={<SignInPage/>}/>
          <Route path='Login' element={<LoginPage/>}/>
          <Route path='ResetPassword' element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
