import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from './../redux/Action/userAction';
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
const Login = () => {
  window.scrollTo(0,0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const location = useLocation()
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/"

  const userLogin = useSelector((state) => state.userLogin)
  const {error, loading, userInfo} = userLogin

  useEffect(() => {
    if(userInfo) {
      if(userInfo.isAdmin) {
        navigate("/dashboard")
      } else {
        navigate(redirect)
      }
      
    }
  },[userInfo, navigate, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginAction(email, password))
    
  }
  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading/>}
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>Create Account</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
