import { Chart, registerables } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import "../../Css/dashboard.css";
import { MenuItem, Select } from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [project, setProject] = React.useState("os");
  const [time, setTime] = React.useState("today");
  const [openInfo, setuser] = React.useState(false);

  const handleChange = (event: any) => {
    setProject(event.target.value as string);
  };
  const handleChange1 = (event: any) => {
    setTime(event.target.value as string);
  };

  const logoutchange = () => {
    // setuser(!openInfo);
    navigate("/timesheet")
  };

  const location = useLocation();

  const user = location.state;
  console.log(user);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const months = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const todayData = ["OS Onboarding", "DAS Build"];
  const tasks = ["Meetings", "Coding", "R&D", "Scrum call"];

  Chart.register(...registerables);

  const data = {
    labels: days,
    datasets: [
      {
        horizontal: true,
        label: "Timesheet",
        backgroundColor: [
          "#bf4040",
          "#86b300",
          "#bf4040",
          "#bf4040",
          "#86b300",
        ],

        borderColor: "#002D62",
        data: [7, 10, 5, 2, 8],
      },
    ],
  };
  const data1 = {
    labels: months,
    datasets: [
      {
        label: "Timesheet",
        backgroundColor: [
          "#bf4040",
          "#86b300",
          "#bf4040",
          "#bf4040",
          "#86b300",
        ],
        borderColor: "#002D62",
        data: [10, 8, 6, 9, 5],
      },
    ],
  };
  const pieData1 = {
    labels: todayData,
    datasets: [
      {
        label: "Today's Hours",
        backgroundColor: [
          "#bf4040",
          "#86b300",
          "#bf4040",
          "#bf4040",
          "#86b300",
        ],
        data: [4.5, 2],
      },
    ],
  };
  const pieData2 = {
    labels: todayData,
    datasets: [
      {
        label: "Today's Hours",
        backgroundColor: [
          "#bf4040",
          "#86b300",
          "#bf4040",
          "#bf4040",
          "#86b300",
        ],
        data: [34, 8],
      },
    ],
  };
  const pieData3 = {
    labels: todayData,
    datasets: [
      {
        label: "Today's Hours",
        backgroundColor: [
          "#bf4040",
          "#86b300",
          "#bf4040",
          "#bf4040",
          "#86b300",
        ],
        data: [100, 45],
      },
    ],
  };
  const taskdata = {
    labels: tasks,
    datasets: [
      {
        horizontal: true,
        label: "Tasks",
        backgroundColor: ["#9933ff", "#ffc61a", "#00b3b3", "rgb(31, 114, 216)"],

        borderColor: "#002D62",
        data: [2, 4, 1, 0.5],
      },
    ],
  };
  const navigate = useNavigate();

  const openDsrForm = () => {
    navigate("/addDSR");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        width: "98vw",
        height: "98vh",
      }}
    >
      <div className="header">
        <div style={{ width: "60%", textAlign: "left" }}>
          <p>Timesheet</p>
        </div>
        <div
          style={{ display: "flex", width: "40%", justifyContent: "flex-end" }}
        >
          <p style={{ paddingRight: "40px" }}>All Task</p>
          <p style={{ paddingRight: "40px" }} onClick={openDsrForm}>
            Add DSR +
          </p>
        </div>
        <div>
          <label>
            <AccountCircleIcon />
          </label>
          <Select value={"Logout"} onChange={logoutchange}>
            <MenuItem value={"logout"}>Log Out</MenuItem>
          </Select>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          paddingTop: "10px",
          height: "46%",
          justifyContent: "center",
        }}
      >
        <div className="upper-chart">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <label
                style={{
                  fontWeight: "550",
                  marginRight: "10px",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                Select Project:{" "}
              </label>
              <Select value={project} onChange={handleChange}>
                <MenuItem value={"os"}>OS Onboarding</MenuItem>
                <MenuItem value={"das"}>DAS Build</MenuItem>
              </Select>
            </div>
            {project === "os" && <Bar data={data} style={{ width: "60%" }} />}
            {project === "das" && <Bar data={data1} style={{ width: "60%" }} />}
          </div>
          <div>
            {project === "os" && (
              <Bar
                data={taskdata}
                options={{
                  indexAxis: "y",
                }}
                style={{ width: "60%" }}
              />
            )}
            {project === "das" && (
              <Bar
                data={taskdata}
                options={{
                  indexAxis: "y",
                }}
                style={{ width: "60%" }}
              />
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50%",
          paddingBottom: "10px",
        }}
      >
        <div className="pieChartDiv">
          <div className="bottomLeft">
            <div className="userInfo">
              <div className="userField">
                <label
                  style={{
                    fontWeight: 550,
                    fontSize: "18px",
                  }}
                >
                  Name:{" "}
                </label>
                <label>{user.aname}</label>
              </div>
              <div className="userField">
                <label
                  style={{
                    fontWeight: 550,
                    fontSize: "18px",
                  }}
                >
                  Employee Code:{" "}
                </label>
                <label>{user.empCode}</label>
              </div>
              <div className="userField">
                <label
                  style={{
                    fontWeight: 550,
                    fontSize: "18px",
                  }}
                >
                  Designation:{" "}
                </label>
                <label>{user.desig}</label>
              </div>
              <div className="userField">
                <label
                  style={{
                    fontWeight: 550,
                    fontSize: "18px",
                  }}
                >
                  Date of Joining:{" "}
                </label>
                <label>{user.doj}</label>
              </div>
              <div className="userField">
                <label
                  style={{
                    fontWeight: 550,
                    fontSize: "18px",
                  }}
                >
                  No. of Projects:{" "}
                </label>
                <label>{user.noProj}</label>
              </div>
            </div>
          </div>
          <div className="bottomMid">
            <div className="missedDSR">
              <label style={{ fontWeight: "550" }}>Missed DSR</label>
              <label
                style={{
                  fontWeight: "550",
                  color: "red",
                  fontSize: "24px",
                }}
              >
                {user.missDsr}
              </label>
            </div>
            <div className="cal">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar sx={{ padding: 0 }} disableFuture />
              </LocalizationProvider>
            </div>
          </div>

          <div className="inPieChart">
            <div
              style={{
                display: " flex",
                width: "60%",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <label
                style={{
                  fontWeight: "550",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                Select Days:{" "}
              </label>
              <Select value={time} onChange={handleChange1}>
                <MenuItem value={"today"}>Days</MenuItem>
                <MenuItem value={"week"}>Week</MenuItem>
                <MenuItem value={"month"}>Month</MenuItem>
              </Select>
            </div>

            {time === "today" && (
              <div className="pieC">
                <Pie data={pieData1} />
              </div>
            )}
            {time === "week" && (
              <div className="pieC">
                <Pie data={pieData2} />
              </div>
            )}
            {time === "month" && (
              <div className="pieC">
                <Pie data={pieData3} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
