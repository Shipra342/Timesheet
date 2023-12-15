import { useState } from "react";
import  "../../Css/admin.css";
import { MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";


const Admin = (openModal: any) => {

  const [userInfo, setUser] = useState({
    aname: "",
    empCode: "",
    doj: "",
    desig: "",
    noProj: 0,
  });

  const designation = [
    {
      id: 1,
      name: "Project Manager",
    },
    {
      id: 2,
      name: "Sofware Engineer",
    },
    {
      id: 3,
      name: "Business Analyst",
    },
    {
      id: 4,
      name: "QA Engineer",
    },
  ];

  const handleChange = (event: any) => {
    setUser({ ...userInfo, desig: event.target.value });
    
  };

  const submit = () => {
    if (
      userInfo.desig === null ||
      userInfo.empCode === "" ||
      userInfo.aname === "" ||
      userInfo.doj === "" ||
      userInfo.noProj === null
    ) {
      debugger
      openModal = false;
      Swal.fire({
        icon: 'error',
        title: 'All fields are mandatory',
        text: 'Please fill out all the required fields before submitting.',
      });
    } else {
    
      axios
        .post(`http://localhost:8080/addNewEmp`, userInfo)
        .then((res) => console.log(res));
        setUser(userInfo);
    }
  };


  return (
    <div className="containerr">
      <div className="formcontainer">
        <form onSubmit={submit} className="form">
          <div>
            <label>Name: </label>
            <input
              type="text"
              onChange={(e) =>
                setUser({ ...userInfo, aname: e.target.value })
              }
            />
          </div>
          <div>
            <label>Employee Code: </label>
            <input
              type="text"
              onChange={(e) =>
                setUser({ ...userInfo, empCode: e.target.value })
              }
            />
          </div>
          <div>
            <label>No. of Projects: </label>
            <input
              type="number"
              onChange={(e) => setUser({ ...userInfo, noProj: parseInt(e.target.value) })}
            />
          </div>
          <div>
            <label>Date of Joining: </label>
            <input
              type="date"
              onChange={(e) =>
                setUser({ ...userInfo, doj: e.target.value })
              }
            />
          </div>
          <div>
            <label>Designation: </label>
            <Select
              onChange={handleChange}
              className="select"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem>
                <em>Select your designation</em>
              </MenuItem>
              <MenuItem value={designation[0].name}>
                {designation[0].name}
              </MenuItem>
              <MenuItem value={designation[1].name}>
                {designation[1].name}
              </MenuItem>
              <MenuItem value={designation[2].name}>
                {designation[2].name}
              </MenuItem>
              <MenuItem value={designation[3].name}>
                {designation[3].name}
              </MenuItem>
            </Select>
          </div>
          <button>Add Member</button>
        </form>
      </div>
    </div>
  );
};
export default Admin;
