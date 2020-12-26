import React, { useState, useEffect } from 'react'
import Axios from 'axios';

function Notes() {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [addNotesCheck, setAddNotesCheck] = useState(0);
    const [post, setPost] = useState([]);
    const [dataRemoved, setDataRemoved] = useState(0);
    
    useEffect(() => {
        Axios.get("http://localhost:4000/api/notes")
        .then(res => {
            console.log(res.data);
            setPost(res.data)
        })
        .catch(err => {
            console.log("Unable to fetch records")
        })
    }, [addNotesCheck, dataRemoved])

    const addNotes = () => {
        setAddNotesCheck(1);
        let obj = {
            title : title ,
            details : details,
            timeDetail : new Date().toLocaleString()
        }
        if(title !== "" && details !== ""){
            Axios.post("http://localhost:4000/api/notes", obj)
            .then(res => {
                console.log(res.data);
                setAddNotesCheck(0);
                setTitle("");
                setDetails("");
            })
            .catch(err => {
                console.log("Unable to fetch records")
            })
        }
    }

    const hideShowDetails = (e) => {
       const khus = document.getElementById(`${e.target.name}`);
       const showBtn = document.getElementById(`show${e.target.name}`);
       const hideBtn = document.getElementById(`hide${e.target.name}`);
       if(khus.style.display === 'none'){
            khus.style.display = '';
            hideBtn.style.display = '';
            showBtn.style.display = 'none'
       } else{
        khus.style.display = 'none';
        hideBtn.style.display = 'none';
        showBtn.style.display = ''
       }
    }

    const removeNotes = (e) => {
        let id = e.target.name;
        Axios.delete(`http://localhost:4000/api/notes/${id}`)
        .then(res => {
            dataRemoved === 0 ? setDataRemoved(1) : setDataRemoved(0);
            console.log(res.data);
            alert("data has been deleted")
        })
        .catch(err => {
            console.log("Unable to delete records")
        })
    }

    return (
        <div>
            <br/>
            <div className="container">
                <h6 className="App headingTitle">Timestamp based Notes Application</h6>
                <form className="form-horizontal">
                <div className="form-group">
                <div className="col-sm-12">          
                    <input type="text" className="form-control" id="title" placeholder="Notes title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                {addNotesCheck===1 && title==="" && <p className="control-label col-sm-12 ErrorPara">*Please Enter Notes title*</p>}
                </div>
                <div className="form-group">
                <div className="col-sm-12">          
                    <textarea type="textarea" className="form-control" id="details" placeholder="Notes details" name="details" value={details} onChange={(e) => setDetails(e.target.value)} />
                </div>
                {addNotesCheck===1 && details==="" && <p className="control-label col-sm-12 ErrorPara">*Please Enter Notes details*</p>}
                </div>
                <div className="App">
                    <button type="button" onClick={addNotes}>ADD NOTES</button>
                    
                </div>
                
                </form>

                <div>
                {
                    post.map(item => (
                        <div key={item._id}>
                            <div className="wholeList">
                                <div className="Left">
                                    <h6 className="itemTitle">{item.title}</h6>
                                    <p style={{display:'none'}} id={item._id} className={item._id}>{item.details}</p>
                                </div>
                            <div className="details">
                                {item.timeDetail} <br/>
                                <div className="rightBtn">
                                <button type="button" name={item._id} onClick={removeNotes}>Remove</button> &nbsp;
                                <button type="button" name={item._id} id={`show${item._id}`} onClick={hideShowDetails}>Show Details</button>
                                <button type="button" style={{display:'none'}} name={item._id} id={`hide${item._id}`} onClick={hideShowDetails}>Hide Details</button>
                                </div>
                            </div>
                            </div>
                            <div className="bottomList"> </div>
                        </div>
                    ))
                }
                </div>
                
            </div>
            
        </div>
    )
}

export default Notes
