import { TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import Swal from "sweetalert2";

interface User {
  aname: string;
  empCode: string;
  desig: string;
  doj: string;
  noProj: number;
}

interface RowProps {
  user: User;
}

const RowComponent: React.FC<RowProps> = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const [btnEdit, setBtn1] = useState(true);
  const [btnSave, setBtn2] = useState(false);

  const [values, setValues] = useState({
    aname: user.aname,
    empCode: user.empCode,
    desig: user.desig,
    doj: user.doj,
    noProj: user.noProj,
  });

  useEffect(() => {
    console.log("myState has changed:");
  });

  const toggleEditSave = (id: string) => {
    if (id === "edit") {
      setEditMode(true);
      setBtn1(false);
      setBtn2(true);
    } else {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          const empCode = values.empCode;
          axios
            .post(`http://localhost:8080/updateAdmin/${empCode}`, values)
            .then((res) => console.log(res));
          setValues(values);

          setEditMode(false);
          setBtn1(true);
          setBtn2(false);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log("Cancelled");
        }
      });
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const deleteEmp = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this record!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        const empCode = values.empCode;
        axios
          .delete(`http://localhost:8080/delEmp/${empCode}`)
          .then((response) => {
            alert("Record Deleted Successfully!");
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error deleting resource", error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("Cancelled");
      }
    });
  };

  return (
    <TableRow key={user.empCode}>
      <TableCell align="left">
        {editMode ? (
          <input
            className={editMode ? "edit-modeOn" : "editModeOff"}
            id="aname"
            name="aname"
            value={values.aname}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        ) : (
          <p>{values.aname}</p>
        )}
      </TableCell>
      <TableCell align="left">
        {editMode ? (
          <input
            className={editMode ? "edit-modeOn" : "editModeOff"}
            id="empCode"
            name="empCode"
            value={values.empCode}
            onChange={handleInputChange}
            disabled
          />
        ) : (
          <p>{values.empCode}</p>
        )}
      </TableCell>
      <TableCell align="left">
        {editMode ? (
          <input
            className={editMode ? "edit-modeOn" : "editModeOff"}
            id="desig"
            name="desig"
            value={values.desig}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        ) : (
          <p>{values.desig}</p>
        )}
      </TableCell>
      <TableCell align="left">
        {editMode ? (
          <input
            className={editMode ? "edit-modeOn" : "editModeOff"}
            id="doj"
            name="doj"
            value={values.doj}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        ) : (
          <p>{values.doj}</p>
        )}
      </TableCell>
      <TableCell align="left">
        {editMode ? (
          <input
            className={editMode ? "edit-modeOn" : "editModeOff"}
            id="noProj"
            name="noProj"
            value={values.noProj}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        ) : (
          <p>{values.noProj}</p>
        )}
      </TableCell>
      <TableCell align="left">
        {btnEdit && (
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={() => toggleEditSave("edit")}
          >
            <EditIcon
              style={{ marginRight: "10px", cursor: "pointer" }}
            ></EditIcon>
          </button>
        )}
        {btnSave && (
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={() => toggleEditSave("save")}
          >
            <CheckIcon></CheckIcon>
          </button>
        )}
        <button
          style={{ background: "transparent", border: "none" }}
          onClick={deleteEmp}
        >
          <DeleteIcon style={{ cursor: "pointer" }}></DeleteIcon>
        </button>
      </TableCell>
    </TableRow>
  );
};

export default RowComponent;
