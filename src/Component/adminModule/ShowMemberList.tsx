import {
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Admin from "./admin";
import { useEffect, useState } from "react";
import axios from "axios";

import "../../Css/showMemList.css";
import RowComponent from "./RowComponent";

const ShowMemberList = () => {

  const [values, setValues] = useState([
    {
      aname: "",
      empCode: "",
      desig: "",
      doj: "",
      noProj: 1,
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allMembers")
      .then((res) => setValues(res.data));
  }, []);
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightgray",
        overflow: "hidden",
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
          <p style={{ paddingRight: "40px" }} onClick={handleOpen}>
            Add Member +
          </p>
        </div>
        <div>
          <AccountCircleIcon />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Admin openModal={open}/>
      </Modal>

      <TableContainer
        component={Paper}
        sx={{
          margin: "10px",
          width: "calc(100% - 20px)",
          minHeight: "calc(55% - 20px)",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ th: { fontSize: "18px", fontWeight: "550" } }}>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Employee Code</TableCell>
              <TableCell align="left">Designation</TableCell>
              <TableCell align="left">Date Of Joining</TableCell>
              <TableCell align="left">No. Of Projects</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((user) => (
               <RowComponent key={user.empCode} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ShowMemberList;
