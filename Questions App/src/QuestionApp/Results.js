import React, { useEffect, useState } from 'react'

function Results(props) {

    const {total} = props.location.state;

    const [marks, setMarks] = useState(0)
    useEffect(() => {
        let ansArr = props.location.state.data;
        for(let i=0; i<ansArr.length; i++){
            if(ansArr[i] === "Y"){
                setMarks((prevMarks) => prevMarks + 1);
            }
        }

    }, [props.location.state.data])
    return (
        <>
        <div className="container">
            Number of Questions Attempt correctly : <b>{marks}</b> <br/>
            Percentage Obtained : {parseFloat((marks/total)*100).toFixed(2)} % <br/>
            Result Status : {(marks/total)*100 > 40 ? <b style={{color:'green'}}>Pass</b> : <b style={{color : 'red'}}>Fail</b>}
        </div>
        <p className="paraCSSEnd" style={{position: "fixed"}}>&nbsp;
        <span>
          <small>
            &copy; Copyright {new Date().getFullYear()}, Khushboo Chaurasiya
          </small>
        </span>
      </p>
      </>
    )
}

export default Results
