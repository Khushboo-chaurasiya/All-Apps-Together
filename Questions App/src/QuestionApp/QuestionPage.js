import React, { useState, useEffect } from "react";
import "../App.css";
import questionData from "./Questions.json";
import "./question.css";

function QuestionPage(props) {
  const [posts, setPosts] = useState([]);
  const [choice, setChoice] = useState(["A", "B", "C", "D"]);
  const resultArr = [];

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    let shuffledArr = [].concat(questionData);
    shuffle(shuffledArr);
    shuffledArr = shuffledArr.slice(0, 5);
    setPosts(shuffledArr);

    let arr = [].concat(choice);
    shuffle(arr);
    setChoice(arr);
  }, []);

  const handleChange = (e) => {
    let targetValue = e.target.value;
    let idGet = e.target.name;

    let obj = posts.find((o) => o._id === idGet);

    let soln = posts.findIndex((x) => x._id === idGet);
    if (targetValue === obj.ans) {
      resultArr[soln] = "Y";
    } else {
      resultArr[soln] = "N";
    }
  };

  function submitHandler() {
    window.confirm("Are you sure to Submit?") &&
      props.history.push("/results", {
        data: resultArr,
        total: posts.length,
      });
  }

  return (
    <React.Fragment>
      <div className="whole">
        {posts.map((item) => (
          <div key={item._id} className="Left container">
            <label className="form-check-label">
              <b> {item.Query} </b>
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={item._id}
                onChange={handleChange}
                id="Radios1"
                value={item.A}
              />
              <label className="form-check-label">{item.A}</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={item._id}
                onChange={handleChange}
                id="Radios2"
                value={item.B}
              />
              <label className="form-check-label">{item.B}</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={item._id}
                onChange={handleChange}
                id="Radios3"
                value={item.C}
              />
              <label className="form-check-label">{item.C}</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={item._id}
                onChange={handleChange}
                id="Radios4"
                value={item.D}
              />
              <label className="form-check-label">{item.D}</label>
            </div>
          </div>
        ))}
        <div className="App">
          <button
            type="submit"
            className="btn"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </div>
      <p className="paraCSSEnd">
        &nbsp;
        <span>
          <small>
            &copy; Copyright {new Date().getFullYear()}, Khushboo Chaurasiya
          </small>
        </span>
      </p>
    </React.Fragment>
  );
}

export default QuestionPage;
