import { useState } from "react";
import "./login.scss";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./fireBase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const auth = getAuth();
  const { myReducer } = useStateValue();
  const [, disPatch] = myReducer;

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          disPatch({
            type: "SIGN_IN",
            payload: auth,
          });
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <form className='container'>
        <h1>Sign-In</h1>
        <label>
          Email <br />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password <br />
          <input
            type='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <br />
        <button onClick={signIn}>Login</button>
        <hr />
        <h1>Don't have account</h1>
        <button onClick={register}>Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
