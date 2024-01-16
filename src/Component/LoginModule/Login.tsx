import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import "../../Css/login.css";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    aid: 123,
    email: "",
    pass: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [allMem, setMem] = useState({
    aname: "",
    email: "",
    empCode: "",
    desig: "",
    doj: "",
    noProj: 1,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/showAdmin/${user.email}`);
  
      setMem({
        email: user.email,
        ...response.data,
      });

      setFormSubmitted(true);
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {

    if (formSubmitted) {
      console.log(allMem);
      navigate("/timesheet/dashboard", {state:allMem});
    }
    
  }, [allMem, formSubmitted]); 

  const navigate = useNavigate();

  const submit = (e: any) => {
    e.preventDefault();

    if (user.email === "" && user.pass === "") {
      alert("inputs are mandatory");
      setUser({ ...user, email: "", pass: "" });
      return;
    } else if (user.email === "shik@cybage.com" && user.pass === "12345") {
      setUser({ ...user, email: "", pass: "" });
      navigate("/showMemList");
    } else {
      fetchData();
    }
  };

  return (
    <div className="maincontainer">
      <div className="sub-container">
        <form onSubmit={submit} style={{ height: "100%", width: "80%" }}>
          <div className="loginImg">
            <SupervisedUserCircleIcon></SupervisedUserCircleIcon>
          </div>
          <div className="email">
            <div className="inputcontainer">
              <PersonIcon
                style={{
                  color: "rgb(50, 108, 179)",
                  fontSize: "28px",
                  position: "absolute",
                  paddingLeft: "10px",
                }}
              ></PersonIcon>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
              />
            </div>
          </div>
          <div className="pass">
            <div className="inputcontainer">
              <LockIcon
                style={{
                  color: "rgb(50, 108, 179)",
                  fontSize: "28px",
                  position: "absolute",
                  paddingLeft: "10px",
                }}
              ></LockIcon>
              <input
                type="pass"
                placeholder="pass"
                value={user.pass}
                onChange={(e) => setUser({ ...user, pass: e.target.value })}
              />
            </div>
          </div>
          <div className="loginbtn">
            <button onClick={submit}>Log In</button>
          </div>

          <div className="bottom">
            <div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" />
                <p
                  style={{
                    color: "rgb(50, 108, 179);",
                    fontWeight: 550,
                    paddingLeft: "7px",
                  }}
                >
                  Remember Me
                </p>
              </div>
              <p style={{ color: "rgb(50, 108, 179);", fontWeight: 550 }}>
                Forgot pass?
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
