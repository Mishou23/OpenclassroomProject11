import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from "../../Store/reducers/userlogin";
import './style.css'

const Inputs= () => {
  const [email, setEmail] = useState('tony@stark.com');
  const [password, setPassword] = useState('password123');


  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault();
    let userInfo = {
      email: email,
      password: password
    }
    dispatch(loginUser(userInfo)).then((result) => {
      if (result.payload) { 
        console.log("Connexion completed");
        navigate('/profile');
      }
      else {
        console.log("Connexion échouée");
      }
    })
  }
  
  return (
    <>
      <div className="contain">
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button className="sign-in-button">Sign In</button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

export default Inputs;
