import React, { useState, useEffect } from 'react';
import "./tester.css";
import Axios from 'axios';

function AddDefects(props) {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [addDefectCheck, setAddDefectCheck] = useState(0);
    const [submition, setSubmition] = useState("");

    useEffect(() => {
       if(props.location.state){
            
            Axios.get(`http://localhost:4000/api/defects/${props.location.state.data}`)
            .then((res) => {
                setCategory(res.data.category);
                setDescription(res.data.description);
                setPriority(res.data.priority);
                setStatus(res.data.status);
            })
            .catch((err) => {
                alert("Unable to Update this defect, Something went wrong");
            })
       } 
    }, [])

    const radioCategory = (e) => {
        setCategory(e.target.value);
    }
    const radioPriority = (e) => {
        setPriority(e.target.value);
    }

    const handleAddDefect = () => {
        setAddDefectCheck(1);
        if(category !== "" && description !== "" && priority !== "" && status !==""){
            let obj = {
                category : category,
                description : description,
                priority : priority,
                status : status
            }
    
            Axios.post("http://localhost:4000/api/defects", obj)
            .then((res) => {
                setSubmition("Defect added successfully")
            })
            .catch((err) => {
                setSubmition("Something went wrong, unable to ADD defects")
            })
        }
    }

    const handleUpdateDefect = () => {
        setAddDefectCheck(1);
        if(category !== "" && description !== "" && priority !== "" && status !== ""){
            let obj = {
                category : category,
                description : description,
                priority : priority,
                status : status
            }
    
            Axios.put(`http://localhost:4000/api/defects/${props.location.state.data}`, obj)
            .then((res) => {
                let update = window.confirm("Defect Updated successfully , Do you want to update further?");
                if(!update){
                    props.history.push('/tester')
                }
            })
            .catch((err) => {
                setSubmition("Something went wrong, unable to Update defects")
            })
        }
    }

    const optionStatus = (e) => {
        setStatus(e.target.value);
    }
    return (
        <>
        <p className="paraCSS">
        &nbsp;
        <span className="Left"> Add, Update and Delete Defects here ... </span>
        <span className="Right">
          <div onClick={() => props.history.push("/tester")}>
            <button>VIEW DEFECTS</button>
          </div>
        </span>
      </p>
        <div className="Container">
            
        <form>
            <br/>
            <div className="form-group">
            <h5 className="control-label col-sm-12">Add Defects Here : </h5>
            <br/>
            <div className="control-label col-sm-12 radio1">
                    <label>Defect Category:</label> &nbsp; &nbsp;
                    <label><input type="radio" name="category" value="Mobile" onChange={radioCategory} checked={category==="Mobile"} /> Mobile </label> &nbsp;
                    <label><input type="radio" name="category" value="Desktop" onChange={radioCategory} checked={category==="Desktop"} /> Desktop </label> &nbsp;
                    <label><input type="radio" name="category" value="DDA" onChange={radioCategory} checked={category==="DDA"} /> DDA </label>
                </div>
            {addDefectCheck===1 && category==="" && <p className="control-label col-sm-12 ErrorPara">*Please select Defect Category*</p>}
            </div>
            <div className="form-group">
            <label className="control-label col-sm-12">Defect Description:</label>
            <div className="col-sm-12">          
                <textarea type="textarea" className="form-control" id="desc" placeholder="Enter Defect description" name="desc" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            {addDefectCheck===1 && description==="" && <p className="control-label col-sm-12 ErrorPara">*Please Enter Defect description*</p>}
            </div>

            <div className="form-group"> 
            <div className="col-sm-offset-2 col-sm-12">
                <div className="radio1">
                <label>Defect Priority:</label> &nbsp; &nbsp;
                <label><input type="radio" name="priority" value="Low" onChange={radioPriority} checked={priority === "Low"} /> Low </label> &nbsp;
                <label><input type="radio" name="priority" value="Medium" onChange={radioPriority} checked={priority === "Medium"}/> Medium </label> &nbsp;
                <label><input type="radio" name="priority" value="High" onChange={radioPriority} checked={priority === "High"}/> High </label>
                </div>
            </div>
            {addDefectCheck===1 && priority==="" && <p className="control-label col-sm-12 ErrorPara">*Please select Defect priority*</p>}
            </div>

            <div className="form-group col-sm-offset-2 col-sm-12">
            <label>Defect Status </label>
            <select className="form-control" value={status} onChange={optionStatus}>
                <option value="">Select Status</option>
                <option value="New">New</option>
                <option value="Progress">Progress</option>
                <option value="Close">Close</option>
            </select>
            {addDefectCheck===1 && status==="" && <p className="ErrorPara">*Please select Defect status*</p>}
            </div>

            <div className="form-group col-sm-offset-2 col-sm-12">        
            <div>
                {
                    props.location.state ? <button type="button" className="btnCenter" onClick={handleUpdateDefect}>Update Defect</button> : <button type="button" className="btnCenter" onClick={handleAddDefect}>Add Defect</button>
                }
            </div>
            </div>
            <h6 style={{textAlign:"center"}} className="control-label col-sm-12">{submition}</h6>
        </form>
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
    )
}

export default AddDefects
