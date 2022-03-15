import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../LoadingError/Toast";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { toast } from "react-toastify";
import { updateProfileAction } from "../../redux/Action/userAction";
const ProfileTabs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toastId = React.useRef(null);
  const toastObject = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { loading: updateLoading } = userUpdateProfile;

  useEffect(() => {
    //Check Object user khac null
    if (Object.keys(user).length !== 0 && user.constructor === Object) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    //Check Password match
    if (password !== confirmPassword) {
      //Check toast chi xuat hien 1 lan
      if(!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Password does not match", toastObject);
      }
    } else {
      //Update Profile
      dispatch(updateProfileAction({id: user._id, name, email, password}))
      //Check toast chi xuat hien 1 lan
      if(!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Profile updated", toastObject);
      }
    }
  };
  return (
    <>
      <Toast />
      {error && <Message variant="alert-danger">{error}</Message>}
      {loading && <Loading />}
      {updateLoading && <Loading />}
      <form className="row form-container" onSubmit={submitHandler}>
        <div className="col-md-6">
          <div className="form">
            <label className="account-fn">UserName</label>
            <input
              className="form-control"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label className="account-email">E-mail Address</label>
            <input
              className="form-control"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label className="account-pass">New Password</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label className="account-confirm-pass">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </>
  );
};

export default ProfileTabs;
