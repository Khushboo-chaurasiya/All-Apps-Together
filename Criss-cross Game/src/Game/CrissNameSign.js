import React, { useState } from 'react';
import "./sing.css";

function CrissNameSign(props) {
    const [loginCheck, setLoginCheck] = useState(0);
    const [firstPerson, setFirstPerson] = useState("");
    const [secondPerson, setSecondPerson] = useState("");
    const [sign, setSign] = useState("");

    const startGame = () => {
        setLoginCheck(1);
        let move;
        if(firstPerson !== "" && secondPerson !== "" && sign !==""){
            if(sign === "X"){
                move = window.confirm("Hi "+firstPerson+" your symbol is "+sign+"\nand "+secondPerson+" your symbol is O \nAre you ready to start Game ?");
            }
            else{
                move = window.confirm("Hi "+firstPerson+" your symbol is "+sign+"\nand "+secondPerson+" your symbol is X \n Are you ready to start Game ?");   
            }
        }

        if(move){
            let signSend;
            if(sign === "X"){
                signSend = "O"
            }else{
                signSend = "X";
            }
            
            props.history.push('/crissCross', {
                firstPerson : firstPerson,
                secondPerson : secondPerson,
                sign : signSend
            });
        }
    }

    const radioSign = (e) => {
        setSign(e.target.value);
    }
    return (
        <div className="container">
        <form className="">
            <br/>
            <div className="form-group">
            <h6 className="control-label col-sm-12"><b>Please make entry to start Criss-cross Game...</b></h6>
            
            
            <label className="control-label col-sm-12">First person :</label>
            <div className="col-sm-12">          
                <input type="text" className="form-control" id="name1" placeholder="Enter First Person name: " name="fp1" value={firstPerson}
                onChange={(e) => setFirstPerson(e.target.value)} />
            </div>
            {loginCheck===1 && firstPerson==="" && <p className="control-label col-sm-12 ErrorPara">*Please enter First Person name*</p>}
            </div>
            <div className="form-group">
            <label className="control-label col-sm-12">Second person :</label>
            <div className="col-sm-12">          
                <input type="text" className="form-control" id="name1" placeholder="Enter Second Person name: " name="fp2" value={secondPerson}
                onChange={(e) => setSecondPerson(e.target.value)} />
            </div>
            {loginCheck===1 && secondPerson==="" && <p className="control-label col-sm-12 ErrorPara">*Please enter Second Person name*</p>}
            </div>
            <div className="form-group">        
            <div className="col-sm-offset-12 col-sm-12">
                <div className="radio1">
                <label>Select Sign for First person:</label> &nbsp; &nbsp;
                <label><input type="radio" name="sign" value="X" onChange={radioSign} checked={sign === "X"} /> X </label> &nbsp;
                <label><input type="radio" name="sign" value="O" onChange={radioSign} checked={sign === "O"}/> O </label>
                </div>
            </div>
            {loginCheck===1 && sign==="" && <p className="control-label col-sm-12 ErrorPara">*Please select Sign for First Person*</p>}
            </div>
            <div className="form-group App col-sm-offset-2 col-sm-12">        
            <div>
                <button type="button" className="btn btn-primary" onClick={startGame}>Start Game</button>
            </div>
            </div>
        </form>
        </div>
    )
}

export default CrissNameSign
