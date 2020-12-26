import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./tester.css";

function Tester(props) {
  const [defects, setDefects] = useState([]);
  const [err, setErr] = useState(0);
  const [newStatus, setNewStatus] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:4000/api/defects")
      .then((res) => {
        setErr(0);
        setDefects(res.data);
      })
      .catch((err) => {
        setErr(1);
      });
  }, [newStatus]);

  const statusChange = (e) => {
    newStatus ? setNewStatus(false) : setNewStatus(true);
    let newObj = {
      status: e.currentTarget.innerHTML,
    };
    Axios.put(
      `http://localhost:4000/api/defects/${e.currentTarget.name}`,
      newObj
    )
      .then((res) => {
        alert("Defect status changed successfully!!");
      })
      .catch((err) => {
        alert("Unable to change Defect status, Something went wrong");
      });
  };

  const deleteDefect = (e) => {
    Axios.delete(`http://localhost:4000/api/defects/${e.currentTarget.name}`)
      .then((res) => {
        newStatus ? setNewStatus(false) : setNewStatus(true);
        alert("Defect has been deleted successfully!!");
      })
      .catch((err) => {
        alert("Unable to remove Defect, Something went wrong!!");
      });
  };

  const updateDefect = (e) => {
    console.log(e.currentTarget.name);
    props.history.push("/addDefects", {
      data: e.target.name,
    });
  };

  return (
    <>
      <p className="paraCSS">
        &nbsp;
        <span className="Left"> Add, Update and Delete Defects here ... </span>
        <span className="Right">
          <div onClick={() => props.history.push("/addDefects")}>
            <button>ADD MORE DEFECTS</button>
          </div>
        </span>
      </p>
      <div className="container">
        <br />
        {err === 0 ? (
          <React.Fragment>
            <table className="tableCenter styled-table">
              <thead>
                <tr>
                  <th>Defect Category</th>
                  <th>Defect Description</th>
                  <th>Defect Priority</th>
                  <th>Defect Status</th>
                  <th style={{ textAlign: "center" }}>Change Status</th>
                  <th style={{ textAlign: "center" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {defects.map((item) => (
                  <tr key={item._id}>
                    <td> {item.category} </td>
                    <td> {item.description} </td>
                    <td> {item.priority} </td>
                    <td> {item.status} </td>
                    <td style={{ textAlign: "center" }}>
                      {item.status === "New" ? (
                        <button name={item._id} onClick={statusChange}>
                          Progress
                        </button>
                      ) : null}
                      {item.status === "Progress" ? (
                        <button name={item._id} onClick={statusChange}>
                          Close
                        </button>
                      ) : null}
                      {item.status === "Close" ? (
                        <button name={item._id} onClick={statusChange}>
                          New
                        </button>
                      ) : null}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      
                      <button name={item._id} onClick={deleteDefect}>
                        Delete
                      </button>
                      &nbsp;
                      <button name={item._id} onClick={updateDefect}>
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        ) : (
          <h3>Unable to fetch Defects, Something went wrong</h3>
        )}
      </div>

      <p className="paraCSSEnd">
        &nbsp;
        <span>
          <small>
            &copy; Copyright {new Date().getFullYear()}, Khushboo Chaurasiya
          </small>
        </span>
      </p>
    </>
  );
}

export default Tester;
